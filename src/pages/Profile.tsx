
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Settings, Bell, Lock, Clock, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState('18:00');
  const [weeklyReports, setWeeklyReports] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-64">
              <div className="therapy-card text-center mb-6">
                <div className="w-20 h-20 bg-therapy-lightPurple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-therapy-purple" />
                </div>
                <h2 className="font-bold text-xl mb-1">Demo User</h2>
                <p className="text-gray-600 text-sm mb-4">user@example.com</p>
                <Button variant="outline" className="w-full border-therapy-purple text-therapy-purple hover:bg-therapy-lightPurple/10">
                  Edit Profile
                </Button>
              </div>
              
              <div className="bg-white rounded-xl border border-therapy-lightPurple/20 overflow-hidden">
                <div className="py-2">
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-700 hover:text-therapy-purple hover:bg-therapy-lightPurple/10">
                    <Settings className="h-5 w-5 mr-2" />
                    <span>Account Settings</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-700 hover:text-therapy-purple hover:bg-therapy-lightPurple/10">
                    <Bell className="h-5 w-5 mr-2" />
                    <span>Notifications</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-700 hover:text-therapy-purple hover:bg-therapy-lightPurple/10">
                    <Lock className="h-5 w-5 mr-2" />
                    <span>Privacy</span>
                  </Button>
                  <Separator />
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-5 w-5 mr-2" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <Tabs defaultValue="settings" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Manage your account information and preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Display Name</Label>
                        <Input id="name" defaultValue="Demo User" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="user@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <select 
                          id="timezone" 
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                          defaultValue="America/New_York"
                        >
                          <option value="America/New_York">Eastern Time (US & Canada)</option>
                          <option value="America/Chicago">Central Time (US & Canada)</option>
                          <option value="America/Denver">Mountain Time (US & Canada)</option>
                          <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                        </select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="therapy-button">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Customize how and when you receive notifications.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="font-medium">Enable Notifications</h4>
                          <p className="text-sm text-gray-500">
                            Receive reminders and important updates
                          </p>
                        </div>
                        <Switch 
                          checked={notificationsEnabled} 
                          onCheckedChange={setNotificationsEnabled} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="font-medium">Weekly Mood Reports</h4>
                          <p className="text-sm text-gray-500">
                            Receive a summary of your weekly mood patterns
                          </p>
                        </div>
                        <Switch 
                          checked={weeklyReports} 
                          onCheckedChange={setWeeklyReports} 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Daily Check-in Reminder</h4>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <Input 
                              type="time" 
                              value={reminderTime}
                              onChange={(e) => setReminderTime(e.target.value)}
                              className="w-32"
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          Set a daily reminder to record your mood
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="therapy-button">Save Preferences</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="privacy">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>
                        Control your data and privacy preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Data Collection</h4>
                        <p className="text-sm text-gray-500">
                          We collect minimal data to provide our services and improve your experience.
                          You can control what data is stored and for how long.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-medium">Store Conversation History</h4>
                            <p className="text-sm text-gray-500">
                              Save your therapy conversations to provide better support
                            </p>
                          </div>
                          <Switch defaultChecked={true} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-medium">Usage Analytics</h4>
                            <p className="text-sm text-gray-500">
                              Allow anonymous usage data to improve our service
                            </p>
                          </div>
                          <Switch defaultChecked={true} />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                          Delete Account Data
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="therapy-button">Save Settings</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
