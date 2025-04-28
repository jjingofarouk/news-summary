import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Pricing - News Summarizer</title>
          <meta name="description" content="Pricing plans for News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Pricing
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3">Free Plan</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Basic access to article summaries.
              </p>
              <p className="text-2xl font-bold mb-4">$0/month</p>
              <button className="w-full rounded-lg bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-500">
                Get Started
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3">Pro Plan</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Unlimited summaries and priority support.
              </p>
              <p className="text-2xl font-bold mb-4">Coming Soon</p>
              <button className="w-full rounded-lg bg-gray-300 dark:bg-gray-600 p-2 text-sm font-medium text-gray-500 cursor-not-allowed">
                Join Waitlist
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;