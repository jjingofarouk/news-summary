import { parse } from "node-html-parser";

// Edge runtime configuration
export const config = {
  runtime: "edge",
};

// Ensure Gemini API key is set
if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing env var for Gemini API");
}

export default async function handler(req: Request) {
  const { url } = (await req.json()) as {
    url?: string;
  };

  if (!url) {
    return new Response("No URL in the request", { status: 400 });
  }

  try {
    // Fetch the article content
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }

    const data = await response.text();
    const root = parse(data);
    const body = root.querySelector(".article-content");

    if (!body) {
      throw new Error("Article content not found on the page");
    }

    const text = body.innerText
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/(\r\t|\t|\r)/gm, "");

    const prompt = `I want you to act like a news article summarizer. I will input text from a news article and your job is to convert it into a useful summary of a few sentences. Do not repeat sentences and make sure all sentences are clear and complete: "${text}"`;

    // Gemini API request
    const geminiPayload = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.5,
        topP: 1,
        maxOutputTokens: 200,
      },
    };

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(geminiPayload),
      }
    );

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.statusText}`);
    }

    // Handle streaming response
    const stream = new ReadableStream({
      async start(controller) {
        const reader = geminiResponse.body?.getReader();
        if (!reader) {
          throw new Error("Failed to get response reader");
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              controller.close();
              break;
            }

            // Decode the chunk and parse it (Gemini streams JSON chunks)
            const chunk = new TextDecoder().decode(value);
            try {
              // Assuming the response is a stream of JSON objects
              const jsonChunks = chunk
                .split("\n")
                .filter((line) => line.trim() !== "");
              for (const jsonChunk of jsonChunks) {
                const parsed = JSON.parse(jsonChunk);
                const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                  controller.enqueue(new TextEncoder().encode(text));
                }
              }
            } catch (e) {
              console.error("Error parsing chunk:", e);
            }
          }
        } catch (e) {
          controller.error(e);
        } finally {
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (e: any) {
    console.error({ e });
    return new Response(e.message || "Internal Server Error", { status: 500 });
  }
}