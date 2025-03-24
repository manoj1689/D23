import React, { useState } from 'react';
import { FaRocket, FaCrown, FaBuilding, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  icon: any;
  popular?: boolean;
}

const PricingPage: React.FC = () => {
  const [showPricing, setShowPricing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      features: ['Basic AI practice sessions', 'Community access', 'Limited debates per month', '24/7 Support'],
      icon: <FaRocket className="text-2xl text-purple-600" />,
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: 'per month',
      features: ['Unlimited AI practice', 'Advanced analytics', 'Priority support', 'Tournament access', 'Custom training'],
      icon: <FaCrown className="text-2xl text-purple-600" />,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Tailored solution',
      features: ['Enterprise solutions', 'Custom AI training', 'Dedicated support', 'API access', 'White-label options'],
      icon: <FaBuilding className="text-2xl text-purple-600" />,
    },
  ];

  return (
    <div id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Pricing Plans
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Investment in Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan to accelerate your growth and unlock your full potential
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
  {plans.map((plan, index) => (
    <div key={index} className={`relative group transition-all duration-300 ${plan.popular ? 'transform -translate-y-4' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 z-10 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
          Most Popular
        </div>
      )}
      <div
        className={`h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xl'
            : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl group-hover:-translate-y-2'
        }`}
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-purple-50">{plan.icon}</div>
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className={`ml-2 ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>{plan.period}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center">
              <FaCheckCircle className="text-purple-500 mr-3" />
              <span className={`${plan.popular ? 'text-white' : 'text-gray-600'}`}>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className="w-full py-4 rounded-button cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
          onClick={() => {
            setShowPricing(true);
            setSelectedPlan(plan.name);
          }}
        >
          <span>Get Started</span>
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default PricingPage;
