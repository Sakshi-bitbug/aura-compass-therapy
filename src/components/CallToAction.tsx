
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-therapy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3 bg-white/10 rounded-2xl mb-4">
          <MessageCircle className="h-8 w-8 animate-float" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Wellbeing Journey?</h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Begin your path to better mental health with our supportive AI therapy assistant.
        </p>
        
        <Link to="/therapy">
          <Button className="bg-white text-therapy-purple hover:bg-white/90 group">
            Start Your First Session
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
