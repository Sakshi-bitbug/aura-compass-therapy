
import { BookOpen, Brain, Heart, HeartPulse, Activity, Sparkles, BookHeart, Clock } from 'lucide-react';
import ResourceCard from './ResourceCard';

const resources = [
  {
    icon: Brain,
    title: "Understanding Anxiety",
    description: "Learn about the different types of anxiety disorders and their common symptoms.",
    link: "#",
    additionalContent: "Anxiety disorders are characterized by persistent, excessive fear or worry in situations that are not threatening. There are several types of anxiety disorders, including generalized anxiety disorder, panic disorder, specific phobias, social anxiety disorder, and separation anxiety disorder. Common symptoms include restlessness, feeling on edge, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbances."
  },
  {
    icon: Heart,
    title: "Self-Care Practices",
    description: "Daily habits and activities that can help maintain your mental wellbeing.",
    link: "#",
    additionalContent: "Self-care involves deliberately taking care of your physical, mental, and emotional health. Effective self-care practices include maintaining a regular sleep schedule, eating nutritious foods, engaging in regular physical activity, spending time in nature, practicing mindfulness or meditation, setting boundaries, engaging in enjoyable activities, connecting with loved ones, and seeking professional help when needed."
  },
  {
    icon: HeartPulse,
    title: "Stress Management",
    description: "Effective techniques to manage and reduce stress in your daily life.",
    link: "#",
    additionalContent: "Managing stress effectively involves identifying stressors, developing healthy coping mechanisms, and making lifestyle changes. Techniques include deep breathing exercises, progressive muscle relaxation, guided imagery, regular physical activity, time management, setting realistic goals, maintaining social connections, limiting exposure to stressors when possible, and practicing self-compassion."
  },
  {
    icon: Activity,
    title: "Mindfulness Exercises",
    description: "Simple mindfulness practices you can incorporate into your routine.",
    link: "#",
    additionalContent: "Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment. Simple exercises include mindful breathing, body scan meditation, mindful walking, mindful eating, the 5-4-3-2-1 grounding technique, mindful observation, loving-kindness meditation, and mindful listening."
  },
  {
    icon: Sparkles,
    title: "Positive Psychology",
    description: "Approaches focused on strengths, wellbeing and positive aspects of human development.",
    link: "#",
    additionalContent: "Positive psychology focuses on positive experiences, positive individual traits, and positive institutions. Key concepts include the PERMA model (Positive emotions, Engagement, Relationships, Meaning, and Accomplishments), character strengths, flow states, gratitude practices, savoring positive experiences, optimistic thinking styles, and building resilience."
  },
  {
    icon: BookHeart,
    title: "Recommended Reading",
    description: "Books that can help you understand and improve your mental health.",
    link: "#",
    additionalContent: "Some highly recommended books on mental health include 'The Body Keeps the Score' by Bessel van der Kolk, 'Feeling Good' by David D. Burns, 'Man's Search for Meaning' by Viktor E. Frankl, 'The Gifts of Imperfection' by Brené Brown, 'Atomic Habits' by James Clear, 'Lost Connections' by Johann Hari, and 'Why We Sleep' by Matthew Walker."
  },
  {
    icon: Clock,
    title: "Building Healthy Habits",
    description: "How to develop sustainable habits that support your mental wellbeing.",
    link: "#",
    additionalContent: "Building healthy habits involves understanding the habit loop: cue, craving, response, and reward. Effective strategies include starting with tiny habits, focusing on consistency rather than perfection, using implementation intentions ('I will [behavior] at [time] in [location]'), habit stacking (linking a new habit to an existing one), designing your environment to support your habits, and tracking your progress."
  },
  {
    icon: BookOpen,
    title: "Crisis Resources",
    description: "Emergency resources and hotlines for immediate mental health support.",
    link: "#",
    additionalContent: "In addition to the National Suicide Prevention Lifeline (1-800-273-8255) and Crisis Text Line (Text HOME to 741741), other crisis resources include the Veterans Crisis Line (1-800-273-8255, press 1), the Disaster Distress Helpline (1-800-985-5990), the SAMHSA Treatment Referral Hotline (1-800-662-HELP), and the National Alliance on Mental Illness HelpLine (1-800-950-NAMI or text NAMI to 741741)."
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
          additionalContent={resource.additionalContent}
          link={resource.link}
        />
      ))}
    </div>
  );
};

export default ResourcesList;
