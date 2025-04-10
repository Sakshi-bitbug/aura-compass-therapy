
import { MessageCircle, Calendar, BookOpen, Brain } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Therapy Sessions',
      description: 'Chat with our AI therapist for personalized support, insights, and coping strategies anytime you need it.'
    },
    {
      icon: Calendar,
      title: 'Mood Tracking',
      description: 'Track your emotional patterns over time to gain self-awareness and identify triggers and positive influences.'
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access a curated collection of articles, exercises, and tools to support your mental health journey.'
    },
    {
      icon: Brain,
      title: 'Personalized Insights',
      description: 'Receive tailored recommendations and observations based on your unique emotional patterns and needs.'
    }
  ];

  return (
    <section className="py-16 bg-therapy-paleBlue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to support your mental wellbeing journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
