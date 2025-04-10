
import { BrainCog, Heart, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-therapy-lightPurple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <BrainCog className="h-7 w-7 text-therapy-purple" />
              <span className="ml-2 text-xl font-bold therapy-gradient-text">AuraCompass</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Compassionate AI therapy for everyone, anywhere, anytime.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-therapy-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/therapy" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  AI Therapy
                </Link>
              </li>
              <li>
                <Link to="/mood" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Mood Tracking
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Crisis Hotlines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Mental Health FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-therapy-purple transition-colors">
                  Support Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-therapy-lightPurple/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} AuraCompass. All rights reserved.
          </p>
          <p className="flex items-center mt-4 md:mt-0 text-gray-500">
            Made with <Heart className="h-4 w-4 text-therapy-lightPink mx-1" /> for mental wellbeing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
