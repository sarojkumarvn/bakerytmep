import { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import CakeCard from '@/components/CakeCard';
import { dummyCakes } from '@/data/dummy';

const CakesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Birthday', 'Wedding', 'Custom'];
  const tags = ['All', 'Chocolate', 'Vanilla', 'Red Velvet', 'Eggless', 'Premium'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹1000', value: '0-1000' },
    { label: '₹1000 - ₹3000', value: '1000-3000' },
    { label: '₹3000 - ₹5000', value: '3000-5000' },
    { label: 'Above ₹5000', value: '5000+' }
  ];

  const filteredCakes = dummyCakes.filter(cake => {
    const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cake.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cake.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesTag = selectedTag === 'all' || cake.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
      if (max) {
        matchesPrice = cake.price >= min && cake.price <= max;
      } else {
        matchesPrice = cake.price >= min;
      }
    }

    return matchesSearch && matchesCategory && matchesTag && matchesPrice;
  });

  const sortedCakes = [...filteredCakes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.name.localeCompare(a.name);
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-display text-4xl font-bold text-primary mb-4">Our Cakes</h1>
          <p className="text-subtitle max-w-2xl">
            Discover our complete collection of handcrafted cakes, from classic favorites to innovative creations
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="card-elegant mb-8">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cakes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Filter Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Tag" />
                  </SelectTrigger>
                  <SelectContent>
                    {tags.map(tag => (
                      <SelectItem key={tag} value={tag.toLowerCase()}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center">
                    Search: {searchTerm}
                    <button 
                      className="ml-1 text-xs"
                      onClick={() => setSearchTerm('')}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="flex items-center">
                    Category: {selectedCategory}
                    <button 
                      className="ml-1 text-xs"
                      onClick={() => setSelectedCategory('all')}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedTag !== 'all' && (
                  <Badge variant="secondary" className="flex items-center">
                    Tag: {selectedTag}
                    <button 
                      className="ml-1 text-xs"
                      onClick={() => setSelectedTag('all')}
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-muted-foreground">
              Showing {sortedCakes.length} of {dummyCakes.length} cakes
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cakes Grid/List */}
        {sortedCakes.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
          }>
            {sortedCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        ) : (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <div className="space-y-4">
                <div className="text-6xl">🍰</div>
                <h3 className="text-display text-xl font-semibold">No cakes found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse our featured collection
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTag('all');
                    setPriceRange('all');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Featured Categories */}
        <section className="mt-16">
          <h2 className="text-display text-3xl font-bold text-primary mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => (
              <Card key={category} className="card-product cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="text-4xl">
                      {category === 'Birthday' && '🎂'}
                      {category === 'Wedding' && '💒'}
                      {category === 'Custom' && '🎨'}
                    </div>
                    <h3 className="text-display text-xl font-semibold">{category} Cakes</h3>
                    <p className="text-muted-foreground">
                      {category === 'Birthday' && 'Celebrate special moments with our birthday collection'}
                      {category === 'Wedding' && 'Elegant cakes for your special day'}
                      {category === 'Custom' && 'Personalized cakes made just for you'}
                    </p>
                    <Button 
                      variant="outline" 
                      className="btn-elegant"
                      onClick={() => setSelectedCategory(category.toLowerCase())}
                    >
                      Browse {category} Cakes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CakesPage;