import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Privacy Policy - News Summarizer</title>
          <meta name="description" content="Privacy Policy for News Summarizer" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col justify-center px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Privacy Policy
          </h1>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              At News Summarizer, we value your privacy. This policy outlines how we collect, use, and protect your data.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We only collect data necessary for providing our services, such as article URLs and user preferences. We do not share your data with third parties.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;