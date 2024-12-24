import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Clock, Trophy, Shield } from 'lucide-react';

const services = [
  {
    title: 'Expert Consultation',
    description: 'Get professional advice from our experienced automotive specialists',
    icon: Wrench,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service for all your inquiries',
    icon: Clock,
  },
  {
    title: 'Quality Guarantee',
    description: 'All our products come with a quality assurance guarantee',
    icon: Trophy,
  },
  {
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty on all parts and services',
    icon: Shield,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-accent/50" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive support and services to ensure your satisfaction
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto rounded-full bg-primary/10 p-3 w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}