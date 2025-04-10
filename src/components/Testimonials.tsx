
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AuraCompass has been a game-changer for my anxiety. Having support available whenever I need it has made such a difference in my daily life.",
    author: "Sarah J.",
    title: "Anxiety Management"
  },
  {
    quote: "As someone who was skeptical about AI therapy, I'm amazed at how helpful these conversations have been. It's like having a supportive friend available 24/7.",
    author: "Michael T.",
    title: "Depression Support"
  },
  {
    quote: "The mood tracking feature helped me identify patterns I never noticed before. Now I can better prepare for difficult days and celebrate my progress.",
    author: "Eliza R.",
    title: "Bipolar Management"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-therapy-paleGreen/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">User Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who have experienced positive change with AuraCompass
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="therapy-card">
            <Quote className="h-12 w-12 text-therapy-lightPurple opacity-50 mb-4" />
            <p className="text-xl italic mb-6">{testimonials[currentIndex].quote}</p>
            <div>
              <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-therapy-purple">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-therapy-lightPurple/30 text-therapy-purple hover:bg-therapy-lightPurple/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-therapy-purple' : 'bg-therapy-lightPurple/40'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-therapy-lightPurple/30 text-therapy-purple hover:bg-therapy-lightPurple/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
