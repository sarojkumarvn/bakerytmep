
import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, Clock, CheckCircle, XCircle, Search, Eye } from 'lucide-react';

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      items: [
        { name: 'Chocolate Birthday Cake', quantity: 1, price: 1299 }
      ],
      total: 1398,
      status: 'delivered',
      deliveryDate: '2024-01-16',
      address: '123 Main Street, City',
      paymentMethod: 'Online'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      items: [
        { name: 'Red Velvet Heart Cake', quantity: 1, price: 1599 },
        { name: 'Vanilla Cupcakes (6pcs)', quantity: 1, price: 599 }
      ],
      total: 2297,
      status: 'preparing',
      deliveryDate: '2024-01-22',
      address: '456 Oak Avenue, Town',
      paymentMethod: 'Cash on Delivery'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-18',
      items: [
        { name: 'Custom Wedding Cake', quantity: 1, price: 4999 }
      ],
      total: 4999,
      status: 'confirmed',
      deliveryDate: '2024-01-25',
      address: '789 Pine Road, Village',
      paymentMethod: 'Online'
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-10',
      items: [
        { name: 'Strawberry Cheesecake', quantity: 2, price: 899 }
      ],
      total: 1897,
      status: 'cancelled',
      deliveryDate: '2024-01-12',
      address: '321 Elm Street, City',
      paymentMethod: 'Online'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'dispatched': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      case 'preparing': return <Clock className="h-4 w-4" />;
      case 'confirmed': return <Package className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      case 'dispatched': return <Package className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary">My Orders</h1>
            <Badge variant="outline" className="px-3 py-1">
              {orders.length} Total Orders
            </Badge>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex gap-4 flex-wrap">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search orders by ID or cake name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="preparing">Preparing</SelectItem>
                    <SelectItem value="dispatched">Dispatched</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your search or filter criteria'
                      : "You haven't placed any orders yet"
                    }
                  </p>
                  <Button onClick={() => window.location.href = '/cakes'}>
                    Browse Cakes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Order {order.id}
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          Placed on {new Date(order.date).toLocaleDateString()} • 
                          Delivery: {new Date(order.deliveryDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ₹{order.total.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {order.paymentMethod}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Items */}
                      <div>
                        <h4 className="font-medium mb-2">Items Ordered:</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                              <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-muted-foreground ml-2">× {item.quantity}</span>
                              </div>
                              <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Address */}
                      <div>
                        <h4 className="font-medium mb-1">Delivery Address:</h4>
                        <p className="text-muted-foreground">{order.address}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="outline" size="sm">
                            Rate & Review
                          </Button>
                        )}
                        {order.status === 'confirmed' && (
                          <Button variant="outline" size="sm" className="text-destructive">
                            Cancel Order
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
