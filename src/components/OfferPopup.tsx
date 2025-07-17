
import { useState, useEffect } from 'react';
import { X, Gift, Clock, Tag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface OfferPopupProps {
  delay?: number;
}

export const OfferPopup = ({ delay = 3000 }: OfferPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('offerPopupShown');
    
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('offerPopupShown', 'true');
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, hasShown]);

  const handleClaim = () => {
    setIsOpen(false);
    // Navigate to cakes page with discount applied
    window.location.href = '/cakes?offer=SWEET20';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="relative bg-gradient-to-br from-pink-500 to-orange-500 text-white p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <div className="mb-4">
              <Gift className="h-16 w-16 mx-auto mb-2 animate-bounce" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">
              🎉 Special Offer!
            </h2>
            
            <div className="bg-white/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold mb-1">20% OFF</div>
              <div className="text-sm opacity-90">On all cake orders</div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tag className="h-4 w-4" />
              <Badge variant="secondary" className="bg-white/20 text-white">
                Code: SWEET20
              </Badge>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm opacity-90 mb-4">
              <Clock className="h-4 w-4" />
              <span>Limited time offer - Valid until midnight!</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={handleClaim}
                className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold"
              >
                Claim Offer Now
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="w-full text-white hover:bg-white/20 text-sm"
              >
                Maybe later
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50">
          <div className="text-xs text-gray-600 text-center space-y-1">
            <p>✓ Minimum order value: ₹500</p>
            <p>✓ Valid on all categories</p>
            <p>✓ Free delivery included</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
