import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  
  // Custom SVG paths for brand icons (since Lucide doesn't include brands)
  const socialIcons = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M2 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com",
      path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4 1.7 9.8.6 11.3-4 1.3-4.6-6-1.5-6-1.5 3 4.6 11 3.3 11 3.3 1 3.9-8.6 7.5-13.4 3.7-5-3.6-1.5-11.2 3.2-13.5C8.8 4 14 5 22 4z"
    }
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter block mb-6">
              SUDHHI<span className="text-burnt-orange">GROUP</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming standard offices into high-performance innovation hubs across Bengaluru.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a 
                  key={icon.name} 
                  href={icon.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-burnt-orange hover:-translate-y-1 transition-all duration-300 group"
                  aria-label={icon.name}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-gray-300 group-hover:text-white"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-burnt-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-burnt-orange transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-burnt-orange transition-colors">Our Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-burnt-orange transition-colors">Trends & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-burnt-orange transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-burnt-orange cursor-pointer transition-colors">Corporate Interior Design</li>
              <li className="hover:text-burnt-orange cursor-pointer transition-colors">Office Renovation</li>
              <li className="hover:text-burnt-orange cursor-pointer transition-colors">Space Planning</li>
              <li className="hover:text-burnt-orange cursor-pointer transition-colors">Furniture Sourcing</li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400 mb-8">
              <div className="flex items-start">
                <MapPin size={18} className="text-burnt-orange mr-3 mt-0.5 shrink-0" />
                <span>#42, 100ft Road, Indiranagar,<br/>Bengaluru - 560038</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-burnt-orange mr-3 shrink-0" />
                <span>+91 93370 16561</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-burnt-orange mr-3 shrink-0" />
                <span>sudhhigroup@gmail.com</span>
              </div>
            </div>

            {/* Newsletter Stub */}
       
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sudhhi Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}