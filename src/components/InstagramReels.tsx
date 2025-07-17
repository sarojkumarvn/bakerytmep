
import { useState } from 'react';
import { Instagram, Play, Heart, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const InstagramReels = () => {
  const dummyReels = [
    {
      id: 1,
      thumbnail: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png',
      caption: 'Behind the scenes: Creating our signature chocolate truffle cake! 🍰✨',
      likes: 234,
      comments: 45,
      views: '1.2K',
      duration: '0:30',
      url: '#'
    },
    {
      id: 2,
      thumbnail: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png',
      caption: 'Customer reaction to our surprise birthday delivery! 🎂❤️',
      likes: 189,
      comments: 32,
      views: '896',
      duration: '0:25',
      url: '#'
    },
    {
      id: 3,
      thumbnail: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png',
      caption: 'Wedding cake decoration process - pure artistry! 💒🎨',
      likes: 312,
      comments: 67,
      views: '1.8K',
      duration: '0:45',
      url: '#'
    },
    {
      id: 4,
      thumbnail: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png',
      caption: 'Quick tip: How to store your cakes properly 📦💡',
      likes: 156,
      comments: 23,
      views: '743',
      duration: '0:35',
      url: '#'
    }
  ];

  return (
    <section className="py-16 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            <Instagram className="h-4 w-4 mr-2" />
            Follow Us on Instagram
          </Badge>
          <h2 className="text-display text-4xl font-bold text-primary">
            @sweetdreams_cakes
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Get a behind-the-scenes look at our cake-making process and see happy customers enjoying our creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dummyReels.map((reel) => (
            <Card key={reel.id} className="card-product group cursor-pointer hover:shadow-chocolate transition-all duration-300">
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt="Instagram Reel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <Play className="h-6 w-6 text-primary fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
                  {reel.duration}
                </Badge>

                {/* Views Badge */}
                <Badge className="absolute bottom-2 left-2 bg-black/70 text-white text-xs">
                  {reel.views} views
                </Badge>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {reel.caption}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="btn-elegant">
            <Instagram className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
