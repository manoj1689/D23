import React from 'react';
import { FaCrown, FaAward, FaUserPlus } from 'react-icons/fa';

interface Leader {
  rank: number;
  name: string;
  title: string;
  score: number;
}

const leaders: Leader[] = [
  { rank: 1, name: 'Alice Johnson', title: 'Grandmaster Debater', score: 2400 },
  { rank: 2, name: 'Michael Smith', title: 'Elite Speaker', score: 2350 },
  { rank: 3, name: 'Sophie Lee', title: 'Champion Orator', score: 2300 },
  { rank: 4, name: 'Will Shiron', title: 'Master Debater', score: 4400 },
];

const TopDebaters: React.FC = () => {
  return (
    <div id="top-debaters" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Leaderboard
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            Top Debaters
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet our community's most accomplished debaters and learn from their success
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
        </div>
        <div className="grid gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {leader.rank}
                    </div>
                    {leader.rank === 1 && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        <FaCrown />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-gray-600 flex items-center space-x-2">
                      <FaAward className="text-purple-500" />
                      <span>{leader.title}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      {leader.score}
                    </div>
                    <div className="text-gray-600">Rating</div>
                  </div>
                  <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-button hover:bg-purple-200 transition-colors duration-300">
                    <FaUserPlus />
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Wins</div>
                  <div className="text-lg font-semibold text-gray-800">142</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Tournaments</div>
                  <div className="text-lg font-semibold text-gray-800">24</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Win Rate</div>
                  <div className="text-lg font-semibold text-gray-800">89%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDebaters;
