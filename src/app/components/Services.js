import { LayoutGrid, Paintbrush, Armchair, HardHat } from 'lucide-react';

const services = [
  {
    title: "Space Planning",
    desc: "Strategic layouts optimizing flow, lighting, and employee collaboration.",
    icon: <LayoutGrid size={40} className="text-burnt-orange" />
  },
  {
    title: "Furniture Selection",
    desc: "Ergonomic workstations and modern breakout furniture sourcing.",
    icon: <Armchair size={40} className="text-burnt-orange" />
  },
  {
    title: "Color Consulting",
    desc: "Psychology-backed color schemes to boost focus and brand identity.",
    icon: <Paintbrush size={40} className="text-burnt-orange" />
  },
  {
    title: "Project Management",
    desc: "End-to-end execution from concept to handover within timelines.",
    icon: <HardHat size={40} className="text-burnt-orange" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive design solutions for startups and enterprises across Indiranagar, Whitefield, and ORR.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow bg-off-white group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}