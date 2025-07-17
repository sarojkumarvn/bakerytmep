// Dummy data for the cake ordering platform

export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  images: string[];
  featured: boolean;
  bestseller: boolean;
  inStock: boolean;
  deliveryTime: string;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  userId: string;
  cakeId: string;
  cakeName: string;
  quantity: number;
  customMessage?: string;
  customImage?: string;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
    email: string;
  };
  deliveryDate: string;
  deliveryTime: string;
  totalAmount: number;
  paymentStatus: 'paid' | 'pending';
  orderStatus: 'pending' | 'confirmed' | 'preparing' | 'dispatched' | 'delivered' | 'cancelled';
  createdAt: string;
  couponCode?: string;
  discount?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  role: 'user' | 'admin';
  verifiedBuyer: boolean;
  banned: boolean;
  joinedAt: string;
  totalOrders: number;
  totalSpent: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  cakeId: string;
  rating: number;
  comment: string;
  images?: string[];
  approved: boolean;
  featured: boolean;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'flat';
  value: number;
  minOrder: number;
  expiryDate: string;
  usageLimit: number;
  usedCount: number;
  active: boolean;
  description: string;
}

// Sample data
export const dummyCakes: Cake[] = [
  {
    id: '1',
    name: 'Chocolate Drip Cake',
    description: 'Indulgent chocolate cake with rich ganache drip and fresh berries',
    price: 2499,
    category: 'Birthday',
    tags: ['Chocolate', 'Premium', 'Bestseller'],
    images: ['/lovable-uploads/fea30296-9e18-4176-abc8-3c7dcb9996f8.png'],
    featured: true,
    bestseller: true,
    inStock: true,
    deliveryTime: '2-3 hours',
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Red Velvet Supreme',
    description: 'Classic red velvet with cream cheese frosting and elegant decoration',
    price: 1899,
    category: 'Birthday',
    tags: ['Red Velvet', 'Classic', 'Eggless'],
    images: ['/placeholder.svg'],
    featured: true,
    bestseller: false,
    inStock: true,
    deliveryTime: '1-2 hours',
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Wedding Elegance',
    description: 'Three-tier wedding cake with white fondant and rose decorations',
    price: 8999,
    category: 'Wedding',
    tags: ['Wedding', 'Multi-tier', 'Fondant'],
    images: ['/placeholder.svg'],
    featured: false,
    bestseller: false,
    inStock: true,
    deliveryTime: '24 hours',
    rating: 4.9,
    reviews: 45
  },
  {
    id: '4',
    name: 'Vanilla Bean Delight',
    description: 'Light vanilla sponge with fresh cream and seasonal fruits',
    price: 1599,
    category: 'Birthday',
    tags: ['Vanilla', 'Fresh Fruits', 'Light'],
    images: ['/placeholder.svg'],
    featured: false,
    bestseller: true,
    inStock: true,
    deliveryTime: '1-2 hours',
    rating: 4.5,
    reviews: 156
  },
  {
    id: '5',
    name: 'Custom Designer Cake',
    description: 'Personalized cake with your choice of design and flavors',
    price: 3999,
    category: 'Custom',
    tags: ['Custom', 'Designer', 'Premium'],
    images: ['/placeholder.svg'],
    featured: true,
    bestseller: false,
    inStock: true,
    deliveryTime: '48 hours',
    rating: 4.9,
    reviews: 73
  }
];

export const dummyOrders: Order[] = [
  {
    id: 'ORD001',
    userId: 'U001',
    cakeId: '1',
    cakeName: 'Chocolate Drip Cake',
    quantity: 1,
    customMessage: 'Happy Birthday Sarah!',
    customerInfo: {
      name: 'John Smith',
      phone: '+91 9876543210',
      address: '123 Park Street, Mumbai, 400001',
      email: 'john.smith@email.com'
    },
    deliveryDate: '2024-07-18',
    deliveryTime: '06:00 PM',
    totalAmount: 2499,
    paymentStatus: 'paid',
    orderStatus: 'confirmed',
    createdAt: '2024-07-17T10:30:00Z',
    couponCode: 'SAVE10',
    discount: 249
  },
  {
    id: 'ORD002',
    userId: 'U002',
    cakeId: '2',
    cakeName: 'Red Velvet Supreme',
    quantity: 2,
    customerInfo: {
      name: 'Priya Sharma',
      phone: '+91 9876543211',
      address: '456 MG Road, Bangalore, 560001',
      email: 'priya.sharma@email.com'
    },
    deliveryDate: '2024-07-19',
    deliveryTime: '03:00 PM',
    totalAmount: 3798,
    paymentStatus: 'paid',
    orderStatus: 'preparing',
    createdAt: '2024-07-17T14:15:00Z'
  }
];

export const dummyUsers: User[] = [
  {
    id: 'U001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+91 9876543210',
    address: '123 Park Street, Mumbai, 400001',
    role: 'user',
    verifiedBuyer: true,
    banned: false,
    joinedAt: '2024-06-15T00:00:00Z',
    totalOrders: 5,
    totalSpent: 12495
  },
  {
    id: 'U002',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 9876543211',
    address: '456 MG Road, Bangalore, 560001',
    role: 'user',
    verifiedBuyer: true,
    banned: false,
    joinedAt: '2024-05-20T00:00:00Z',
    totalOrders: 3,
    totalSpent: 7896
  },
  {
    id: 'A001',
    name: 'Admin User',
    email: 'admin@cakestore.com',
    phone: '+91 9876543200',
    role: 'admin',
    verifiedBuyer: false,
    banned: false,
    joinedAt: '2024-01-01T00:00:00Z',
    totalOrders: 0,
    totalSpent: 0
  }
];

export const dummyReviews: Review[] = [
  {
    id: 'R001',
    userId: 'U001',
    userName: 'John Smith',
    cakeId: '1',
    rating: 5,
    comment: 'Absolutely delicious! The chocolate drip was perfect and the cake was so moist.',
    approved: true,
    featured: true,
    createdAt: '2024-07-16T18:30:00Z'
  },
  {
    id: 'R002',
    userId: 'U002',
    userName: 'Priya Sharma',
    cakeId: '2',
    rating: 4,
    comment: 'Great taste and beautiful presentation. Delivery was on time.',
    approved: true,
    featured: false,
    createdAt: '2024-07-15T16:45:00Z'
  }
];

export const dummyCoupons: Coupon[] = [
  {
    id: 'C001',
    code: 'SAVE10',
    type: 'percentage',
    value: 10,
    minOrder: 1000,
    expiryDate: '2024-08-31',
    usageLimit: 100,
    usedCount: 25,
    active: true,
    description: '10% off on orders above ₹1000'
  },
  {
    id: 'C002',
    code: 'FLAT200',
    type: 'flat',
    value: 200,
    minOrder: 2000,
    expiryDate: '2024-07-31',
    usageLimit: 50,
    usedCount: 12,
    active: true,
    description: '₹200 off on orders above ₹2000'
  }
];

// Analytics data
export const analyticsData = {
  totalOrders: {
    daily: 23,
    weekly: 156,
    monthly: 678
  },
  totalRevenue: {
    daily: 57485,
    weekly: 389456,
    monthly: 1678900
  },
  topSellingCakes: dummyCakes.slice(0, 3),
  mostActiveUsers: dummyUsers.slice(0, 2),
  pendingOrders: dummyOrders.filter(order => order.orderStatus === 'pending').length
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Planner",
    content: "The wedding cake was absolutely stunning and tasted even better than it looked! Our guests couldn't stop raving about it. The attention to detail was remarkable and it matched our wedding theme perfectly. Delivery was on time and the staff was extremely professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    cakeImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Birthday Celebrant",
    content: "Best birthday cake I've ever had! The custom design was exactly what I wanted and the flavor was incredible. The red velvet with cream cheese frosting was to die for. They even included a personalized message that made the celebration extra special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    cakeImage: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Corporate Client",
    content: "We order cakes for all our office events here. Consistent quality and beautiful presentation every time. The team always accommodates our last-minute requests and the cakes arrive fresh and delicious. The lemon drizzle cake is our team favorite!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    cakeImage: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Anniversary Celebrant",
    content: "The cake brought tears to my wife's eyes - it was that beautiful. And the taste? Simply divine! The three-tier vanilla cake with fresh berries was exactly what we envisioned for our 25th anniversary. The bakery even included a complimentary anniversary topper.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    cakeImage: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Olivia Smith",
    role: "Event Organizer",
    content: "Reliable, professional, and absolutely delicious. Our go-to bakery for all major events. Their gluten-free options are just as good as the regular cakes, which is rare to find. The chocolate fudge cake is always a crowd-pleaser at our galas.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    cakeImage: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];
