import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DocumentTextIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Guides: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Guides - News Summarizer</title>
          <meta name="description" content="Comprehensive guides to help you master News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            News Summarizer Guides
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Unlock the full potential of News Summarizer with our step-by-step guides, designed for beginners and advanced users alike.
          </p>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <DocumentTextIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Getting Started with News Summarizer</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Learn how to summarize your first article in just a few steps. This guide covers entering URLs, choosing summary lengths, and saving articles.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read Guide
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <LightBulbIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Maximizing Your Summaries</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Discover tips for selecting the right summary length, organizing saved articles, and sharing insights effectively with your network.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read Guide
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <RocketLaunchIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Using the API for Developers</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A technical guide for integrating News Summarizer’s API into your applications, including authentication, endpoints, and best practices.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read Guide
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Guides;