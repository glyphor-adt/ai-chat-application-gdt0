import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-24 bg-primary/5 text-primary-foreground", className)}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          AI-Powered Chat: Your Smart Assistant
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
          Experience the future of communication. Our AI chatbot is designed to understand, assist, and connect you instantly.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Start Chatting
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;