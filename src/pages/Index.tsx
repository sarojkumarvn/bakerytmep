import { useState } from 'react';
import Header from '@/components/Header';
import CakeCard from '@/components/CakeCard';
import InstagramReels from '@/components/InstagramReels';
import TwitterPosts from '@/components/TwitterPosts';
import { ProductDialog } from '@/components/ProductDialog';
import { OfferPopup } from '@/components/OfferPopup';
import { Cake, dummyCakes, testimonials } from '@/data/dummy';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CakeIcon, Clock, Heart, Shield, Star } from 'lucide-react';
import MyFooter from '@/components/footer';

const Index = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  const featuredCakes = dummyCakes.filter(cake => cake.featured);
  const popularCakes = dummyCakes.filter(cake => cake.bestseller);

  const handleCakeClick = (cake: Cake) => {
    setSelectedCake(cake);
    setIsProductDialogOpen(true);
  }; 

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OfferPopup delay={3000} />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={"/hero-cake.jpg"}
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


      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-transparent  to-background/40 z-10 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Customer Love</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear what our happy customers say about their cake experiences
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="flex overflow-x-hidden py-4 group">
              <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="inline-flex px-4 w-[420px]">
                    <Card className="h-full w-full flex flex-col">
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <img
                          src={testimonial.cakeImage}
                          alt={`Cake ordered by ${testimonial.name}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="flex flex-row items-start space-x-4 space-y-0 flex-1">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mt-1 border-2 border-primary">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription className="mb-2">{testimonial.role}</CardDescription>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground line-clamp-4">
                          "{testimonial.content}"
                        </p>
                        <div className="mt-3 flex items-center text-sm text-primary">
                          <CakeIcon className="h-4 w-4 mr-2" />
                          <span>Ordered a custom cake</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
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
      <section className=" bg-gray-50">
        
        <MyFooter />
        
      </section>
    </div>
  );
};

export default Index;
