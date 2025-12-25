import React from 'react';
import { RiGovernmentLine, RiShieldCheckLine, RiTeamLine, RiGlobalLine, RiMailLine, RiPhoneLine, RiMapPinLine, RiFacebookCircleLine, RiTwitterLine, RiLinkedinLine, RiInstagramLine, RiYoutubeLine } from 'react-icons/ri';
import { BiBookReader, BiMedal, BiTime, BiChevronRight } from 'react-icons/bi';
import { TiDocument, TiLightbulb, TiNews } from 'react-icons/ti';
import { SiGooglescholar, SiCoursera } from 'react-icons/si';

const Footer = () => {
  const quickLinks = [
    { name: 'UPSC Civil Services', icon: <RiGovernmentLine /> },
    { name: 'SSC CGL/CHSL', icon: <BiBookReader /> },
    { name: 'Banking Exams', icon: <TiDocument /> },
    { name: 'Railway Recruitment', icon: <BiTime /> },
    { name: 'Defense Exams', icon: <RiShieldCheckLine /> },
    { name: 'Teaching Jobs', icon: <BiMedal /> },
  ];

  const resources = [
    { name: 'Study Materials', icon: <TiLightbulb /> },
    { name: 'Previous Papers', icon: <SiGooglescholar /> },
    { name: 'Mock Tests', icon: <BiBookReader /> },
    { name: 'Online Courses', icon: <SiCoursera /> },
    { name: 'Current Affairs', icon: <TiNews /> },
    { name: 'Exam Calendar', icon: <TiDocument /> },
  ];

  const examCategories = [
    'Engineering',
    'Medical',
    'Management',
    'Law',
    'Agriculture',
    'State Level',
    'Central Government',
    'Public Sector',
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-sky-50 pt-16 pb-8">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-30"></div>
                <div className="relative bg-white p-3 rounded-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <RiGovernmentLine className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Preptive
                </h2>
                <p className="text-sm text-gray-600">Your Gateway to Government Careers</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              India's most trusted platform for government job aspirants. Providing latest updates, 
              study materials, and expert guidance for all competitive exams.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <RiShieldCheckLine className="w-5 h-5 text-emerald-500" />
                <span>Trusted by 2M+ Aspirants</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <RiTeamLine className="w-5 h-5 text-emerald-500" />
                <span>500+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <RiGlobalLine className="w-5 h-5 text-emerald-500" />
                <span>Pan India Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BiChevronRight className="text-emerald-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-emerald-500 group-hover:text-cyan-500 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-gray-600 group-hover:text-gray-800 font-medium">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BiChevronRight className="text-emerald-500" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-emerald-500 group-hover:text-cyan-500 transition-colors">
                      {resource.icon}
                    </span>
                    <span className="text-gray-600 group-hover:text-gray-800 font-medium">
                      {resource.resource}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Stay Updated</h3>
            
            {/* Newsletter */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Get Daily Updates</h4>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200/50 bg-white/80"
                />
                <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <RiMailLine className="w-5 h-5 text-emerald-500" />
                <span>support@preptive.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <RiPhoneLine className="w-5 h-5 text-emerald-500" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <RiMapPinLine className="w-5 h-5 text-emerald-500" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Popular Exam Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {examCategories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-emerald-100"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Social & Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: <RiFacebookCircleLine />, color: 'text-blue-600' },
                  { icon: <RiTwitterLine />, color: 'text-sky-500' },
                  { icon: <RiLinkedinLine />, color: 'text-blue-700' },
                  { icon: <RiInstagramLine />, color: 'text-pink-600' },
                  { icon: <RiYoutubeLine />, color: 'text-red-600' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${social.color}`}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Preptive. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 text-sm text-gray-500">
                <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <RiShieldCheckLine className="text-emerald-500" />
              <span>SSL Secure</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <BiMedal className="text-emerald-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <RiTeamLine className="text-emerald-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;