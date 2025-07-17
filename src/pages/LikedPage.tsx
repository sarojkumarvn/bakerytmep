
import { useState } from 'react';
import Header from '@/components/Header';
import CakeCard from '@/components/CakeCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { dummyCakes } from '@/data/dummy';

const LikedPage = () => {
  // Simulate liked cakes (first 4 cakes from dummy data)
  const [likedCakes] = useState(dummyCakes.slice(0, 4));

  if (likedCakes.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-8">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-6">
                Start exploring and save your favorite cakes here!
              </p>
              <Button size="lg" onClick={() => window.location.href = '/cakes'}>
                Browse Cakes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">My Favorites</h1>
              <p className="text-muted-foreground">
                Your collection of loved cakes
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 fill-current text-red-500" />
              <span>{likedCakes.length} favorite{likedCakes.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {likedCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="mt-12 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Ready to order?</h3>
                <p className="text-muted-foreground mb-4">
                  Browse our full collection to find more amazing cakes
                </p>
                <Button size="lg" onClick={() => window.location.href = '/cakes'}>
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedPage;
