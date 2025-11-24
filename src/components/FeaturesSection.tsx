import React from 'react';
import { CheckCircle, MessageSquare, User, Link } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    title: 'Improved Conversations',
    description: 'Experience smoother and more natural conversations with our advanced AI algorithms.',
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Personalized Responses',
    description: 'Receive tailored responses based on your unique preferences and interaction history.',
    icon: <User className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate our AI chat app with your existing workflows and platforms.',
    icon: <Link className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Enhanced Productivity',
    description: 'Boost your productivity with quick and efficient access to information and assistance.',
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
];


const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features and Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;