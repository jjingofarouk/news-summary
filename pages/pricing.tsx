import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Pricing: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Pricing - News Summarizer</title>
          <meta name="description" content="Explore pricing plans for News Summarizer, from free to premium options" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Flexible Pricing Plans
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Choose the plan that best suits your needs, whether you're a casual reader or a power user. Get started for free or upgrade for premium features.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3">Free Plan</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Perfect for casual users who want to try News Summarizer.
              </p>
              <p className="text-3xl font-bold mb-6">$0/month</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Up to 5 summaries per day</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Basic summary lengths</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Save up to 3 articles</span>
                </li>
              </ul>
              <a
                href="/"
                className="block w-full text-center rounded-lg bg-indigo-600 p-3 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Get Started
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border-2 border-indigo-600 dark:border-indigo-400 relative">
              <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-md rounded-tr-md">
                Most Popular
              </span>
              <h2 className="text-xl font-semibold mb-3">Pro Plan</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Ideal for avid readers and professionals needing unlimited access.
              </p>
              <p className="text-3xl font-bold mb-6">Coming Soon</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited summaries</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">All summary lengths</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited saved articles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Priority support</span>
                </li>
              </ul>
              <button className="block w-full text-center rounded-lg bg-gray-300 dark:bg-gray-600 p-3 text-sm font-medium text-gray-500 cursor-not-allowed">
                Join Waitlist
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3">Enterprise Plan</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Tailored for businesses and teams with advanced needs.
              </p>
              <p className="text-3xl font-bold mb-6">Contact Us</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Custom API integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Team accounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Dedicated support</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center rounded-lg bg-indigo-600 p-3 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;