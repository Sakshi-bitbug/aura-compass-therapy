
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResourcesList from '@/components/ResourcesList';
import { BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-therapy-lightPurple/20 rounded-2xl mb-4">
              <BookOpen className="h-7 w-7 text-therapy-purple" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mental Health Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of articles, tools, and information to support your mental wellbeing journey.
            </p>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 border-therapy-lightPurple/30 focus-visible:ring-therapy-purple"
              />
            </div>
          </div>

          <ResourcesList />

          <div className="mt-16 bg-therapy-paleGreen/30 rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Crisis Resources</h2>
              <p className="text-gray-600">
                If you're experiencing a mental health crisis, please reach out to one of these resources for immediate help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="therapy-card">
                <h3 className="text-lg font-semibold mb-2">National Suicide Prevention Lifeline</h3>
                <p className="text-gray-600 mb-2">24/7, free and confidential support</p>
                <p className="text-therapy-purple font-bold">1-800-273-8255</p>
              </div>
              
              <div className="therapy-card">
                <h3 className="text-lg font-semibold mb-2">Crisis Text Line</h3>
                <p className="text-gray-600 mb-2">Text HOME to 741741 to connect with a Crisis Counselor</p>
                <p className="text-therapy-purple font-bold">741741</p>
              </div>
              
              <div className="therapy-card">
                <h3 className="text-lg font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-2">For immediate emergency assistance</p>
                <p className="text-therapy-purple font-bold">911</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
