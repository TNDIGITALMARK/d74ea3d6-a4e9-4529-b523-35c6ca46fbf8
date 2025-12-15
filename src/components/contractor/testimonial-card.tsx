import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  quote: string;
  projectType: string;
}

export function TestimonialCard({ name, role, rating, quote, projectType }: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border">
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-card-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center space-x-3 pt-4 border-t border-border">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="font-heading font-bold text-lg text-primary">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading font-semibold text-card-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-xs text-primary font-medium mt-0.5">{projectType}</p>
        </div>
      </div>
    </div>
  );
}
