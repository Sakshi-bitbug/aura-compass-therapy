
import { MessageCircle, BarChart, BookHeart, Brain } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Start a Conversation',
      description: 'Begin chatting with our AI therapist about your thoughts, feelings, or challenges.'
    },
    {
      number: '02',
      icon: Brain,
      title: 'Receive Support',
      description: 'Get personalized insights, empathetic responses, and coping strategies.'
    },
    {
      number: '03',
      icon: BarChart,
      title: 'Track Your Progress',
      description: 'Monitor your mood patterns and mental wellbeing improvements over time.'
    },
    {
      number: '04',
      icon: BookHeart,
      title: 'Explore Resources',
      description: 'Access tailored content and exercises to support your mental health journey.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple process designed to provide continuous support for your mental wellbeing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="therapy-card h-full">
                <div className="absolute -top-4 -left-4 bg-gradient-therapy text-white text-xl font-bold h-12 w-12 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div className="pt-6">
                  <step.icon className="h-8 w-8 text-therapy-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-therapy-lightPurple"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
