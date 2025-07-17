
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function MyFooter() {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 border-t border-amber-200">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-amber-200 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Sweet Dreams</h3>
            </div>
            <p className="text-amber-800 mb-6 leading-relaxed max-w-md">
              At Sweet Dreams, we craft premium artisanal cakes with the finest ingredients. From classic favorites to
              custom creations, every bite tells a story of passion, quality, and love. Experience the sweetest dreams
              with our handcrafted delights.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-amber-700">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">123 Baker Street, Sweet City, SC 12345</span>
              </div>
              <div className="flex items-center text-amber-700">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">(555) 123-CAKE</span>
              </div>
              <div className="flex items-center text-amber-700">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@sweetdreams.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-900 mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                Home
              </a>
              <a href="/cakes" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                Our Cakes
              </a>
              <a
                href="/custom-orders"
                className="block text-amber-700 hover:text-amber-900 transition-colors text-sm"
              >
                Custom Orders
              </a>
              <a href="/about" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                About Us
              </a>
              <a href="/contact" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-900 mb-4">Our Services</h4>
            <nav className="space-y-2">
              <a
                href="/wedding-cakes"
                className="block text-amber-700 hover:text-amber-900 transition-colors text-sm"
              >
                Wedding Cakes
              </a>
              <a
                href="/birthday-cakes"
                className="block text-amber-700 hover:text-amber-900 transition-colors text-sm"
              >
                Birthday Cakes
              </a>
              <a
                href="/corporate-orders"
                className="block text-amber-700 hover:text-amber-900 transition-colors text-sm"
              >
                Corporate Orders
              </a>
              <a href="/delivery" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                Fast Delivery
              </a>
              <a href="/catering" className="block text-amber-700 hover:text-amber-900 transition-colors text-sm">
                Event Catering
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-amber-900 mb-3">Follow Our Sweet Journey</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/sweetdreams_cakes"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-900 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/sweetdreams"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-900 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/sweetdreams"
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-900 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-amber-900 mb-3">Sweet Updates</h4>
              <p className="text-sm text-amber-700 mb-3">Subscribe for special offers and new cake releases</p>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-amber-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-sm rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 pt-6 border-t border-amber-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-amber-700">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Sweet Dreams. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-amber-900 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-amber-900 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-amber-900 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
