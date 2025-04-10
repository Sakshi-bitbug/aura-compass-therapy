
import { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Smile, Meh, Frown, ArrowLeft, ArrowRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Mood = 'great' | 'good' | 'okay' | 'bad' | 'awful';

type MoodEntry = {
  id: string;
  date: Date;
  mood: Mood;
  notes: string;
};

const moodEmojis: Record<Mood, JSX.Element> = {
  great: <div className="text-green-500"><Smile className="h-6 w-6" /></div>,
  good: <div className="text-emerald-500"><Smile className="h-6 w-6" /></div>,
  okay: <div className="text-yellow-500"><Meh className="h-6 w-6" /></div>,
  bad: <div className="text-orange-500"><Frown className="h-6 w-6" /></div>,
  awful: <div className="text-red-500"><Frown className="h-6 w-6" /></div>,
};

const moodColors: Record<Mood, string> = {
  great: 'bg-green-100 border-green-200',
  good: 'bg-emerald-100 border-emerald-200',
  okay: 'bg-yellow-100 border-yellow-200',
  bad: 'bg-orange-100 border-orange-200',
  awful: 'bg-red-100 border-red-200',
};

const MoodTracker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMood, setSelectedMood] = useState<Mood | ''>('');
  const [notes, setNotes] = useState('');

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const getMoodForDate = (date: Date): MoodEntry | undefined => {
    return moodEntries.find(entry => isSameDay(new Date(entry.date), date));
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    const existingEntry = getMoodForDate(date);
    
    if (existingEntry) {
      setSelectedMood(existingEntry.mood);
      setNotes(existingEntry.notes);
    } else {
      setSelectedMood('');
      setNotes('');
    }
    
    setIsDialogOpen(true);
  };

  const handleSaveMood = () => {
    if (!selectedDate || !selectedMood) return;

    const existingEntryIndex = moodEntries.findIndex(entry => 
      selectedDate && isSameDay(new Date(entry.date), selectedDate)
    );

    const newEntry: MoodEntry = {
      id: existingEntryIndex >= 0 ? moodEntries[existingEntryIndex].id : Date.now().toString(),
      date: selectedDate,
      mood: selectedMood as Mood,
      notes: notes
    };

    if (existingEntryIndex >= 0) {
      const updatedEntries = [...moodEntries];
      updatedEntries[existingEntryIndex] = newEntry;
      setMoodEntries(updatedEntries);
    } else {
      setMoodEntries([...moodEntries, newEntry]);
    }

    setIsDialogOpen(false);
    setSelectedDate(null);
    setSelectedMood('');
    setNotes('');
  };

  return (
    <div className="therapy-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 text-therapy-purple mr-2" />
          <h2 className="text-xl font-semibold">Mood Tracker</h2>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevMonth}
            className="border-therapy-lightPurple/30 hover:bg-therapy-lightPurple/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium py-2 px-3">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={nextMonth}
            className="border-therapy-lightPurple/30 hover:bg-therapy-lightPurple/10"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((day, i) => {
          const moodEntry = getMoodForDate(day);
          
          return (
            <button
              key={i}
              onClick={() => handleDayClick(day)}
              className={cn(
                "h-12 rounded-md flex flex-col items-center justify-center hover:bg-therapy-lightPurple/10 transition-colors relative border",
                moodEntry ? moodColors[moodEntry.mood] : "border-transparent"
              )}
            >
              <span className="text-sm">{format(day, 'd')}</span>
              {moodEntry && (
                <div className="absolute bottom-1 right-1">
                  {moodEmojis[moodEntry.mood]}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDate ? `Record Mood for ${format(selectedDate, 'MMMM d, yyyy')}` : 'Record Mood'}
            </DialogTitle>
            <DialogDescription>
              How are you feeling today? Track your mood to identify patterns and gain insights.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">How are you feeling?</label>
              <Select value={selectedMood} onValueChange={(value) => setSelectedMood(value as Mood)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="great">Great! 😁</SelectItem>
                  <SelectItem value="good">Good 🙂</SelectItem>
                  <SelectItem value="okay">Okay 😐</SelectItem>
                  <SelectItem value="bad">Bad 🙁</SelectItem>
                  <SelectItem value="awful">Awful 😞</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What influenced your mood today?"
                className="resize-none"
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveMood} disabled={!selectedMood}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MoodTracker;
