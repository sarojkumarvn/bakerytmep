
import { useState } from 'react';
import { Star, Heart, Minus, Plus, ShoppingCart, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface Cake {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  isFeatured: boolean;
  isBestseller: boolean;
  tags: string[];
}

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cake: Cake | null;
}

export const ProductDialog = ({ open, onOpenChange, cake }: ProductDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('1kg');
  const { toast } = useToast();

  if (!cake) return null;

  const weights = ['500g', '1kg', '1.5kg', '2kg'];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${cake.name} has been added to your cart.`,
    });
    onOpenChange(false);
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecting to checkout",
      description: "Taking you to the checkout page...",
    });
    onOpenChange(false);
    window.location.href = '/checkout';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              {cake.isBestseller && (
                <Badge className="absolute top-3 left-3 bg-orange-500">
                  Bestseller
                </Badge>
              )}
              {cake.isFeatured && (
                <Badge className="absolute top-3 right-3 bg-purple-500">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <DialogHeader>
              <DialogTitle className="text-2xl">{cake.name}</DialogTitle>
            </DialogHeader>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(cake.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {cake.rating} ({cake.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">
                ₹{cake.price}
              </span>
              {cake.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{cake.originalPrice}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {cake.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">{cake.description}</p>
            </div>

            {/* Weight Selection */}
            <div>
              <Label className="text-sm font-medium">Weight</Label>
              <div className="flex gap-2 mt-2">
                {weights.map((weight) => (
                  <Button
                    key={weight}
                    variant={selectedWeight === weight ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedWeight(weight)}
                  >
                    {weight}
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                Custom Message (Optional)
              </Label>
              <Textarea
                id="message"
                placeholder="Add a personal message for the cake..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="mt-2"
                rows={3}
              />
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <Label className="text-sm font-medium">Quantity:</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-medium w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleAddToCart}
                className="flex-1"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button onClick={handleBuyNow} className="flex-1">
                Buy Now
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
