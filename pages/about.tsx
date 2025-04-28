import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const About: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>About - News Summarizer</title>
          <meta name="description" content="Learn about News Summarizer's mission and team" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            About News Summarizer
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            We’re on a mission to make news accessible, efficient, and meaningful for everyone using the power of AI.
          </p>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm max-w-3xl mx-auto border border-slate-200 dark:border-slate-700 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              At News Summarizer, we believe staying informed shouldn’t be overwhelming. Our AI-driven platform delivers concise, accurate summaries of news articles, helping users save time while staying connected to the world.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We’re committed to advancing information accessibility through technology, ensuring users can focus on what matters most.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <HeartIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Built with Passion</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our team of developers, AI researchers, and news enthusiasts work tirelessly to create a tool that empowers users to stay informed effortlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <GlobeAltIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Global Impact</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We aim to bridge information gaps worldwide, making news summaries available to users across devices, languages, and regions.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm max-w-3xl mx-auto border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              We’re a diverse group of innovators based globally, united by a passion for technology and journalism. Our team includes experts in AI, software engineering, and content curation.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <Image
                  src="/team1.jpg"
                  alt="Team Member"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-sm font-semibold">Jane Doe</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">AI Lead</p>
              </div>
              <div className="text-center">
                <Image
                  src="/team2.jpg"
                  alt="Team Member"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-sm font-semibold">John Smith</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">CTO</p>
              </div>
              <div className="text-center">
                <Image
                  src="/team3.jpg"
                  alt="Team Member"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-sm font-semibold">Emily Chen</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Product Manager</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;