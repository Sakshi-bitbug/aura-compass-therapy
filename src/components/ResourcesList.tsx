
import { BookOpen, Brain, Heart, HeartPulse, Activity, Sparkles, BookHeart, Clock } from 'lucide-react';
import ResourceCard from './ResourceCard';

const resources = [
  {
    icon: Brain,
    title: "Understanding Anxiety",
    description: "Learn about the different types of anxiety disorders and their common symptoms.",
    link: "#"
  },
  {
    icon: Heart,
    title: "Self-Care Practices",
    description: "Daily habits and activities that can help maintain your mental wellbeing.",
    link: "#"
  },
  {
    icon: HeartPulse,
    title: "Stress Management",
    description: "Effective techniques to manage and reduce stress in your daily life.",
    link: "#"
  },
  {
    icon: Activity,
    title: "Mindfulness Exercises",
    description: "Simple mindfulness practices you can incorporate into your routine.",
    link: "#"
  },
  {
    icon: Sparkles,
    title: "Positive Psychology",
    description: "Approaches focused on strengths, wellbeing and positive aspects of human development.",
    link: "#"
  },
  {
    icon: BookHeart,
    title: "Recommended Reading",
    description: "Books that can help you understand and improve your mental health.",
    link: "#"
  },
  {
    icon: Clock,
    title: "Building Healthy Habits",
    description: "How to develop sustainable habits that support your mental wellbeing.",
    link: "#"
  },
  {
    icon: BookOpen,
    title: "Crisis Resources",
    description: "Emergency resources and hotlines for immediate mental health support.",
    link: "#"
  }
];

const ResourcesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          icon={resource.icon}
          title={resource.title}
          description={resource.description}
          link={resource.link}
        />
      ))}
    </div>
  );
};

export default ResourcesList;
