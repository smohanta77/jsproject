import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
import { ArrowLeft, Clock, MapPin, Ruler } from 'lucide-react';

// In Next.js 16, params is a Promise
export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-off-white pt-24 pb-20">
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link href="/portfolio" className="inline-flex items-center text-gray-500 hover:text-burnt-orange mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{project.title}</h1>
        <p className="text-xl text-gray-500 mb-8">{project.category} Workspace in {project.loc}</p>

        {/* Hero Image */}
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg mb-12">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4 border-y border-gray-200 py-8 mb-12">
          <div className="flex items-center justify-center flex-col md:flex-row text-center">
            <MapPin className="text-burnt-orange mb-2 md:mb-0 md:mr-3" />
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Location</div>
              <div className="font-bold text-charcoal">{project.loc}</div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row text-center border-l border-gray-200">
            <Ruler className="text-burnt-orange mb-2 md:mb-0 md:mr-3" />
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Area</div>
              <div className="font-bold text-charcoal">{project.area}</div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row text-center border-l border-gray-200">
            <Clock className="text-burnt-orange mb-2 md:mb-0 md:mr-3" />
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Duration</div>
              <div className="font-bold text-charcoal">{project.duration}</div>
            </div>
          </div>
        </div>

        {/* Case Study Text */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">The Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-charcoal rounded-xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Inspired by this project?</h3>
          <p className="mb-6 text-gray-300">Let&apos;s discuss how we can transform your space.</p>
          <Link href="/contact" className="inline-block bg-burnt-orange px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors">
            Get a Quote
          </Link>
        </div>

      </div>
    </div>
  );
}