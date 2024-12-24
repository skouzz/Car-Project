import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Categories } from '@/components/categories';
import { FeaturedProducts } from '@/components/featured-products';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;