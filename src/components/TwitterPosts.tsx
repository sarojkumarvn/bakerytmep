
import { Twitter, Heart, MessageCircle, Repeat2, Share, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TwitterPosts = () => {
  const dummyTweets = [
    {
      id: 1,
      content: "Just delivered the most beautiful 3-tier wedding cake to the lovely couple! 💒✨ Nothing beats seeing the joy on their faces. #WeddingCakes #SweetDreams #MumbaiCakes",
      timestamp: "2h",
      likes: 45,
      retweets: 12,
      replies: 8,
      image: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png'
    },
    {
      id: 2,
      content: "🍰 FLASH SALE ALERT! 🍰\n\nGet 20% off on all birthday cakes this weekend! Use code BIRTHDAY20 at checkout. Valid till Sunday midnight! 🎂\n\n#FlashSale #BirthdayCakes #MumbaiDelivery",
      timestamp: "4h",
      likes: 89,
      retweets: 34,
      replies: 15,
      image: null
    },
    {
      id: 3,
      content: "Behind the scenes: Our master chef putting the finishing touches on today's custom chocolate truffle cake! The attention to detail is what makes us special 👨‍🍳🎨",
      timestamp: "1d",
      likes: 67,
      retweets: 23,
      replies: 11,
      image: '/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png'
    },
    {
      id: 4,
      content: "Customer testimonial Tuesday! ❤️\n\n\"Sweet Dreams Cakes made our anniversary unforgettable. The red velvet cake was absolutely divine!\" - Priya & Raj\n\n#CustomerLove #Anniversary #RedVelvet",
      timestamp: "2d",
      likes: 156,
      retweets: 45,
      replies: 28,
      image: null
    }
  ];

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            <Twitter className="h-4 w-4 mr-2" />
            Latest Updates
          </Badge>
          <h2 className="text-display text-4xl font-bold text-primary">
            Follow Our Journey
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Stay updated with our latest creations, offers, and sweet moments shared by our customers
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 mb-8">
          {dummyTweets.map((tweet) => (
            <Card key={tweet.id} className="card-elegant hover:shadow-chocolate transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SD</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-foreground">Sweet Dreams Cakes</h3>
                      <span className="text-muted-foreground">@sweetdreamscakes</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground text-sm">{tweet.timestamp}</span>
                    </div>
                    
                    <div className="text-foreground mb-3 leading-relaxed">
                      {formatContent(tweet.content)}
                    </div>
                    
                    {tweet.image && (
                      <div className="mb-3 rounded-lg overflow-hidden">
                        <img
                          src={tweet.image}
                          alt="Tweet image"
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-muted-foreground max-w-md">
                      <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{tweet.replies}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 hover:text-green-500 cursor-pointer transition-colors">
                        <Repeat2 className="h-4 w-4" />
                        <span className="text-sm">{tweet.retweets}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 hover:text-red-500 cursor-pointer transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{tweet.likes}</span>
                      </div>
                      
                      <div className="hover:text-primary cursor-pointer transition-colors">
                        <Share className="h-4 w-4" />
                      </div>

                      <div className="hover:text-primary cursor-pointer transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="btn-elegant">
            <Twitter className="mr-2 h-5 w-5" />
            Follow on Twitter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwitterPosts;
