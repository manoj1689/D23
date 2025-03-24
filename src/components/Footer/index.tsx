import React from "react";
import { FaComments, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <FaComments className="text-purple-400 text-2xl" />
              </div>
              <span className="text-3xl font-bold">D23<span className="text-purple-400">.ai</span></span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empowering voices through AI-enhanced debate practice and learning.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-white">Platform</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Enter your email" className="input-field" />
              <button className="subscribe-button">Subscribe</button>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
              <div className="contact-details">
                <div><FaEnvelope /> support@d23.ai</div>
                <div><FaPhone /> +1 (555) 123-4567</div>
                <div><FaMapMarkerAlt /> 800 S Abel St, Milpitas, CA 95035</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 D23.ai. All rights reserved. <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms</a></div>
          <img src="https://public.readdy.ai/ai/img_res/4dee2e97a0ffd589dc8a5bec952a8b4c.jpg" alt="Payment Methods" className="h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

