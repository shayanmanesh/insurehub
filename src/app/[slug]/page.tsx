import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Heart, Car, Home, Shield, Building, ChevronDown } from 'lucide-react';
import Layout from '@/components/Layout';
import AdZone from '@/components/AdZone';
import { insuranceCategories } from '@/data/insurance-categories';
import { generateSEOTitle, generateSEODescription } from '@/lib/utils';

const iconMap = {
  Heart,
  Car,
  Home,
  Shield,
  Building,
};

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = insuranceCategories.find(cat => cat.slug === slug);
  
  if (!category) {
    return {};
  }

  return {
    title: generateSEOTitle(category.name),
    description: generateSEODescription(category.name, category.description),
    keywords: [
      category.name.toLowerCase(),
      'insurance',
      'coverage',
      'providers',
      'quotes',
      'compare',
      ...category.providers.map(p => p.toLowerCase())
    ],
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = insuranceCategories.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <IconComponent className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Quotes
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Compare Providers
            </button>
          </div>
        </div>

        {/* In-Content Ad */}
        <div className="flex justify-center mb-8">
          <AdZone
            id="content-ad-1"
            width={728}
            height={90}
            className="hidden md:block"
            slotId="content-ad-1-slot"
          />
          <AdZone
            id="content-ad-1-mobile"
            width={320}
            height={100}
            className="block md:hidden"
            slotId="content-ad-1-mobile-slot"
          />
        </div>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why You Need {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit}</h3>
                  <p className="text-gray-600 text-sm">
                    Essential protection that helps secure your financial future and peace of mind.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Content Ad */}
        <div className="flex justify-center mb-8">
          <AdZone
            id="content-ad-2"
            width={300}
            height={250}
            className="mx-auto"
            slotId="content-ad-2-slot"
          />
        </div>

        {/* Top Providers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top {category.name} Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.providers.map((provider, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{provider}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                    <span className="text-gray-500 text-sm ml-1">4.2</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Trusted provider offering comprehensive {category.name.toLowerCase()} coverage with competitive rates.
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Get Quote
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Content Ad */}
        <div className="flex justify-center mb-8">
          <AdZone
            id="content-ad-3"
            width={728}
            height={90}
            className="hidden md:block"
            slotId="content-ad-3-slot"
          />
          <AdZone
            id="content-ad-3-mobile"
            width={320}
            height={100}
            className="block md:hidden"
            slotId="content-ad-3-mobile-slot"
          />
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {category.commonQuestions.map((faq, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get {category.name}?</h2>
          <p className="text-blue-100 mb-6">
            Compare quotes from top providers and find the perfect coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quotes
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Speak with Agent
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return insuranceCategories.map((category) => ({
    slug: category.slug,
  }));
}