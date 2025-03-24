import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "National Debate Champion",
      image: "https://public.readdy.ai/ai/img_res/8d873850ba8bd21dcf50d3f2dce5cd24.jpg",
      quote:
        "D23.ai helped me secure the national championship. The AI feedback was instrumental in perfecting my arguments.",
      stats: { wins: "47", tournaments: "12", rating: "2890" },
    },
    {
      name: "Marcus Thompson",
      role: "University Team Captain",
      image: "https://public.readdy.ai/ai/img_res/0d355efb796520826bbe0b32afa9840c.jpg",
      quote:
        "Our team's win rate increased by 70% after incorporating D23.ai into our practice routine.",
      stats: { wins: "38", tournaments: "9", rating: "2780" },
    },
    {
      name: "Elena Rodriguez",
      role: "International Competitor",
      image: "https://public.readdy.ai/ai/img_res/e7bfbaecb4520e21b0ec9065ee9412a5.jpg",
      quote:
        "The platform's multilingual support helped me excel in international competitions.",
      stats: { wins: "42", tournaments: "15", rating: "2850" },
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from our community members who transformed their debating skills
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-xl">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
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
  );
};

export default SuccessStories;
