import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you succeed in your debate journey.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <form onSubmit={handleFormSubmit} className="space-y-6 relative">
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all">
                Send Message
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
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@d23.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
