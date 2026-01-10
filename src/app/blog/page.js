import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/app/data/posts';
import { Calendar } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="min-h-screen bg-off-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Insights & Trends</h1>
          <p className="text-gray-600">Expert advice on commercial design, specifically for the Bengaluru market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-3">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-burnt-orange transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-burnt-orange font-bold text-sm uppercase tracking-wide">Read Article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}