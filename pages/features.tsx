import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  SparklesIcon, 
  AdjustmentsHorizontalIcon, 
  BookmarkIcon, 
  ShareIcon, 
  ClockIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const Features: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Features - News Summarizer</title>
          <meta name="description" content="Discover the powerful features of News Summarizer to stay informed efficiently" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Powerful Features to Simplify Your News
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            News Summarizer leverages cutting-edge AI to deliver concise, customizable, and shareable news summaries. Explore how our features save you time and keep you informed.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <SparklesIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">AI-Powered Summaries</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our advanced AI, powered by state-of-the-art language models, distills complex news articles into clear, concise summaries, capturing key points without fluff.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <AdjustmentsHorizontalIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Customizable Summary Length</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Choose your preferred summary length—short for quick insights, medium for balanced detail, or detailed for in-depth understanding—tailored to your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <BookmarkIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Save Your Articles</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Bookmark summaries to revisit later. Your saved articles are stored locally, ensuring quick access to your favorite news insights.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <ShareIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Seamless Sharing</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Share summaries via social media, email, or clipboard with one click, making it easy to discuss important news with friends or colleagues.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <ClockIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Recent Articles History</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Access your recently summarized articles instantly with our history feature, keeping your news exploration organized and efficient.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <DevicePhoneMobileIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Mobile-Friendly Design</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Enjoy a responsive interface optimized for mobile devices, so you can summarize and read news on the go with ease.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Try News Summarizer Now
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Features;