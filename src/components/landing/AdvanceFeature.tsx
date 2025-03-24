import Head from 'next/head';
import { FaBrain, FaChartLine, FaUsers, FaCheck } from 'react-icons/fa';

export default function AdvancedFeatures() {
  return (
    <div>
      <Head>
        <title>Advanced AI Tools</title>
      </Head>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">AI Tools</span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Advanced AI Tools for Debate Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Leverage cutting-edge AI technology to perfect your debating skills and achieve mastery
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6">
              <FeatureCard
                title="AI-Powered Analysis"
                description="Get comprehensive feedback on your arguments, style, and delivery through our state-of-the-art AI system."
                icon={<FaBrain className="text-white text-2xl" />}
                tags={['Real-time', 'Advanced AI']}
                features={['Argument Strength', 'Logical Flow', 'Voice Analysis', 'Body Language']}
              />
              <div className="grid grid-cols-2 gap-6">
                <FeatureSmallCard
                  title="Real-time Practice"
                  description="24/7 access to AI opponents with varying skill levels for continuous improvement."
                  icon={<FaChartLine className="text-white text-xl" />}
                  highlights={['Multiple Levels', 'Topic Generator', 'Instant Feedback']}
                />
                <FeatureSmallCard
                  title="Community Features"
                  description="Connect with peers, join tournaments, and grow together."
                  icon={<FaUsers className="text-white text-xl" />}
                  highlights={['Live Tournaments', 'Peer Review', 'Global Rankings']}
                />
              </div>
            </div>
            <div className="md:col-span-5 flex items-center">
              <div className="sticky top-6 w-full">
                <AIHighlight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: any;
  tags: string[];
  features: string[];
}

function FeatureCard({ title, description, icon, tags, features }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-white/20 shadow-xl">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="flex items-center space-x-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        {features.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 bg-white/60 p-3 rounded-xl">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <FaCheck className="text-purple-600" />
            </div>
            <span className="text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FeatureSmallCardProps {
  title: string;
  description: string;
  icon: any;
  highlights: string[];
}

function FeatureSmallCard({ title, description, icon, highlights }: FeatureSmallCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-white/20 shadow-lg">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 space-y-2">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <FaCheck className="text-blue-500" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIHighlight() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
      <img
        src="https://public.readdy.ai/ai/img_res/5079c157ec7c6dbb8f88490efc2a2ab7.jpg"
        alt="AI Dashboard"
        className="rounded-xl shadow-2xl w-full object-cover transform hover:scale-105 transition-all duration-500"
      />
      <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-xl p-6">
        <h4 className="text-white font-bold">AI Assistant</h4>
        <p className="text-gray-400 text-sm">Active Now</p>
        <p className="text-sm text-gray-300 mt-3">
          "Your argument structure has improved by 27% in the last session. Would you like to review the key points?"
        </p>
      </div>
    </div>
  );
}
