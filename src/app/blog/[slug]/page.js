import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/app/data/posts';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-burnt-orange mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Articles
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">{post.title}</h1>
        
        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-2" />
            {post.date}
          </div>
          <button className="flex items-center text-burnt-orange hover:text-orange-700 text-sm font-medium transition-colors">
            <Share2 size={16} className="mr-2" /> Share
          </button>
        </div>

        {/* Image */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12">
          <Image src={post.img} alt={post.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-headings:text-charcoal prose-a:text-burnt-orange text-gray-700">
          <p>{post.content}</p>
          <p>
            (This is where your detailed SEO content would go. You would discuss specific trends, 
            cost breakdowns, and local regulations in Bengaluru.)
          </p>
        </div>

      </article>
    </div>
  );
}   