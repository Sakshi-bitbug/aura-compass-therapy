
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={`therapy-card group hover:border-therapy-purple/30 ${className}`}>
      <div className="mb-4 p-3 rounded-full bg-therapy-lightPurple/20 inline-block group-hover:bg-therapy-lightPurple/30 transition-colors">
        <Icon className="h-6 w-6 text-therapy-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
