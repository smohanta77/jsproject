import Link from 'next/link';

export default function Navbar() {
  return (
    // CHANGED: Added 'glass' class (from CSS above) and removed heavy borders
    <nav className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo: Simpler, bolder */}
          <Link href="/" className="text-2xl font-black text-charcoal tracking-tighter">
            SUDHHI<span className="text-burnt-orange">.</span> {/* Just a dot accent */}
          </Link>

          {/* Links: Clean and minimal */}
          <div className="hidden md:flex space-x-10 items-center font-medium text-sm tracking-wide">
            <Link href="/#services" className="hover:text-burnt-orange transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-burnt-orange transition-colors">Work</Link> {/* Renamed 'Portfolio' to 'Work' */}
            <Link href="/about" className="hover:text-burnt-orange transition-colors">About</Link> {/* Renamed 'About' to 'Studio' */}
            <Link href="/blog" className="hover:text-burnt-orange transition-colors">BlogPost</Link>
            
            {/* Button: Minimalist Outline instead of heavy fill */}
            <Link href="/contact" className="px-6 py-2.5 border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}