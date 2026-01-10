"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Expanded Project Data with Categories
const allProjects = [
  { 
    id: 1, 
    title: "FinTech Hub", 
    category: "Tech", 
    loc: "HSR Layout", 
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
  },
  { 
    id: 2, 
    title: "Creative Studio", 
    category: "Creative", 
    loc: "Koramangala", 
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" 
  },
  { 
    id: 3, 
    title: "Law Firm Corp", 
    category: "Executive", 
    loc: "MG Road", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
  },
  { 
    id: 4, 
    title: "Eco Coworking", 
    category: "Tech", 
    loc: "Whitefield", 
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
  },
  { 
    id: 5, 
    title: "Zen Breakout Zone", 
    category: "Creative", 
    loc: "Indiranagar", 
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" 
  },
  { 
    id: 6, 
    title: "CEO Suite", 
    category: "Executive", 
    loc: "UB City", 
    img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80" 
  },
];

const categories = ["All", "Tech", "Creative", "Executive"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-off-white pt-24 pb-20"> {/* Added pt-24 to push content below fixed Navbar */}
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of transformed workspaces across Bengaluru. 
          From high-energy startup hubs to sophisticated corporate headquarters.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
              activeFilter === cat
                ? "bg-charcoal text-white border-charcoal"
                : "bg-white text-gray-600 border-gray-300 hover:border-burnt-orange hover:text-burnt-orange"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-charcoal uppercase tracking-wider">
                  {p.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-1">{p.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="text-burnt-orange mr-2">📍</span>
                  {p.loc}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer for this page */}
      <div className="text-center mt-20">
        <p className="text-gray-600 mb-6">Like what you see?</p>
        <Link href="/#contact" className="inline-block bg-burnt-orange text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-bold">
          Start Your Project
        </Link>
      </div>

    </div>
  );
}