
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingCart, Tag } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chocolate Birthday Cake',
      price: 1299,
      quantity: 1,
      image: '/placeholder.svg',
      size: '1kg',
      message: 'Happy Birthday!'
    },
    {
      id: 2,
      name: 'Red Velvet Heart Cake',
      price: 1599,
      quantity: 2,
      image: '/placeholder.svg',
      size: '1.5kg',
      message: ''
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === 'SWEET10') {
      setAppliedCoupon({ code: 'SWEET10', discount: 10, type: 'percentage' });
    }
    setCouponCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount / 100) : 0;
  const deliveryFee = subtotal > 1500 ? 0 : 99;
  const total = subtotal - discount + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-8">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any delicious cakes yet!
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
          <h1 className="text-3xl font-bold text-primary mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline">{item.size}</Badge>
                              {item.message && (
                                <Badge variant="secondary">"{item.message}"</Badge>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-lg">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-muted-foreground">
                                ₹{item.price} each
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Coupon */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Apply Coupon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-medium">
                          {appliedCoupon.code} Applied
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setAppliedCoupon(null)}
                          className="text-green-800 hover:text-green-900"
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="text-sm text-green-600">
                        {appliedCoupon.discount}% discount applied
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  
                  {subtotal < 1500 && (
                    <p className="text-sm text-muted-foreground">
                      Add ₹{(1500 - subtotal).toLocaleString()} more for free delivery
                    </p>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  
                  <Button size="lg" className="w-full mt-4">
                    Proceed to Checkout
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>

              {/* Delivery Info */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>📍 Delivering to your saved address</p>
                    <p>🕒 Estimated delivery: 2-4 hours</p>
                    <p>💳 Payment on delivery available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
