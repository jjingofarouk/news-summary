import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const FAQ: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>FAQ - News Summarizer</title>
          <meta name="description" content="Answers to common questions about News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Find answers to common questions about using News Summarizer, from features to pricing and technical support.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">What articles can I summarize?</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Currently, News Summarizer supports articles from TechCrunch. We’re working to expand support for additional news sources in the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Is there a free plan available?</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes, our free plan includes up to 5 summaries per day, basic summary lengths, and the ability to save up to 3 articles.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">How accurate are the summaries?</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our AI is trained to capture key points accurately, but summaries may vary based on article complexity. We recommend reading the full article for critical details.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Can I use the API for commercial projects?</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes, our API is available for commercial use under our Enterprise plan. Contact our sales team for details.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">How do I get support?</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Visit our Contact page to reach our support team. Pro and Enterprise users receive priority support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Still Have Questions? Contact Us
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;