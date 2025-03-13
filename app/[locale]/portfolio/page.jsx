'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Website Lorem Ipsum',
    category: 'Website',
    client: 'Lap.On Indonesia',
    projectDate: '1 March 2025',
    uiProject: 'https://catchegpthdhjaxbd',
    image: '/portfolio1.png',
    description: `We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.`
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Mobile app',
    client: 'Tech Solutions',
    projectDate: '15 March 2025',
    uiProject: 'https://designproject.com',
    image: '/portfolio1.png',
    description: 'Another example project description...'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Website',
    client: 'Shopping Corp',
    projectDate: '20 March 2025',
    uiProject: 'https://ecommerce-project.com',
    image: '/portfolio1.png',
    description: 'A modern e-commerce platform with advanced features...'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'Mobile app',
    client: 'Health First',
    projectDate: '25 March 2025',
    uiProject: 'https://fitness-app.com',
    image: '/portfolio1.png',
    description: 'A comprehensive fitness tracking application...'
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Website',
    client: 'Business Inc',
    projectDate: '30 March 2025',
    uiProject: 'https://corporate-site.com',
    image: '/portfolio1.png',
    description: 'A professional corporate website with modern design...'
  },
  {
    id: 6,
    title: 'Social Media App',
    category: 'Mobile app',
    client: 'Connect Social',
    projectDate: '5 April 2025',
    uiProject: 'https://social-app.com',
    image: '/portfolio1.png',
    description: 'An innovative social media platform...'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Website', 'Mobile app'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              I'm a human-focused Product Designer with 3+ years of experience
            </h1>
            <p className="text-2xl mb-8">--it's lovely to e-meet you.</p>
            <div className="space-y-2 text-gray-300">
              <p>I'm Claire Squire, currently fleshing out an 8-product design system that reduces</p>
              <p>technical debt for the product and marketing teams at Expert Institute.</p>
              <p>Previously, I was a</p>
              <p>Product Designer at the University of Notre Dame while pursuing my BA (2020)</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Portofolio</h2>
        
        <p className="text-center text-gray-600 mb-8">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-[#BBFF4D] text-black'
                  : 'bg-white text-gray-600 border border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link href={`/id/portfolio/${item.id}`} key={item.id} className="flex">
              <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
            &lt;
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                page === 1 ? 'bg-[#BBFF4D]' : 'border border-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
            &gt;
          </button>
        </div>
      </main>
    </>
  );
}