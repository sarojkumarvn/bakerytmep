import { useState } from 'react';
import Header from '@/components/Header';
import CakeCard from '@/components/CakeCard';
import InstagramReels from '@/components/InstagramReels';
import TwitterPosts from '@/components/TwitterPosts';
import { ProductDialog } from '@/components/ProductDialog';
import { OfferPopup } from '@/components/OfferPopup';
import { dummyCakes } from '@/data/dummy';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  const featuredCakes = dummyCakes.filter(cake => cake.isFeatured);
  const popularCakes = dummyCakes.filter(cake => cake.isBestseller);

  const handleCakeClick = (cake: any) => {
    setSelectedCake(cake);
    setIsProductDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OfferPopup delay={3000} />
      
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h1 className="text-5xl font-bold text-primary">
                Indulge in Sweetness, Crafted with Love
              </h1>
              <p className="text-muted-foreground text-lg">
                Experience the magic of our handcrafted cakes, made with the finest ingredients and
                passion for perfection.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" asChild>
                  <Link to="/cakes">Order Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/custom">Custom Order</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-cake.png"
                alt="Delicious Cake"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Cakes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handcrafted selection of premium cakes, made with the finest ingredients
              and lots of love for your special moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCakes.map((cake) => (
              <div key={cake.id} onClick={() => handleCakeClick(cake)}>
                <CakeCard cake={cake} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Most Popular</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what other customers are ordering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCakes.map((cake) => (
              <div key={cake.id} onClick={() => handleCakeClick(cake)}>
                <CakeCard cake={cake} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground mb-6">
                Real stories from satisfied customers who have experienced the joy of our cakes.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Amazing Cake!</CardTitle>
                  <CardDescription>By John Doe</CardDescription>
                </CardHeader>
                <CardContent>
                  The cake was absolutely delicious and beautifully decorated. It was the highlight
                  of our party!
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <img
                src="/happy-customers.png"
                alt="Happy Customers"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Follow us on Instagram
          </h2>
          <InstagramReels />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            What's New on Twitter
          </h2>
          <TwitterPosts />
        </div>
      </section>

      <ProductDialog
        open={isProductDialogOpen}
        onOpenChange={setIsProductDialogOpen}
        cake={selectedCake}
      />
    </div>
  );
};

export default Index;
