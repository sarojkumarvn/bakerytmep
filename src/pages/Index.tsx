import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import CakeCard from '@/components/CakeCard';
import InstagramReels from '@/components/InstagramReels';
import TwitterPosts from '@/components/TwitterPosts';
import { dummyCakes, dummyReviews } from '@/data/dummy';
import heroImage from '@/assets/hero-cake.jpg';

const Index = () => {
  const featuredCakes = dummyCakes.filter(cake => cake.featured);
  const bestsellerCakes = dummyCakes.filter(cake => cake.bestseller);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero Cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground">
                Premium Artisanal Cakes
              </Badge>
              <h1 className="text-hero leading-tight">
                MY FAVORITE
                <br />
                <span className="text-primary">CAKE</span>
              </h1>
              <p className="text-subtitle max-w-lg">
                Discover our exquisite collection of handcrafted cakes made with the finest ingredients. From classic favorites to custom creations, every bite tells a story.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link to="/cakes">
                  Explore Cakes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-elegant">
                <Link to="/custom">Custom Orders</Link>
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <Clock className="h-6 w-6 mx-auto text-primary" />
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">1-3 hours</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-6 w-6 mx-auto text-primary" />
                <p className="text-sm font-medium">Quality Assured</p>
                <p className="text-xs text-muted-foreground">Premium ingredients</p>
              </div>
              <div className="text-center space-y-2">
                <Heart className="h-6 w-6 mx-auto text-primary" />
                <p className="text-sm font-medium">Made with Love</p>
                <p className="text-xs text-muted-foreground">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="mb-4">Featured Collection</Badge>
            <h2 className="text-display text-4xl font-bold text-primary">
              Our Signature Creations
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Indulge in our most popular cakes, crafted with passion and decorated with artistry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="btn-elegant">
              <Link to="/cakes">
                View All Cakes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-amber-500 hover:bg-amber-600 mb-4">Bestsellers</Badge>
            <h2 className="text-display text-4xl font-bold text-primary">
              Customer Favorites
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              These are the cakes our customers can't stop ordering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <InstagramReels />

      {/* Reviews */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="mb-4">Customer Love</Badge>
            <h2 className="text-display text-4xl font-bold text-primary">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dummyReviews.map((review) => (
              <Card key={review.id} className="card-elegant">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < review.rating 
                              ? 'fill-amber-400 text-amber-400' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{review.comment}"</p>
                    <div className="text-sm font-medium">— {review.userName}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Twitter Posts Section */}
      <TwitterPosts />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-chocolate bg-green-500 hover:bg-green-600 text-white p-4"
        >
          <span className="text-2xl">💬</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
