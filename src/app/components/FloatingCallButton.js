import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+919337016561"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 shadow-2xl rounded-full hover:-translate-y-1 transition-transform duration-300 group"
      aria-label="Call Us"
    >
      {/* Icon Circle */}
      <div className="bg-burnt-orange p-2 rounded-full text-white group-hover:bg-charcoal transition-colors">
        <Phone size={20} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-tight">
          Need Help?
        </span>
        <span className="text-charcoal font-bold text-sm leading-tight group-hover:text-burnt-orange transition-colors">
          Call: +91 93370 16561
        </span>
      </div>
    </a>
  );
}