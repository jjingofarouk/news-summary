import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const Blog: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Blog - News Summarizer</title>
          <meta name="description" content="Stay updated with the latest news, tips, and insights from the News Summarizer team" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            News Summarizer Blog
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Explore our latest articles on AI, journalism, and how News Summarizer is transforming the way you stay informed.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <Image
                src="/blog1.jpg"
                alt="Introducing News Summarizer"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-3">Introducing News Summarizer</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Discover how News Summarizer uses cutting-edge AI to deliver concise news summaries, saving you time while keeping you informed.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <Image
                src="/blog2.jpg"
                alt="The Future of AI in Journalism"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-3">The Future of AI in Journalism</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Explore how AI technologies are reshaping news consumption, from summarization to personalized content delivery.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <Image
                src="/blog3.jpg"
                alt="Tips for Staying Informed"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-3">5 Tips for Staying Informed Efficiently</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Learn practical strategies to manage information overload and stay updated with the news that matters most to you.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read More
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Posts
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;