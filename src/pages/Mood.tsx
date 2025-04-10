
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MoodTracker from '@/components/MoodTracker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, BarChart2, Brain, Info } from 'lucide-react';

// Mock data for the mood chart
const moodData = [
  { day: 'Mon', mood: 4, label: 'Great' },
  { day: 'Tue', mood: 3, label: 'Good' },
  { day: 'Wed', mood: 3, label: 'Good' },
  { day: 'Thu', mood: 2, label: 'Okay' },
  { day: 'Fri', mood: 1, label: 'Bad' },
  { day: 'Sat', mood: 2, label: 'Okay' },
  { day: 'Sun', mood: 4, label: 'Great' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-md shadow-md border border-therapy-lightPurple/20">
        <p className="font-medium">{`${payload[0].payload.day}: ${payload[0].payload.label}`}</p>
      </div>
    );
  }
  return null;
};

const Mood = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mood Tracking
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your emotional wellbeing over time to identify patterns and gain insights.
            </p>
          </div>

          <div className="bg-therapy-paleBlue/30 rounded-lg p-4 mb-8 flex items-start">
            <Info className="h-5 w-5 text-therapy-purple mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Why Track Your Mood?</h3>
              <p className="text-sm text-gray-600">
                Regular mood tracking helps you identify triggers, recognize patterns, and better understand your emotional 
                responses. This awareness is a powerful tool for improving mental wellbeing and making positive life adjustments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MoodTracker />
            </div>
            
            <div className="space-y-8">
              <div className="therapy-card">
                <div className="flex items-center mb-4">
                  <BarChart2 className="h-5 w-5 text-therapy-purple mr-2" />
                  <h3 className="text-xl font-semibold">Weekly Overview</h3>
                </div>
                
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moodData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" />
                      <YAxis 
                        domain={[0, 5]} 
                        ticks={[1, 2, 3, 4]} 
                        tickFormatter={(value) => {
                          const labels = ['', 'Bad', 'Okay', 'Good', 'Great'];
                          return labels[value] || '';
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Line 
                        type="monotone" 
                        dataKey="mood" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        dot={{ r: 6, fill: '#8B5CF6', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="therapy-card">
                <div className="flex items-center mb-4">
                  <Brain className="h-5 w-5 text-therapy-purple mr-2" />
                  <h3 className="text-xl font-semibold">Insights</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium block text-gray-800">Your Best Days</span>
                    Your mood tends to be best on weekends, particularly Sundays.
                  </p>
                  
                  <p className="text-sm text-gray-600">
                    <span className="font-medium block text-gray-800">Potential Triggers</span>
                    There's a noticeable dip in your mood mid-week, which might be related to work stress.
                  </p>
                  
                  <p className="text-sm text-gray-600">
                    <span className="font-medium block text-gray-800">Suggestion</span>
                    Consider implementing stress-reduction techniques on Wednesday and Thursday.
                  </p>
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

export default Mood;
