
import { BrainCog, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-therapy-lightPurple/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-therapy-softBlue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-block p-3 bg-therapy-lightPurple/20 rounded-2xl mb-4">
            <BrainCog className="h-8 w-8 text-therapy-purple animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="therapy-gradient-text">AI-Driven Support</span> For Your Mental Wellbeing
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience compassionate AI therapy, mood tracking, and personalized mental health resources in one seamless platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/therapy">
              <Button className="therapy-button group">
                Start Your Therapy Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="outline" className="border-therapy-purple text-therapy-purple hover:bg-therapy-lightPurple/10">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
