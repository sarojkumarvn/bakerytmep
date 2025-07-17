
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Bakery',
      content: '123 Sweet Street, Cake District\nBakery City, BC 12345',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-CAKE\n+1 (555) 123-2253',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'orders@sweetdreams.com\ninfo@sweetdreams.com',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sat: 8:00 AM - 8:00 PM\nSun: 10:00 AM - 6:00 PM',
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our cakes or need help with your order? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      className="min-h-32"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        {info.action && (
                          <Button variant="outline" size="sm">
                            {info.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-green-800 mb-2">
                        Quick Support on WhatsApp
                      </h3>
                      <p className="text-green-700 mb-3">
                        Get instant help with your orders and queries
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      question: 'How far in advance should I place my order?',
                      answer: 'Regular cakes: 24-48 hours. Custom cakes: 3-7 days depending on complexity.'
                    },
                    {
                      question: 'Do you deliver?',
                      answer: 'Yes! We deliver within a 15km radius. Delivery charges apply based on distance.'
                    },
                    {
                      question: 'Can I modify my order after placing it?',
                      answer: 'Minor changes can be made up to 24 hours before delivery. Contact us immediately.'
                    },
                    {
                      question: 'Do you offer eggless cakes?',
                      answer: 'Absolutely! We have a wide range of eggless options available in all flavors.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-primary">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
