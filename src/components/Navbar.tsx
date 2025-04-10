
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BrainCog, MessageCircle, Calendar, BookOpen, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <BrainCog className="h-5 w-5" /> },
    { name: 'AI Therapy', path: '/therapy', icon: <MessageCircle className="h-5 w-5" /> },
    { name: 'Mood Tracker', path: '/mood', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Resources', path: '/resources', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Profile', path: '/profile', icon: <User className="h-5 w-5" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-therapy-lightPurple/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BrainCog className="h-8 w-8 text-therapy-purple" />
              <span className="ml-2 text-xl font-bold therapy-gradient-text">AuraCompass</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-therapy-purple hover:bg-therapy-lightPurple/10 transition-colors"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </Link>
            ))}
            <Button className="therapy-button">Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-therapy-lightPurple/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-therapy-purple hover:bg-therapy-lightPurple/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
            <div className="pt-2">
              <Button className="therapy-button w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
