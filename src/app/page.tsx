import Link from 'next/link';
import { Heart, Car, Home, Shield, Building } from 'lucide-react';
import { insuranceCategories } from '@/data/insurance-categories';
import AdZone from '@/components/AdZone';

const iconMap = {
  Heart,
  Car,
  Home,
  Shield,
  Building,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center mb-2">
            <AdZone
              id="header-banner"
              width={728}
              height={90}
              className="hidden md:block"
              slotId="header-banner-slot"
            />
            <AdZone
              id="header-banner-mobile"
              width={320}
              height={50}
              className="block md:hidden"
              slotId="header-banner-mobile-slot"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">InsureHub.ai</h1>
              <p className="text-blue-100 mt-1">Your Insurance Directory</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#categories" className="hover:text-blue-200">Categories</Link>
              <Link href="#about" className="hover:text-blue-200">About</Link>
              <Link href="#contact" className="hover:text-blue-200">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the Right Insurance Coverage
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare top insurance providers and get expert guidance for health, auto, home, life, and business insurance.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#categories"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Categories
            </Link>
            <Link
              href="#about"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <AdZone
              id="home-content-ad-1"
              width={728}
              height={90}
              className="hidden md:block"
              slotId="home-content-ad-1-slot"
            />
            <AdZone
              id="home-content-ad-1-mobile"
              width={320}
              height={100}
              className="block md:hidden"
              slotId="home-content-ad-1-mobile-slot"
            />
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Insurance Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCategories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <Link
                  key={category.id}
                  href={`/${category.slug}`}
                  className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <AdZone
              id="home-content-ad-2"
              width={300}
              height={250}
              className="mx-auto"
              slotId="home-content-ad-2-slot"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose InsureHub.ai?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Information</h3>
                <p className="text-gray-600">Expert-curated insurance guides and provider comparisons</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600">All major insurance types covered in one place</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Comparison</h3>
                <p className="text-gray-600">Compare providers and find the best coverage for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 lg:hidden z-50">
        <div className="flex justify-center">
          <AdZone
            id="mobile-footer-ad"
            width={320}
            height={50}
            slotId="mobile-footer-slot"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InsureHub.ai</h3>
              <p className="text-gray-400">Your trusted insurance directory and comparison platform.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2">
                {insuranceCategories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/${category.slug}`} className="text-gray-400 hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Insurance Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InsureHub.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}