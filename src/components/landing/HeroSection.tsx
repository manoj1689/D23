import React from "react";
import { FaRocket, FaPlay } from "react-icons/fa"; // Importing icons from react-icons

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-900 overflow-hidden">
      
      <div className="container mx-auto px-6 relative h-full flex flex-col mt-36 mb-20">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            <div className="relative inline-block mb-6">
              <span className="text-purple-400 text-lg font-semibold bg-purple-400/10 px-4 py-2 rounded-full">
                AI-Powered Debate Platform
              </span>
            </div>

            <h1 className="text-7xl font-bold text-white leading-tight relative mb-8">
              Master the Art of
              <div className="relative">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Debate with AI
                </span>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-purple-400 rounded-full"></div>
              </div>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-xl">
              Experience the future of debate training with our cutting-edge AI platform. Get real-time feedback, practice with intelligent opponents, and join a global community of critical thinkers.
            </p>

            <div className="flex space-x-6 items-center">
              <button className="group relative bg-purple-500 text-white px-8 py-4 rounded-button hover:bg-purple-600 transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/30">
                <span className="relative z-10 flex items-center">
                  <FaRocket className="mr-2" /> {/* Replaced FontAwesome with react-icons */}
                  Start Free Trial
                </span>
              </button>

              <button className="group flex items-center space-x-3 text-white hover:text-purple-400 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-purple-400/30">
                  <FaPlay className="text-sm" /> {/* Replaced FontAwesome with react-icons */}
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 mt-16">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-purple-400">50K+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
                <div className="h-8 w-px bg-purple-400/20 ml-6"></div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
                <div className="h-8 w-px bg-purple-400/20 ml-6"></div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

