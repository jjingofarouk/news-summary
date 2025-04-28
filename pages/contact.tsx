import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-50 text-slate-900 min-h-screen transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
        <Head>
          <title>Contact - News Summarizer</title>
          <meta name="description" content="Contact the News Summarizer team for support, feedback, or inquiries" />
        </Head>
        <Header />
        <main className="mx-auto mt-10 flex max-w-5xl flex-1 flex-col px-4 sm:mt-32">
          <h1 className="text-center text-4xl font-bold sm:text-6xl mb-8">
            Let’s Connect
          </h1>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            We’re here to answer your questions, hear your feedback, or assist with any issues. Use the form below or reach out directly via our contact details.
          </p>
          <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              {submitted ? (
                <div className="text-center">
                  <p className="text-green-600 dark:text-green-400 text-lg mb-4">
                    Message Sent Successfully!
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. We’ll get back to you within 24-48 hours. Please check your inbox or spam folder for our response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="E.g., Support Request or Feedback"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="How can we assist you today?"
                      rows={6}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-indigo-600 p-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold">Email Support</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Drop us an email at{" "}
                      <a
                        href="mailto:jjingofaroukk@gmail.com"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        support@newssummarizer.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Expect a response within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold">Phone Support</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Call us at{" "}
                      <a
                        href="tel:+1-800-555-1234"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        +256 (751) 360-385
                      </a>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Available Monday to Friday, 9 AM - 5 PM EST.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold">Our Office</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Shorter! Headquarters<br />
                      123 High Street , Suite 100<br />
                      Mbarara, Uganda
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/farouq_jjingo"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/jjingofarouk/news-summary"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/newssummarizer"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.965v5.702h-3v-11h2.879v1.504h.04c.401-.757 1.381-1.557 2.841-1.557 3.038 0 3.6 2.001 3.6 4.604v6.449z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm max-w-3xl mx-auto border border-slate-200 dark:border-slate-700 text-center">
            <h2 className="text-xl font-semibold mb-4">Need Immediate Help?</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Check out our FAQ for quick answers to common questions or explore our guides for detailed assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/faq"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700"
              >
                Visit FAQ
              </a>
              <a
                href="/guides"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700"
              >
                Explore Guides
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;