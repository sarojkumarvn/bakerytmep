import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Package, 
  Star,
  DollarSign,
  Clock,
  ChefHat,
  MessageSquare,
  Settings,
  Plus,
  Filter,
  Download,
  Gift,
  MapPin,
  Phone,
  Globe,
  Instagram,
  Twitter,
  Percent,
  Calendar,
  Bell,
  Shield,
  Database,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Header from '@/components/Header';
import { analyticsData, dummyOrders, dummyCakes, dummyUsers, dummyReviews } from '@/data/dummy';

const AdminDashboard = () => {
  const [dateRange, setDateRange] = useState('monthly');

  const getRevenueByRange = () => {
    switch (dateRange) {
      case 'daily': return analyticsData.totalRevenue.daily;
      case 'weekly': return analyticsData.totalRevenue.weekly;
      case 'monthly': return analyticsData.totalRevenue.monthly;
      default: return analyticsData.totalRevenue.monthly;
    }
  };

  const getOrdersByRange = () => {
    switch (dateRange) {
      case 'daily': return analyticsData.totalOrders.daily;
      case 'weekly': return analyticsData.totalOrders.weekly;
      case 'monthly': return analyticsData.totalOrders.monthly;
      default: return analyticsData.totalOrders.monthly;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-orange-100 text-orange-800';
      case 'dispatched': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const dummyCoupons = [
    { id: 1, code: 'WELCOME10', discount: 10, type: 'percentage', minOrder: 500, expiry: '2024-12-31', active: true, used: 45 },
    { id: 2, code: 'FLAT50', discount: 50, type: 'flat', minOrder: 1000, expiry: '2024-11-30', active: true, used: 23 },
    { id: 3, code: 'BIRTHDAY20', discount: 20, type: 'percentage', minOrder: 800, expiry: '2024-12-15', active: false, used: 67 }
  ];

  const deliverySettings = {
    hours: '9:00 AM - 9:00 PM',
    areas: ['Mumbai Central', 'Bandra', 'Andheri', 'Thane'],
    charges: 50,
    freeDeliveryAbove: 1000
  };

  const siteSettings = {
    businessName: 'Sweet Dreams Cakes',
    email: 'hello@sweetdreamscakes.com',
    phone: '+91 98765 43210',
    address: '123 Baker Street, Mumbai, India',
    maintenanceMode: false,
    whatsappNumber: '+91 98765 43210',
    whatsappEnabled: true
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-display text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your cake business efficiently</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{getRevenueByRange().toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12.5% from last period</p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getOrdersByRange()}</div>
              <p className="text-xs text-muted-foreground">+8.2% from last period</p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dummyUsers.filter(u => u.role === 'user').length}</div>
              <p className="text-xs text-muted-foreground">+5.1% from last period</p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.pendingOrders}</div>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="w-full flex gap-2  flex-wrap h-auto">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="coupons">Coupons</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Orders Management */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-display text-2xl font-semibold">Order Management</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Cake</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Delivery Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.customerInfo.name}</div>
                            <div className="text-sm text-muted-foreground">{order.customerInfo.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.cakeName}</div>
                            <div className="text-sm text-muted-foreground">Qty: {order.quantity}</div>
                          </div>
                        </TableCell>
                        <TableCell>₹{order.totalAmount.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.orderStatus)}>
                            {order.orderStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.deliveryDate}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Update Status
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cake Management */}
          <TabsContent value="cakes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-display text-2xl font-semibold">Cake Management</h2>
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Add New Cake
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyCakes.map((cake) => (
                <Card key={cake.id} className="card-product">
                  <div className="relative">
                    <img
                      src={cake.images[0]}
                      alt={cake.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      {cake.featured && <Badge variant="destructive" className="text-xs">Featured</Badge>}
                      {cake.bestseller && <Badge className="bg-amber-500 text-xs">Bestseller</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg">{cake.name}</h3>
                        <p className="text-sm text-muted-foreground">{cake.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">₹{cake.price.toLocaleString()}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm">{cake.rating}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          {cake.inStock ? 'In Stock' : 'Out of Stock'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-display text-2xl font-semibold">User Management</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Admin
              </Button>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.totalOrders}</TableCell>
                        <TableCell>₹{user.totalSpent.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={user.verifiedBuyer ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {user.verifiedBuyer ? 'Verified' : 'Unverified'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Management */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-display text-2xl font-semibold">Review Management</h2>
              <div className="flex space-x-2">
                <Button variant="outline">Pending</Button>
                <Button variant="outline">Approved</Button>
                <Button variant="outline">Featured</Button>
              </div>
            </div>

            <div className="grid gap-6">
              {dummyReviews.map((review) => (
                <Card key={review.id} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{review.userName}</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < review.rating 
                                    ? 'fill-amber-400 text-amber-400' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={review.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {review.approved ? 'Approved' : 'Pending'}
                        </Badge>
                        {review.featured && (
                          <Badge variant="destructive">Featured</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Approve</Button>
                      <Button variant="outline" size="sm">Feature</Button>
                      <Button variant="outline" size="sm">Reject</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Coupons & Offers */}
          <TabsContent value="coupons" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-display text-2xl font-semibold">Coupons & Offers</h2>
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Create Coupon
              </Button>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Min Order</TableHead>
                      <TableHead>Expiry</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Used</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyCoupons.map((coupon) => (
                      <TableRow key={coupon.id}>
                        <TableCell className="font-medium">{coupon.code}</TableCell>
                        <TableCell>
                          {coupon.type === 'percentage' ? `${coupon.discount}%` : `₹${coupon.discount}`}
                        </TableCell>
                        <TableCell>₹{coupon.minOrder}</TableCell>
                        <TableCell>{coupon.expiry}</TableCell>
                        <TableCell>
                          <Badge className={coupon.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {coupon.active ? 'Active' : 'Inactive'}
                          </Badge>
                        </TableCell>
                        <TableCell>{coupon.used} times</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">
                              {coupon.active ? 'Disable' : 'Enable'}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Delivery Settings */}
          <TabsContent value="delivery" className="space-y-6">
            <h2 className="text-display text-2xl font-semibold">Delivery Settings</h2>
            
            <div className="grid gap-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Delivery Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Operating Hours</label>
                    <Input value={deliverySettings.hours} className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {deliverySettings.areas.map((area, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {area}
                        <button className="ml-2 text-red-500">×</button>
                      </Badge>
                    ))}
                  </div>
                  <Input placeholder="Add new area" />
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Delivery Charges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Standard Delivery</label>
                      <Input value={`₹${deliverySettings.charges}`} className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Free Delivery Above</label>
                      <Input value={`₹${deliverySettings.freeDeliveryAbove}`} className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Social Media Management */}
          <TabsContent value="social" className="space-y-6">
            <h2 className="text-display text-2xl font-semibold">Social Media Management</h2>
            
            <div className="grid gap-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-fetch Reels</p>
                      <p className="text-sm text-muted-foreground">Automatically display latest Instagram reels</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Instagram Handle</label>
                    <Input placeholder="@sweetdreams_cakes" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Hashtag Filter</label>
                    <Input placeholder="#sweetdreamscakes" className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-fetch Tweets</p>
                      <p className="text-sm text-muted-foreground">Display latest tweets and updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Twitter Handle</label>
                    <Input placeholder="@sweetdreamscakes" className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Social Feed Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Site Settings */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-display text-2xl font-semibold">Site Settings</h2>
            
            <div className="grid gap-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Business Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Business Name</label>
                      <Input value={siteSettings.businessName} className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Email</label>
                      <Input value={siteSettings.email} className="mt-1" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input value={siteSettings.phone} className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">WhatsApp Number</label>
                      <Input value={siteSettings.whatsappNumber} className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <Textarea value={siteSettings.address} className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    WhatsApp Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable WhatsApp Button</p>
                      <p className="text-sm text-muted-foreground">Show floating WhatsApp button on website</p>
                    </div>
                    <Switch defaultChecked={siteSettings.whatsappEnabled} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Default Message</label>
                    <Textarea 
                      placeholder="Hi! I'm interested in ordering a cake..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    System Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Maintenance Mode</p>
                      <p className="text-sm text-muted-foreground">Temporarily disable public access</p>
                    </div>
                    <Switch defaultChecked={siteSettings.maintenanceMode} />
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Backup Data
                    </Button>
                    <Button variant="outline">
                      <Activity className="h-4 w-4 mr-2" />
                      View Activity Logs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-display text-2xl font-semibold">Analytics & Reports</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Top Selling Cakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.topSellingCakes.map((cake, index) => (
                      <div key={cake.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium">#{index + 1}</span>
                          <div>
                            <div className="font-medium">{cake.name}</div>
                            <div className="text-sm text-muted-foreground">{cake.reviews} orders</div>
                          </div>
                        </div>
                        <span className="font-semibold">₹{cake.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Most Active Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.mostActiveUsers.map((user, index) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium">#{index + 1}</span>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.totalOrders} orders</div>
                          </div>
                        </div>
                        <span className="font-semibold">₹{user.totalSpent.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
