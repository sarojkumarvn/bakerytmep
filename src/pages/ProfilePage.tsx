
import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, MapPin, Phone, Mail, Calendar, Award, Settings, Bell } from 'lucide-react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-06-15',
    bio: 'Cake enthusiast and celebration lover!'
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      address: '456 Business Ave, Suite 200',
      city: 'New York',
      zipCode: '10002',
      isDefault: false
    }
  ]);

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    orderUpdates: true
  });

  const stats = [
    { label: 'Total Orders', value: '24', icon: Calendar },
    { label: 'Favorite Cakes', value: '8', icon: Award },
    { label: 'Loyalty Points', value: '1,250', icon: Award },
    { label: 'Member Since', value: '2022', icon: User }
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-chocolate rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-primary mb-2">{profile.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {profile.phone}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    Premium Member
                  </Badge>
                </div>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Profile Tabs */}
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Personal Information */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={profile.dateOfBirth}
                          onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      />
                    </div>

                    <Button type="submit">Update Profile</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses */}
            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Delivery Addresses</CardTitle>
                      <CardDescription>
                        Manage your saved delivery addresses
                      </CardDescription>
                    </div>
                    <Button>Add New Address</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <Card key={address.id} className="relative">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium">{address.type}</span>
                                  {address.isDefault && (
                                    <Badge variant="outline" className="text-xs">Default</Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground">{address.address}</p>
                                <p className="text-muted-foreground">{address.city}, {address.zipCode}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Choose how you want to receive updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                    { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via SMS' },
                    { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive promotional offers and updates' },
                    { key: 'orderUpdates', label: 'Order Updates', description: 'Get notified about order status changes' }
                  ].map((pref) => (
                    <div key={pref.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{pref.label}</div>
                        <div className="text-sm text-muted-foreground">{pref.description}</div>
                      </div>
                      <Button
                        variant={preferences[pref.key as keyof typeof preferences] ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPreferences({
                          ...preferences,
                          [pref.key]: !preferences[pref.key as keyof typeof preferences]
                        })}
                      >
                        {preferences[pref.key as keyof typeof preferences] ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Actions</CardTitle>
                    <CardDescription>
                      Manage your account settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-destructive">Delete Account</div>
                        <div className="text-sm text-muted-foreground">Permanently delete your account and data</div>
                      </div>
                      <Button variant="destructive" size="sm">Delete Account</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
