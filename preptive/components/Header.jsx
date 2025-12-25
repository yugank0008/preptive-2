'use client';

import { useState } from 'react';
import { RiSearchLine, RiNotification3Line, RiUserLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { TiHome, TiCalendar, TiDocumentText, TiDownload } from 'react-icons/ti';
import { BiBriefcase, BiBookContent, BiChevronDown } from 'react-icons/bi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <TiHome className="w-5 h-5" />, href: '/' },
    { name: 'Latest Updates', icon: <TiCalendar className="w-5 h-5" />, href: '/updates' },
    { name: 'Jobs', icon: <BiBriefcase className="w-5 h-5" />, href: '/jobs' },
    { name: 'Results', icon: <TiDocumentText className="w-5 h-5" />, href: '/results' },
    { name: 'Admit Card', icon: <TiDownload className="w-5 h-5" />, href: '/admit-card' },
    { name: 'Syllabus', icon: <BiBookContent className="w-5 h-5" />, href: '/syllabus' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-50 via-emerald-50 to-sky-50 shadow-lg backdrop-blur-lg bg-opacity-90">
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-emerald-500 to-cyan-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <RiNotification3Line className="animate-pulse" />
              <span className="font-semibold">Live Updates:</span> SSC CGL 2024 Notification Released
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/login" className="hover:text-emerald-200 transition-all duration-300 flex items-center gap-1">
              <RiUserLine /> Login
            </a>
            <a href="/register" className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-emerald-50 transition-all duration-300">
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-2 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
<a href="/" className="flex items-center space-x-4 no-underline">
  <div className="relative">
    <img
      src="/logo.png"
      alt="Preptive Logo"
      width={155}
      height={86}
      className="object-contain"
    />
  </div>
</a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 group-hover:text-cyan-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-semibold text-gray-800 group-hover:text-emerald-700">
                    {item.name}
                  </span>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 mt-1"></div>
              </a>
            ))}
          </nav>

          {/* Search and User Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className={`relative transition-all duration-500 ${searchOpen ? 'w-64' : 'w-10'}`}>
                {searchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search exams, notifications, updates..."
                      className="w-full pl-12 pr-4 py-3 bg-white/80 text-gray-400 backdrop-blur-sm rounded-full border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200/50 shadow-lg transition-all duration-300"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setSearchOpen(false);
                      }}
                    />
                    <RiSearchLine className="absolute left-4 text-emerald-600 w-5 h-5" />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-3 text-gray-400 hover:text-gray-600"
                      aria-label="Close search"
                    >
                      <RiCloseLine className="w-6 h-6 bg-white rounded-full" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    aria-label="Open search"
                  >
                    <RiSearchLine className="w-5 h-5 text-emerald-600 group-hover:text-cyan-600 transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <RiCloseLine className="w-6 h-6 text-emerald-600" />
              ) : (
                <RiMenuLine className="w-6 h-6 text-emerald-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 animate-slideIn">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-emerald-600 group-hover:text-cyan-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-semibold text-gray-800">{item.name}</span>
                  <BiChevronDown className="ml-auto transform rotate-90 text-gray-400" />
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a href="/login" className="block w-full text-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Login / Register
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;