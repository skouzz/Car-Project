import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, Battery, Settings, Wrench, Gauge, Cpu } from 'lucide-react';

const categories = [
  {
    title: 'Filters',
    description: 'Air, oil, and fuel filters for all vehicle types',
    icon: Filter,
  },
  {
    title: 'Electrical Parts',
    description: 'Batteries, alternators, and electrical components',
    icon: Battery,
  },
  {
    title: 'Engine Parts',
    description: 'Pistons, valves, and complete engine assemblies',
    icon: Settings,
  },
  {
    title: 'Maintenance Tools',
    description: 'Professional-grade tools for vehicle maintenance',
    icon: Wrench, // Changed from Tool to Wrench
  },
  {
    title: 'Performance Parts',
    description: 'Upgrade your vehicle\'s performance',
    icon: Gauge,
  },
  {
    title: 'Electronic Systems',
    description: 'Sensors, ECUs, and diagnostic equipment',
    icon: Cpu,
  },
];

export function Categories() {
  return (
    <section className="py-24 bg-accent/50" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Product Categories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our comprehensive range of automotive parts and accessories
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <category.icon className="h-8 w-8 mb-2" />
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  View Products →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}