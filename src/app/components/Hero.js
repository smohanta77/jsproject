import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-off-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Huge Text */}
        <div className="z-10 relative">
          <div className="inline-block px-3 py-1 mb-6 border border-gray-200 rounded-full text-xs font-bold tracking-widest uppercase text-gray-500">
            Bengaluru • Since 2022
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8 leading-[0.9]">
            Work <br/>
            <span className="text-burnt-orange">Better.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-md leading-relaxed font-light">
            We design office interiors that merge data-driven efficiency with human-centric aesthetics.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-black transition-all">
              See Our Work
            </Link>
            <Link href="/contact" className="px-8 py-4 text-charcoal hover:text-burnt-orange transition-colors flex items-center gap-2">
               Book Consultation <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right: Abstract/Modern Image Composition */}
        <div className="relative h-[600px] w-full hidden lg:block">
           {/* Main Image */}
           <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-2xl">
             <Image 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
               alt="Modern Office" 
               fill 
               className="object-cover"
               priority
             />
           </div>
           {/* Floating Accent Image (Parallax feel) */}
           <div className="absolute bottom-10 left-0 w-[50%] h-[40%] rounded-xl overflow-hidden shadow-xl border-4 border-white">
             <Image 
               src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" 
               alt="Detail" 
               fill 
               className="object-cover"
             />
           </div>
        </div>

      </div>
      
      {/* Background Decor Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-30 -z-0"></div>
    </section>
  );
}