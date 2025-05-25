import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { BookmarkIcon, ShareIcon, SunIcon, MoonIcon, ClipboardIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export const Home: NextPage = () => {
  const router = useRouter();
  const urlState = router.query.slug;
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [curArticle, setCurArticle] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [recentArticles, setRecentArticles] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [summaryLength, setSummaryLength] = useState<string>("medium");
  const [savedArticles, setSavedArticles] = useState<{ url: string, summary: string }[]>([]);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Load saved articles from localStorage
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }

    // Load recent articles from localStorage
    const recent = localStorage.getItem('recentArticles');
    if (recent) {
      setRecentArticles(JSON.parse(recent));
    }
  }, []);

  useEffect(() => {
    if (urlState && router.isReady && !curArticle && typeof urlState === "string") {
      generateSummary(urlState);
    }
  }, [router.isReady, urlState]);

  const curUrl = curArticle ? new URL(curArticle).pathname : "";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const saveArticle = () => {
    if (!curArticle || !summary) return;

    const newSavedArticles = [...savedArticles, { url: curArticle, summary }];
    setSavedArticles(newSavedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles));
    toast.success("Article saved to your collection");
  };

  const shareArticle = () => {
    if (!curArticle) return;

    if (navigator.share) {
      navigator.share({
        title: 'Article Summary',
        text: summary,
        url: curArticle,
      }).catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${curArticle}\n\nSummary:\n${summary}`);
    toast.success("Link and summary copied to clipboard");
  };

  const addToRecentArticles = (url: string) => {
    const updatedRecent = [url, ...recentArticles.filter(item => item !== url)].slice(0, 5);
    setRecentArticles(updatedRecent);
    localStorage.setItem('recentArticles', JSON.stringify(updatedRecent));
  };

  const loadRecentArticle = (url: string) => {
    setCurArticle(url);
    generateSummary(url);
  };

  const generateSummary = async (url?: string) => {
    setSummary("");
    const articleUrl = url ? url : curArticle;

    if (!articleUrl) {
      toast.error("Please enter a valid article URL");
      return;
    }

    try {
      // Basic URL validation
      new URL(articleUrl);
    } catch {
      toast.error("Invalid URL format");
      return;
    }

    setCurArticle(articleUrl);
    addToRecentArticles(articleUrl);

    setLoading(true);
    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: articleUrl,
        length: summaryLength,
      }),
    });

    if (!response.ok) {
      toast.error("Failed to summarize article");
      setLoading(false);
      return;
    }

    const data = response.body;
    if (!data) {
      setLoading(false);
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setSummary((prev) => prev + chunkValue);
    }
    setLoading(false);

    if (summaryRef.current) {
      setTimeout(() => {
        summaryRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-slate-900 text-gray-100' : 'bg-gray-50 text-slate-900'} min-h-screen transition-colors duration-300`}>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>News Summarizer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="AI-powered news article summarizer" />
        </Head>
        <div className="flex justify-between items-center px-4">
          <Header />
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <noscript>
            <div className="text-center text-red-600 p-4">
              JavaScript is required to use this app. Please enable JavaScript in your browser settings.
            </div>
          </noscript>
          <a
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 hidden max-w-fit rounded-full border border-slate-300 dark:border-slate-700 px-4 py-1 text-slate-500 transition duration-300 ease-in-out hover:border-slate-400 md:block"
            href="https://twitter.com/nutlope/status/1622988173155368960"
          >
            See the launch on Twitter
          </a>
          <h1 className="max-w-5xl text-center text-4xl font-bold sm:text-7xl">
            Summarize any{" "}
            <span className="relative whitespace-nowrap text-indigo-600 dark:text-indigo-400">
              <SquigglyLines />
              <span className="relative">News</span>
            </span>{" "}
            article with AI
          </h1>
          <p className="mt-8 text-center text-lg text-slate-600 dark:text-slate-400 sm:text-2xl">
            Copy and paste any <span className="text-indigo-600 dark:text-indigo-400">News </span>
            article link below.
          </p>
          <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
            Note: Some privacy extensions may interfere with article fetching. If you encounter issues, try disabling them.
          </p>
          <div className="relative mx-auto mt-10 w-full sm:w-3/4">
            <input
              type="text"
              value={curArticle}
              onChange={(e) => setCurArticle(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
              placeholder="https://example.com/article-url"
            />
            {recentArticles.length > 0 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="absolute right-3 top-3 text-slate-500"
                aria-label="Show history"
              >
                <ChevronDownIcon className="h-5 w-5" />
              </button>
            )}
            {showHistory && recentArticles.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg z-10">
                <div className="px-3 py-2 border-b border-slate-200 dark:border-slate-700 font-medium text-slate-600 dark:text-slate-300">
                  Recent Articles
                </div>
                <ul>
                  {recentArticles.map((article, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          loadRecentArticle(article);
                          setShowHistory(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 truncate"
                      >
                        {new URL(article).hostname.replace('www.', '')} - {new URL(article).pathname}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mx-auto mt-6 w-full sm:w-3/4">
            <p className="text-sm mb-2 text-slate-600 dark:text-slate-400">Summary Length:</p>
            <div className="flex space-x-2">
              <button
                onClick={() => setSummaryLength("short")}
                className={`px-4 py-1 rounded-full text-sm ${
                  summaryLength === "short"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                Short
              </button>
              <button
                onClick={() => setSummaryLength("medium")}
                className={`px-4 py-1 rounded-full text-sm ${
                  summaryLength === "medium"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setSummaryLength("long")}
                className={`px-4 py-1 rounded-full text-sm ${
                  summaryLength === "long"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                Detailed
              </button>
            </div>
          </div>
          {!loading && (
            <button
              className="z-10 mx-auto mt-7 w-3/4 rounded-lg bg-indigo-600 p-3 text-lg font-medium text-white transition hover:bg-indigo-500 sm:mt-8 sm:w-1/3"
              onClick={() => generateSummary()}
            >
              Summarize
            </button>
          )}
          {loading && (
            <button
              className="z-10 mx-auto mt-7 w-3/4 cursor-not-allowed rounded-lg bg-indigo-600 p-3 text-lg font-medium text-white transition sm:mt-8 sm:w-1/3"
              disabled
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/loading.svg"
                  alt="Loading..."
                  width={28}
                  height={28}
                />
              </div>
            </button>
          )}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
              style: {
                background: darkMode ? '#1e293b' : '#334155',
                color: '#fff',
              },
            }}
          />
          {summary && (
            <div className="mb-10 px-4" ref={summaryRef}>
              <div className="mx-auto mt-16 max-w-3xl border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold sm:text-5xl mb-4">
                  Summary
                </h2>
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={saveArticle}
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <BookmarkIcon className="h-4 w-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={shareArticle}
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <ShareIcon className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <ClipboardIcon className="h-4 w-4" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  {summary.split(". ").map((sentence, index) => (
                    <div key={index}>
                      {sentence.length > 0 && (
                        <li className="mb-3 list-disc text-slate-700 dark:text-slate-300">{sentence}</li>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    href={curArticle}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          )}
          {savedArticles.length > 0 && !summary && (
            <div className="mt-16 mb-10 px-4">
              <h3 className="text-xl font-bold mb-4 text-center">Your Saved Articles</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {savedArticles.slice(0, 4).map((article, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium mb-2 truncate">
                      {new URL(article.url).hostname.replace('www.', '')} - {new URL(article.url).pathname}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {article.summary.substring(0, 120)}...
                    </p>
                    <button
                      onClick={() => {
                        setCurArticle(article.url);
                        setSummary(article.summary);
                      }}
                      className="mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Summary
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;