import React from "react";
import { FaUserPlus, FaComments, FaChartLine } from "react-icons/fa";

// Define the type for each journey step
interface JourneyStep {
  step: number;
  title: string;
  description: string;
  image: string;
  icon: any;
  stats: string[];
}

// Journey Steps Data
const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Create your Account",
    description: "Set up your profile and preferences in minutes",
    image: "https://public.readdy.ai/ai/img_res/ee752d8c935317db18f6eaf0a3cbde86.jpg",
    icon: <FaUserPlus className="text-purple-600 text-xl" />,
    stats: ["2 min setup", "100% Free", "Instant Access"],
  },
  {
    step: 2,
    title: "Start Practicing",
    description: "Engage in AI-powered debate sessions",
    image: "https://public.readdy.ai/ai/img_res/fe83a08ec787f7ec2e6584f625f7f3d5.jpg",
    icon: <FaComments className="text-purple-600 text-xl" />,
    stats: ["24/7 Available", "Real-time AI", "Multiple Formats"],
  },
  {
    step: 3,
    title: "Track Progress",
    description: "Monitor your growth with advanced analytics",
    image: "https://public.readdy.ai/ai/img_res/e584e003c43c668f284b164819d3a502.jpg",
    icon: <FaChartLine className="text-purple-600 text-xl" />,
    stats: ["Detailed Analytics", "AI Insights", "Progress Path"],
  },
];

// Props type for JourneyStepCard component
interface JourneyStepCardProps extends JourneyStep {}

const JourneyStepCard: React.FC<JourneyStepCardProps> = ({ step, title, description, image, icon, stats }) => (
  <div className="relative group">
    <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
      <div className="relative mb-8">
        <div className="relative h-48 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-purple-900/20"></div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="relative w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl text-white font-bold">{step}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 mt-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            {icon} {/* JSX element */}
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="grid grid-cols-3 gap-2 pt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-purple-50 rounded-lg p-2 text-sm text-purple-700 font-medium">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const JourneySection: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">Getting Started</span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Begin Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start your transformation into a master debater with our proven learning path
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mt-6"></div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] h-2 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {journeySteps.map((step, index) => (
              <JourneyStepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;

