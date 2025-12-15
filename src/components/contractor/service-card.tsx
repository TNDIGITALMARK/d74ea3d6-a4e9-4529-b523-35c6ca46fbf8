import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  priceRange?: string;
}

export function ServiceCard({ icon: Icon, title, description, priceRange }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border group">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      {priceRange && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="font-heading font-bold text-lg text-primary">{priceRange}</p>
        </div>
      )}
    </div>
  );
}
