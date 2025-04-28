import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Blog - News Summarizer</title>
          <meta name="description" content="Read the latest updates and insights from News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Blog
          </h1>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Introducing News Summarizer</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Learn how News Summarizer uses AI to simplify your news reading experience.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">The Future of AI in Journalism</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Exploring how AI can transform the way we consume news.
              </p>
              <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;