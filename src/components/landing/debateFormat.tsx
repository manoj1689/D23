import React from "react";
import { FaBalanceScale, FaGavel, FaComments, FaArrowRight } from "react-icons/fa";

const DebateFormats = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Debate Formats
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Explore Our Debate Formats
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from various debate styles to enhance your skills and challenge yourself in our dynamic learning environment.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Debate Format Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Format 1: British Parliamentary */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <FaBalanceScale className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                British Parliamentary
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Engage in structured team debates with four teams competing in government and opposition.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">Learn More</span>
                  <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <FaArrowRight className="text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Format 2: Lincoln-Douglas */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <FaGavel className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Lincoln-Douglas
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A one-on-one debate format focusing on philosophical and value-based arguments.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">Learn More</span>
                  <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <FaArrowRight className="text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Format 3: Public Forum */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <FaComments className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Public Forum
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A team debate format with dynamic crossfire exchanges and persuasive argumentation.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">Learn More</span>
                  <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <FaArrowRight className="text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateFormats;
