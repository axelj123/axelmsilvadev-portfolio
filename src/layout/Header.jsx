'use client';
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggler } from "@/component/theme-toggler";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = useMemo(() => ({
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  }), []);

  const menuLinks = useMemo(() => [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ], []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  return (
    <div className="py-2 fixed top-0 p-4 left-0 right-0 z-50 text-xl font-semibold border-b bg-white dark:bg-black dark:border-[#2a2a2a] border-[#ccc8c8]">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-base">
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl text-black dark:text-white">{'{A}'}</Link>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden z-60"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu for Large Screens */}
        <nav className="hidden md:flex space-x-5 items-center py-2">
          {menuLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className='p-2 rounded-md dark:hover:bg-[#202020] hover:bg-gray-200'
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggler />
        </nav>

        {/* Mobile Menu with Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dark Background/Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleMenu}
              />

              {/* Sliding Menu */}
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 right-0 w-64 h-screen z-50 shadow-lg bg-white dark:bg-black"
              >
                {/* Menu Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <Link href="/" className="text-2xl font-bold text-black dark:text-white">{'{A}'}</Link>
                  <button className="text-gray-900 dark:text-white" onClick={toggleMenu} aria-label="Close Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col h-full pt-6 px-6 text-start">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className="block text-sm py-4 px-2 rounded-md text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <ThemeToggler />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
