
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Heart, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Years of Excellence', value: '15+' },
    { icon: Users, label: 'Expert Bakers', value: '25+' },
    { icon: Clock, label: 'Cakes Delivered', value: '50,000+' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only the finest ingredients and time-tested recipes to create cakes that taste as good as they look.'
    },
    {
      title: 'Custom Creations',
      description: 'Every cake tells a story. We work closely with you to bring your vision to life with personalized designs.'
    },
    {
      title: 'Timely Delivery',
      description: 'Your special moments matter to us. We ensure fresh, beautiful cakes delivered right on time, every time.'
    },
    {
      title: 'Customer Care',
      description: 'From order to delivery, our team is dedicated to making your cake experience exceptional and memorable.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About Sweet Dreams
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2009, we've been crafting extraordinary cakes that make your celebrations unforgettable. 
            From birthdays to weddings, our passion for baking excellence shines through every creation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Our Sweet Story</CardTitle>
                <CardDescription className="text-lg">
                  From humble beginnings to sweet success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Sweet Dreams began as a small family bakery with a simple mission: to create cakes that bring 
                    joy to life's most precious moments. What started in a cozy kitchen has grown into a beloved 
                    destination for cake lovers across the city.
                  </p>
                  <p>
                    Our founder, Chef Maria Rodriguez, learned the art of baking from her grandmother in a small 
                    village bakery. She brought those traditional techniques to the modern world, combining 
                    time-honored recipes with contemporary design and flavors.
                  </p>
                  <p>
                    Today, our team of skilled bakers and decorators continues that legacy, creating custom cakes 
                    that are as unique as the celebrations they honor. Every cake is made with love, care, and 
                    the finest ingredients we can source.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate bakers behind your sweet dreams
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Chef Maria Rodriguez', role: 'Founder & Head Baker', experience: '20+ years' },
              { name: 'Alex Thompson', role: 'Cake Designer', experience: '8+ years' },
              { name: 'Sarah Kim', role: 'Pastry Specialist', experience: '12+ years' }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-chocolate rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <Badge variant="outline" className="mt-2">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
