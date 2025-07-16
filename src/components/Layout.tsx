import { ReactNode } from 'react';
import Link from 'next/link';
import { Heart, Shield, Building } from 'lucide-react';
import AdZone from './AdZone';
import { insuranceCategories } from '@/data/insurance-categories';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Top Banner Ad */}
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
              <Link href="/" className="text-3xl font-bold hover:text-blue-200">
                InsureHub.ai
              </Link>
              <p className="text-blue-100 mt-1">Your Insurance Directory</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/#categories" className="hover:text-blue-200">Categories</Link>
              <Link href="/#about" className="hover:text-blue-200">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className={`flex-1 ${showSidebar ? 'lg:w-2/3' : 'w-full'}`}>
            {children}
          </main>

          {/* Sidebar with Ads */}
          {showSidebar && (
            <aside className="lg:w-1/3 space-y-8">
              {/* Sidebar Ad */}
              <div className="sticky top-8">
                <AdZone
                  id="sidebar-ad-1"
                  width={300}
                  height={250}
                  className="mx-auto"
                  slotId="sidebar-ad-1-slot"
                />
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Categories</h3>
                <ul className="space-y-2">
                  {insuranceCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/${category.slug}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second Sidebar Ad */}
              <AdZone
                id="sidebar-ad-2"
                width={300}
                height={250}
                className="mx-auto"
                slotId="sidebar-ad-2-slot"
              />

              {/* Insurance Tips */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compare multiple quotes before choosing a policy</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Review your coverage annually to ensure it meets your needs</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bundle policies for potential discounts</span>
                  </li>
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>

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
      <footer className="bg-gray-900 text-white py-12 mt-16">
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