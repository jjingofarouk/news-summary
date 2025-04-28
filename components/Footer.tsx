import Link from "next/link";
import { useState } from "react";
import { 
  GlobeAltIcon, 
  HeartIcon, 
  ArrowUpCircleIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Would normally connect to an API here
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setShowNewsletter(false);
        setTimeout(() => setSubscribed(false), 500);
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">News Summarizer</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Get quick, AI-powered summaries of your favorite news articles. Save time while staying informed.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://twitter.com/nutlope"
                className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="Twitter"
                target="_blank"
              >
                <svg aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://github.com/Nutlope/news-summarizer"
                className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="GitHub"
                target="_blank"
              >
                <svg aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
              <button 
                onClick={() => setShowNewsletter(!showNewsletter)}
                className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="Newsletter"
              >
                <GlobeAltIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-8/12">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 mb-6 md:mb-0">
                <h5 className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">Product</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/api" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12 mb-6 md:mb-0">
                <h5 className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">Resources</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12">
                <h5 className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">Company</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {showNewsletter && (
          <div className="mt-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  Subscribe to our newsletter
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Get the latest news and updates from our team.
                </p>
              </div>
              
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow rounded-l-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-r-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <HeartIcon className="h-5 w-5 mr-2" />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
            </div>
          </div>
        )}

        <hr className="my-6 border-slate-200 dark:border-slate-800" />
        
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-4/12 mb-4 md:mb-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} News Summarizer. All rights reserved.
            </p>
          </div>
          
          <div className="w-full md:w-8/12 flex justify-start md:justify-end">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Powered by{" "}
              <a
                href="https://openai.com/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                OpenAI{" "}
              </a>
              and{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Vercel Edge Functions
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-6 -top-6 bg-white dark:bg-slate-800 shadow-md p-2 rounded-full text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpCircleIcon className="h-6 w-6" />
      </button>
    </footer>
  );
}