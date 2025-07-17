
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Calendar, MessageSquare, Image as ImageIcon } from 'lucide-react';

const CustomOrdersPage = () => {
  const [formData, setFormData] = useState({
    cakeType: '',
    size: '',
    flavor: '',
    message: '',
    specialRequests: '',
    deliveryDate: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom order submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Custom Cake Orders</h1>
            <p className="text-lg text-muted-foreground">
              Create your dream cake with our expert bakers. Share your vision and we'll make it reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Tell Us Your Vision
                </CardTitle>
                <CardDescription>
                  Describe your perfect cake and we'll work with you to create it
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Flexible Timeline
                </CardTitle>
                <CardDescription>
                  Custom cakes typically require 3-7 days advance notice
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Custom Order Form</CardTitle>
              <CardDescription>
                Fill out the details below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cakeType">Cake Type</Label>
                    <Input
                      id="cakeType"
                      placeholder="Birthday, Wedding, Anniversary..."
                      value={formData.cakeType}
                      onChange={(e) => setFormData({...formData, cakeType: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Size</Label>
                    <Input
                      id="size"
                      placeholder="1kg, 2kg, 3 tier..."
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flavor">Preferred Flavor</Label>
                    <Input
                      id="flavor"
                      placeholder="Chocolate, Vanilla, Red Velvet..."
                      value={formData.flavor}
                      onChange={(e) => setFormData({...formData, flavor: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      placeholder="₹2000-3000"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message on Cake</Label>
                  <Input
                    id="message"
                    placeholder="Happy Birthday John!"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests & Design Details</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Please describe your design requirements, themes, colors, decorations, dietary restrictions, etc."
                    className="min-h-32"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Reference Images (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload images to help us understand your vision
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Custom Order Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomOrdersPage;
