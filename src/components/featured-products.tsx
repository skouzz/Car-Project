import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Premium Oil Filter',
    description: 'High-performance oil filter with advanced filtration technology',
    image: 'https://images.unsplash.com/photo-1635784063754-0f5594d97db7?auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 2,
    name: 'Engine Control Unit',
    description: 'Advanced ECU for optimal engine performance',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 3,
    name: 'Performance Brake Kit',
    description: 'Complete brake system upgrade for enhanced stopping power',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1974',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular and high-quality automotive parts
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="mt-2">{product.description}</CardDescription>
                <Button className="w-full mt-4" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}