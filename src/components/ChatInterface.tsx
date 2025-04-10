
import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

// Placeholder AI responses for demo purposes
const aiResponses = [
  "I understand that must be difficult. Can you tell me more about how that's affecting you?",
  "It sounds like you're experiencing some challenges with anxiety. I'm here to help you work through this.",
  "Thank you for sharing that with me. What coping strategies have worked for you in the past?",
  "I'm noticing that this situation is causing you distress. Let's explore some ways to manage these feelings.",
  "That's a common experience, and it's completely valid to feel that way. Would it help to talk about some techniques for managing these emotions?",
  "I'm here to support you through this. What would feel most helpful to focus on today?",
];

const getRandomResponse = () => {
  return aiResponses[Math.floor(Math.random() * aiResponses.length)];
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI therapy assistant. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response with delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getRandomResponse(),
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-therapy-lightPurple/20 overflow-hidden">
      <div className="p-4 border-b border-therapy-lightPurple/20 bg-gradient-therapy text-white">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold">AI Therapy Session</h2>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-therapy-purple text-white rounded-tr-none'
                  : 'bg-therapy-lightPurple/20 text-gray-800 rounded-tl-none'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'ai' ? (
                  <Sparkles className="h-4 w-4 text-therapy-purple mr-1" />
                ) : (
                  <User className="h-4 w-4 mr-1" />
                )}
                <span className="text-xs opacity-70">
                  {message.sender === 'ai' ? 'AI Assistant' : 'You'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-therapy-lightPurple/20 rounded-2xl rounded-tl-none px-4 py-3">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-therapy-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 bg-therapy-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="h-2 w-2 bg-therapy-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-therapy-lightPurple/20">
        <div className="flex space-x-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="resize-none focus-visible:ring-therapy-purple"
            rows={2}
          />
          <Button 
            onClick={handleSendMessage} 
            className="bg-therapy-purple hover:bg-therapy-purple/90 text-white"
            disabled={inputValue.trim() === '' || isTyping}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This is a simulation of the AI therapy experience. In a full version, responses would be generated by a professionally trained AI model.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
