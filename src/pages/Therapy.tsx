
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';
import { Info, Brain } from 'lucide-react';

const Therapy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your AI Therapy Session
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chat confidentially with our AI assistant about your thoughts, feelings, and challenges.
            </p>
          </div>

          <div className="bg-therapy-paleBlue/30 rounded-lg p-4 mb-8 flex items-start">
            <Info className="h-5 w-5 text-therapy-purple mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium">About AI Therapy</h3>
              <p className="text-sm text-gray-600">
                This is a simulation of an AI therapy chat. In a full version, this would be connected to a professional AI model 
                trained specifically for mental health support. Remember that while AI therapy can be helpful, it is not a 
                replacement for professional human care in crisis situations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 h-[600px]">
              <ChatInterface />
            </div>
            
            <div>
              <div className="therapy-card h-full">
                <div className="mb-4 p-3 rounded-full bg-therapy-lightPurple/20 inline-block">
                  <Brain className="h-6 w-6 text-therapy-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Conversation Tips</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Be Specific</h4>
                    <p className="text-sm text-gray-600">
                      The more details you share about your situation, the more tailored the support can be.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Ask Questions</h4>
                    <p className="text-sm text-gray-600">
                      If you need clarification or want to explore a topic deeper, don't hesitate to ask.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Express Your Feelings</h4>
                    <p className="text-sm text-gray-600">
                      Naming your emotions can help you process them and help the AI understand your experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Set Goals</h4>
                    <p className="text-sm text-gray-600">
                      Consider what you'd like to achieve through these conversations and share those objectives.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Crisis Resources</h4>
                    <p className="text-sm text-gray-600">
                      If you're experiencing a mental health crisis, please contact a crisis hotline or emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Therapy;
