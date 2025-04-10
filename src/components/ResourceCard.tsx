
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

const ResourceCard = ({ icon: Icon, title, description, link, className }: ResourceCardProps) => {
  const CardContent = () => (
    <>
      <div className="mb-4 p-3 rounded-full bg-therapy-lightPurple/20 inline-block">
        <Icon className="h-6 w-6 text-therapy-purple" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {link && (
        <div className="text-therapy-purple font-medium text-sm">
          Read More &rarr;
        </div>
      )}
    </>
  );

  return link ? (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(
        "therapy-card block hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <CardContent />
    </a>
  ) : (
    <div className={cn("therapy-card", className)}>
      <CardContent />
    </div>
  );
};

export default ResourceCard;
