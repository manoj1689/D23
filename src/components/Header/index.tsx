import React from "react";

const Header = () => {
  return (
    <nav className="flex w-full bg-gradient-to-br from-slate-900 to-slate-900 ">
    <div className="flex w-full container mx-auto py-8 items-center justify-between bg-blue-950  px-8 rounded-2xl mt-6">
    <div className="flex items-center">
        <div className="relative">
          <i className="fa-solid fa-comments text-purple-400 text-3xl"></i>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
        <span className="ml-3 text-2xl font-bold text-white">
          D23<span className="text-purple-400">.ai</span>
        </span>
      </div>

      <div className="flex items-center space-x-8">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">
            Features
          </a>
          <a href="#pricing" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">
            Pricing
          </a>
          <a href="#about" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">
            About
          </a>
          <a href="#blog" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">
            Blog
          </a>
          <a href="#join" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">
            Join Us
          </a>
        </div>

        <button
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-purple-400/30 text-white px-6 py-2.5 rounded-button hover:bg-purple-400/20 transition-all duration-300 cursor-pointer whitespace-nowrap"
          onClick={() => console.log("Google sign in clicked")}
        >
          <i className="fab fa-google text-purple-400"></i>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
     
    </nav>
  );
};

export default Header;
