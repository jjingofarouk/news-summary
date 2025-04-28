import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQ: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>FAQ - News Summarizer</title>
          <meta name="description" content="Frequently Asked Questions about News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            FAQ
          </h1>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">What articles can I summarize?</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Currently, you can summarize articles from TechCrunch. More sources will be added soon!
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Is there a free plan?</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, we offer a free plan with basic access to summaries.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;