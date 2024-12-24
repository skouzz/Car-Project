import { Car } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8" />
          <span className="font-bold text-xl">AutoParts</span>
        </div>
        
        <div className="flex gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}