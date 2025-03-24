// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
const App: React.FC = () => {
const [showPricing, setShowPricing] = useState(false);
const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
const [formData, setFormData] = useState({
name: '',
email: '',
message: ''
});
const handleFormSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Handle form submission
setFormData({ name: '', email: '', message: '' });
};
const debateFormats = [
{
title: 'Parliamentary',
description: 'Classic formal debate structure following established rules and procedures',
icon: 'fa-solid fa-gavel'
},
{
title: 'Policy Debate',
description: 'In-depth analysis of specific policy proposals and their implications',
icon: 'fa-solid fa-scale-balanced'
},
{
title: 'Lincoln-Douglas',
description: 'One-on-one debates focused on values and philosophical positions',
icon: 'fa-solid fa-users'
}
];
{/* Remove duplicate stats constant */}
const leaders = [
{ name: 'Emma Watson', title: 'Senior Debate Coach', rank: '01', score: '2850' },
{ name: 'Michael Chen', title: 'Policy Expert', rank: '02', score: '2780' },
{ name: 'Sarah Johnson', title: 'Ethics Specialist', rank: '03', score: '2720' },
{ name: 'James Wilson', title: 'Research Lead', rank: '04', score: '2690' },
{ name: 'Lucas George', title: 'Tech Analyst', rank: '05', score: '2650' }
];
return (
<div className="min-h-screen bg-white">
{/* Hero Section */}
<div className="relative h-[800px] bg-gradient-to-br from-slate-900 to-slate-900 overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: 'url(https://readdy.ai/api/search-image?query=futuristic debate arena with floating holographic displays, geometric patterns, clean modern aesthetic with subtle purple and blue accent lighting, minimalist design with high tech elements&width=1440&height=800&seq=1&orientation=landscape&flag=8cc9fde81a9a33b4864eafac2485b3c1)'
}}
></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-transparent"></div>
<div className="container mx-auto px-6 relative h-full flex flex-col">
<nav className="py-8 flex items-center justify-between backdrop-blur-sm bg-slate-900/30 px-8 rounded-2xl mt-6">
<div className="flex items-center">
<div className="relative">
<i className="fa-solid fa-comments text-purple-400 text-3xl"></i>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
</div>
<span className="ml-3 text-2xl font-bold text-white">D23<span className="text-purple-400">.ai</span></span>
</div>
<div className="flex items-center space-x-8">
<div className="hidden md:flex items-center space-x-8">
<a href="#features" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">Features</a>
<a href="#pricing" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">Pricing</a>
<a href="#about" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">About</a>
<a href="#blog" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">Blog</a>
<a href="#join" className="text-gray-200 hover:text-purple-400 transition-colors duration-300">Join Us</a>
</div>
<button
className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-purple-400/30 text-white px-6 py-2.5 rounded-button hover:bg-purple-400/20 transition-all duration-300 cursor-pointer whitespace-nowrap"
onClick={() => {
console.log('Google sign in clicked');
}}
>
<i className="fab fa-google text-purple-400"></i>
<span>Sign in with Google</span>
</button>
</div>
</nav>
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
<i className="fas fa-rocket mr-2"></i>
Start Free Trial
</span>
</button>
<button className="group flex items-center space-x-3 text-white hover:text-purple-400 transition-colors duration-300">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-purple-400/30">
<i className="fas fa-play text-sm"></i>
</div>
<span>Watch Demo</span>
</button>
</div>
<div className="flex items-center space-x-8 mt-16">
{[
{ value: '50K+', label: 'Active Users' },
{ value: '95%', label: 'Success Rate' },
{ value: '24/7', label: 'AI Support' }
].map((stat, index) => (
<div key={index} className="flex items-center space-x-2">
<div className="text-2xl font-bold text-purple-400">{stat.value}</div>
<div className="text-gray-400 text-sm">{stat.label}</div>
{index < 2 && <div className="h-8 w-px bg-purple-400/20 ml-6"></div>}
</div>
))}
</div>
</div>
</div>
</div>
</div>
{/* Debate Formats */}
<div className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">Debate Formats</span>
<h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
Explore Our Debate Formats
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
Choose from various debate styles to enhance your skills and challenge yourself in our dynamic learning environment
</p>
<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{debateFormats.map((format, index) => (
<div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="relative p-8">
    <div className="mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
        <i className={`${format.icon} text-2xl text-white`}></i>
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">{format.title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{format.description}</p>
    <div className="pt-6 border-t border-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-sm text-purple-600 font-medium">Learn More</span>
        <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
          <i className="fas fa-arrow-right text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300"></i>
        </div>
      </div>
    </div>
  </div>
</div>
))}
</div>
{/* Remove duplicate stats section */}
</div>
</div>
{/* Advanced Features */}
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
<div className="bg-gradient-to-br from-purple-50 to-indigo-50 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
<div className="flex items-center space-x-6 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
<i className="fa-solid fa-brain text-white text-2xl"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-800 mb-2">AI-Powered Analysis</h3>
<div className="flex items-center space-x-2">
<span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Real-time</span>
<span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Advanced AI</span>
</div>
</div>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">Get comprehensive feedback on your arguments, style, and delivery through our state-of-the-art AI system.</p>
<div className="grid grid-cols-2 gap-4">
{[
{ icon: "fa-chart-line", text: "Argument Strength" },
{ icon: "fa-diagram-project", text: "Logical Flow" },
{ icon: "fa-waveform", text: "Voice Analysis" },
{ icon: "fa-person-rays", text: "Body Language" }
].map((item, index) => (
<div key={index} className="flex items-center space-x-3 bg-white/60 p-3 rounded-xl">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
<i className={`fas ${item.icon} text-purple-600`}></i>
</div>
<span className="text-gray-700 font-medium">{item.text}</span>
</div>
))}
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
<i className="fa-solid fa-chart-line text-white text-xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Practice</h3>
<p className="text-gray-600 text-sm leading-relaxed">24/7 access to AI opponents with varying skill levels for continuous improvement.</p>
<div className="mt-4 space-y-2">
{["Multiple Levels", "Topic Generator", "Instant Feedback"].map((item, index) => (
<div key={index} className="flex items-center space-x-2 text-sm">
<i className="fas fa-check text-blue-500"></i>
<span className="text-gray-700">{item}</span>
</div>
))}
</div>
</div>
<div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
<i className="fa-solid fa-users text-white text-xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Community Features</h3>
<p className="text-gray-600 text-sm leading-relaxed">Connect with peers, join tournaments, and grow together.</p>
<div className="mt-4 space-y-2">
{["Live Tournaments", "Peer Review", "Global Rankings"].map((item, index) => (
<div key={index} className="flex items-center space-x-2 text-sm">
<i className="fas fa-check text-pink-500"></i>
<span className="text-gray-700">{item}</span>
</div>
))}
</div>
</div>
</div>
</div>
<div className="md:col-span-5 flex items-center">
<div className="sticky top-6 w-full">
<div className="relative flex items-center justify-center">
<div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 rounded-3xl blur-xl flex items-center justify-center"></div>
<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
<img
src="https://public.readdy.ai/ai/img_res/5079c157ec7c6dbb8f88490efc2a2ab7.jpg"
alt="AI Dashboard"
className="rounded-xl shadow-2xl w-full object-cover transform hover:scale-105 transition-all duration-500"
/>
<div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
<i className="fas fa-robot text-white"></i>
</div>
<div>
<h4 className="text-white font-bold">AI Assistant</h4>
<p className="text-gray-400 text-sm">Active Now</p>
</div>
</div>
<div className="flex space-x-2">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
</div>
</div>
<div className="text-sm text-gray-300">
"Your argument structure has improved by 27% in the last session. Would you like to review the key points?"
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Journey Steps */}
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
{[
{
step: 1,
title: 'Create your Account',
description: 'Set up your profile and preferences in minutes',
image: 'https://public.readdy.ai/ai/img_res/ee752d8c935317db18f6eaf0a3cbde86.jpg',
icon: 'fa-user-plus',
stats: ['2 min setup', '100% Free', 'Instant Access']
},
{
step: 2,
title: 'Start Practicing',
description: 'Engage in AI-powered debate sessions',
image: 'https://public.readdy.ai/ai/img_res/fe83a08ec787f7ec2e6584f625f7f3d5.jpg',
icon: 'fa-comments',
stats: ['24/7 Available', 'Real-time AI', 'Multiple Formats']
},
{
step: 3,
title: 'Track Progress',
description: 'Monitor your growth with advanced analytics',
image: 'https://public.readdy.ai/ai/img_res/e584e003c43c668f284b164819d3a502.jpg',
icon: 'fa-chart-line',
stats: ['Detailed Analytics', 'AI Insights', 'Progress Path']
}
].map((item, index) => (
<div key={index} className="relative group">
<div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
<div className="relative mb-8">
<div className="relative h-48 rounded-xl overflow-hidden">
<img
src={item.image}
alt={item.title}
className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-purple-900/20"></div>
<div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
<div className="relative">
<div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg]">
<div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
<span className="text-2xl text-white font-bold">{item.step}</span>
</div>
</div>
<div className="absolute -right-1 -top-1 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>
<div className="space-y-4 text-center mt-8">
<div className="flex items-center justify-center space-x-3">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<i className={`fas ${item.icon} text-purple-600`}></i>
</div>
<h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{item.title}</h3>
</div>
<p className="text-gray-600">{item.description}</p>
<div className="grid grid-cols-3 gap-2 pt-4">
{item.stats.map((stat, idx) => (
<div key={idx} className="bg-purple-50 rounded-lg p-2 text-sm text-purple-700 font-medium">
{stat}
</div>
))}
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
</div>
</div>
))}
</div>
</div>
</div>
</div>
{/* Top Debaters */}
<div className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">Leaderboard</span>
<h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
Top Debaters
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
Meet our community's most accomplished debaters and learn from their success
</p>
<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
</div>
<div className="grid gap-6">
{leaders.map((leader, index) => (
<div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-6">
<div className="relative">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
{leader.rank}
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
<i className="fas fa-crown"></i>
</div>
</div>
<div>
<h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{leader.name}</h3>
<p className="text-gray-600 flex items-center space-x-2">
<i className="fas fa-award text-purple-500"></i>
<span>{leader.title}</span>
</p>
</div>
</div>
<div className="flex items-center space-x-8">
<div className="text-right">
<div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">{leader.score}</div>
<div className="text-gray-600">Rating</div>
</div>
<button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-button hover:bg-purple-200 transition-colors duration-300">
<i className="fas fa-user-plus"></i>
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
{/* Pricing */}
<div className="py-20 bg-gradient-to-br from-gray-50 to-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">Pricing Plans</span>
<h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
Investment in Excellence
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
Choose the perfect plan to accelerate your growth and unlock your full potential
</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
{[
{
name: 'Free',
price: '$0',
period: 'Forever',
features: ['Basic AI practice sessions', 'Community access', 'Limited debates per month', '24/7 Support'],
icon: 'fa-solid fa-rocket'
},
{
name: 'Pro',
price: '$19.99',
period: 'per month',
features: ['Unlimited AI practice', 'Advanced analytics', 'Priority support', 'Tournament access', 'Custom training'],
icon: 'fa-solid fa-crown',
popular: true
},
{
name: 'Enterprise',
price: 'Custom',
period: 'Tailored solution',
features: ['Enterprise solutions', 'Custom AI training', 'Dedicated support', 'API access', 'White-label options'],
icon: 'fa-solid fa-building'
}
].map((plan, index) => (
<div key={index} className={`relative group transition-all duration-300 ${
index === 1 ? 'transform -translate-y-4' : ''
}`}>
{index === 1 && (
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
Most Popular
</div>
)}
<div className={`h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
index === 1
? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/20'
: 'bg-white border border-gray-100 shadow-lg hover:shadow-xl group-hover:-translate-y-2'
}`}>
<div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
index === 1 ? 'bg-white/10' : 'bg-purple-50'
}`}>
<i className={`${plan.icon} text-2xl ${index === 1 ? 'text-white' : 'text-purple-600'}`}></i>
</div>
<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold">{plan.price}</span>
<span className={`ml-2 ${index === 1 ? 'text-white/80' : 'text-gray-500'}`}>{plan.period}</span>
</div>
<ul className="space-y-4 mb-8">
{plan.features.map((feature, fIndex) => (
<li key={fIndex} className="flex items-center">
<i className={`fa-solid fa-check-circle mr-3 ${index === 1 ? 'text-white/80' : 'text-purple-500'}`}></i>
<span className={index === 1 ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
</li>
))}
</ul>
<button
className={`w-full py-4 rounded-button cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2 ${
index === 1
? 'bg-white text-purple-600 hover:bg-gray-50'
: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90'
}`}
onClick={() => {
setShowPricing(true);
setSelectedPlan(plan.name);
}}
>
<span>Get Started</span>
<i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
))}
</div>
</div>
</div>
{/* Success Stories */}
<div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">Testimonials</span>
<h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
Success Stories
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
Real stories from our community members who transformed their debating skills
</p>
<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">
{[
{
name: "Sarah Chen",
role: "National Debate Champion",
image: "https://public.readdy.ai/ai/img_res/8d873850ba8bd21dcf50d3f2dce5cd24.jpg",
quote: "D23.ai helped me secure the national championship. The AI feedback was instrumental in perfecting my arguments.",
stats: { wins: "47", tournaments: "12", rating: "2890" }
},
{
name: "Marcus Thompson",
role: "University Team Captain",
image: "https://public.readdy.ai/ai/img_res/0d355efb796520826bbe0b32afa9840c.jpg",
quote: "Our team's win rate increased by 70% after incorporating D23.ai into our practice routine.",
stats: { wins: "38", tournaments: "9", rating: "2780" }
},
{
name: "Elena Rodriguez",
role: "International Competitor",
image: "https://public.readdy.ai/ai/img_res/e7bfbaecb4520e21b0ec9065ee9412a5.jpg",
quote: "The platform's multilingual support helped me excel in international competitions.",
stats: { wins: "42", tournaments: "15", rating: "2850" }
}
].map((story, index) => (
<div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
  <div className="relative h-64 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
    <img src={story.image} alt={story.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
  </div>
  <div className="p-8 relative">
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-xl">
        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="text-center mt-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.name}</h3>
      <p className="text-purple-600 font-medium mb-4">{story.role}</p>
      <div className="flex justify-center space-x-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{story.stats.wins}</div>
          <div className="text-sm text-gray-500">Wins</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{story.stats.tournaments}</div>
          <div className="text-sm text-gray-500">Tournaments</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{story.stats.rating}</div>
          <div className="text-sm text-gray-500">Rating</div>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed">&ldquo;{story.quote}&rdquo;</p>
      <button className="mt-6 px-6 py-2 bg-purple-50 text-purple-600 rounded-button hover:bg-purple-100 transition-colors duration-300">
        View Profile
      </button>
    </div>
  </div>
</div>
))}
</div>
</div>
</div>
{/* Contact Form */}
<div className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">Contact Us</span>
<h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
Let's Connect
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
Have questions? We're here to help you succeed in your debate journey
</p>
<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -mr-20 -mt-20 opacity-50"></div>
<form onSubmit={handleFormSubmit} className="space-y-6 relative">
<div className="flex items-center space-x-4 mb-8">
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
<i className="fas fa-comments text-purple-600 text-xl"></i>
</div>
<div>
<h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
<p className="text-gray-600">We'll get back to you within 24 hours</p>
</div>
</div>
<div className="relative">
<label className="block text-gray-700 mb-2 font-medium">Name</label>
<div className="relative">
<i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
<input
type="text"
className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
placeholder="Enter your name"
value={formData.name}
onChange={(e) => setFormData({...formData, name: e.target.value})}
required
/>
</div>
</div>
<div className="relative">
<label className="block text-gray-700 mb-2 font-medium">Email</label>
<div className="relative">
<i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
<input
type="email"
className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
placeholder="Enter your email"
value={formData.email}
onChange={(e) => setFormData({...formData, email: e.target.value})}
required
/>
</div>
</div>
<div className="relative">
<label className="block text-gray-700 mb-2 font-medium">Message</label>
<div className="relative">
<i className="fas fa-pencil-alt absolute left-4 top-4 text-gray-400"></i>
<textarea
className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
rows={4}
placeholder="How can we help you?"
value={formData.message}
onChange={(e) => setFormData({...formData, message: e.target.value})}
required
></textarea>
</div>
</div>
<button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-button hover:from-purple-700 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
<span>Send Message</span>
<i className="fas fa-paper-plane"></i>
</button>
</form>
</div>
<div className="space-y-8">
<img
src="https://public.readdy.ai/ai/img_res/be6b27dc8ddf1b15297463d49b3e9c1a.jpg"
alt="Office Space"
className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-105 transition-transform duration-300"
/>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-xl shadow-lg">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<i className="fas fa-phone text-purple-600"></i>
</div>
<div>
<h4 className="font-semibold text-gray-800">Phone</h4>
<p className="text-gray-600">+1 (555) 123-4567</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-lg">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<i className="fas fa-envelope text-purple-600"></i>
</div>
<div>
<h4 className="font-semibold text-gray-800">Email</h4>
<p className="text-gray-600">support@d23.ai</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Footer */}
<footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
<div className="container mx-auto px-6">
  <div className="grid md:grid-cols-12 gap-12">
    <div className="md:col-span-4 space-y-8">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-comments text-purple-400 text-2xl"></i>
        </div>
        <span className="text-3xl font-bold">D23<span className="text-purple-400">.ai</span></span>
      </div>
      <p className="text-gray-400 text-lg leading-relaxed">
        Empowering voices through AI-enhanced debate practice and learning. Join our community of critical thinkers and future leaders.
      </p>
      <div className="flex items-center space-x-6">
        <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300">
          <i className="fab fa-twitter text-gray-400 hover:text-purple-400 transition-colors duration-300"></i>
        </a>
        <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300">
          <i className="fab fa-linkedin text-gray-400 hover:text-purple-400 transition-colors duration-300"></i>
        </a>
        <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300">
          <i className="fab fa-github text-gray-400 hover:text-purple-400 transition-colors duration-300"></i>
        </a>
      </div>
    </div>
    <div className="md:col-span-2">
      <h4 className="text-xl font-bold mb-6 text-white">Platform</h4>
      <ul className="space-y-4">
        <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Features</a></li>
        <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Pricing</a></li>
        <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">About Us</a></li>
        <li><a href="#careers" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Careers</a></li>
      </ul>
    </div>
    <div className="md:col-span-2">
      <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
      <ul className="space-y-4">
        <li><a href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Blog</a></li>
        <li><a href="#tutorials" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Tutorials</a></li>
        <li><a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">FAQ</a></li>
        <li><a href="#support" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Support</a></li>
      </ul>
    </div>
    <div className="md:col-span-4">
      <h4 className="text-xl font-bold mb-6 text-white">Stay Updated</h4>
      <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
      <div className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 whitespace-nowrap">
          Subscribe
        </button>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-gray-400">
            <i className="fas fa-envelope text-purple-400"></i>
            <span>support@d23.ai</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <i className="fas fa-phone text-purple-400"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <i className="fas fa-map-marker-alt text-purple-400"></i>
            <span>800 S Abel St, Milpitas, CA 95035</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div className="text-gray-400 text-center md:text-left">
      © 2025 D23.ai. All rights reserved. <span className="mx-2">|</span> 
      <a href="#privacy" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
      <span className="mx-2">|</span>
      <a href="#terms" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
    </div>
    <div className="flex items-center space-x-2">
      <img src="https://public.readdy.ai/ai/img_res/4dee2e97a0ffd589dc8a5bec952a8b4c.jpg" alt="Payment Methods" className="h-8" />
    </div>
  </div>
</div>
</footer>
{/* Pricing Modal */}
{showPricing && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg p-8 max-w-md w-full">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-gray-800">
Get Started with {selectedPlan}
</h3>
<button
onClick={() => setShowPricing(false)}
className="text-gray-500 hover:text-gray-700 cursor-pointer"
>
<i className="fa-solid fa-times"></i>
</button>
</div>
<p className="text-gray-600 mb-6">
Complete your registration to start your journey with DebateAI.
</p>
<div className="space-y-4">
<p className="text-gray-600 text-center mb-4">Sign in with your Google account to get started</p>
<button
className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-button hover:bg-gray-50 cursor-pointer"
onClick={() => {
// Handle Google sign in
console.log('Google sign in clicked');
}}
>
<i className="fab fa-google text-[#4285F4]"></i>
<span>Continue with Google</span>
</button>
</div>
</div>
</div>
)}
</div>
);
};
export default App
