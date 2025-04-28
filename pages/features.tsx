import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Features: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Features - News Summarizer</title>
          <meta name="description" content="Explore the features of News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Features
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">AI-Powered Summaries</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Get concise summaries of news articles using advanced AI technology.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Customizable Length</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Choose between short, medium, or detailed summaries to fit your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Save & Share</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Save your favorite summaries and share them with others easily.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Features;