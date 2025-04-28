import { Poppins } from "@next/font/google";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Github from "../components/GitHub";

const poppins = Poppins({ weight: "800", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle dark mode
  useEffect(() => {
    const isDark = 
      localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8", 
        scrolled 
          ? "py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 sm:w-10 sm:h-10">
              <Image 
                src="/edit.png" 
                alt="News Summarizer Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <h2 className={clsx("text-lg sm:text-2xl whitespace-nowrap", poppins.className)}>
              <span className="text-indigo-600 dark:text-indigo-400">News</span> summarizer
            </h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={clsx(
                  poppinsRegular.className,
                  "text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <SunIcon className="h-5 w-5" /> : 
                <MoonIcon className="h-5 w-5" />
              }
            </button>
            
            <a
              href="https://github.com/Nutlope/news-summarizer"
              rel="noreferrer noopener"
              target="_blank"
              className="rounded-full p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github width="20" height="20" />
            </a>
            
            <Link 
              href="/login"
              className="ml-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 
              <SunIcon className="h-5 w-5" /> : 
              <MoonIcon className="h-5 w-5" />
            }
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? 
              <XMarkIcon className="h-6 w-6" /> : 
              <Bars3Icon className="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={clsx(
                  poppinsRegular.className,
                  "block py-2 text-base text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800">
              <Link 
                href="/login"
                className="block py-2 text-base text-indigo-600 dark:text-indigo-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}