
import { LucideIcon, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  className?: string;
  additionalContent?: string;
}

const ResourceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  className,
  additionalContent 
}: ResourceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const CardContent = () => (
    <>
      <div className="mb-4 p-3 rounded-full bg-therapy-lightPurple/20 inline-block">
        <Icon className="h-6 w-6 text-therapy-purple" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      {additionalContent && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="pt-2">
          <CollapsibleTrigger className="flex items-center text-therapy-purple font-medium text-sm group">
            <span>Read More</span>
            {isOpen ? (
              <ChevronDown className="ml-1 h-4 w-4 transition-transform" />
            ) : (
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <div className="text-gray-600 text-sm border-t border-therapy-lightPurple/20 pt-3">
              {additionalContent}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      
      {link && !additionalContent && (
        <div className="text-therapy-purple font-medium text-sm flex items-center group">
          <span>Read More</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
