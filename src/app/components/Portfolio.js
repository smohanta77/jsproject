import Image from 'next/image';


// Updated image URLs with verified Unsplash IDs
const projects = [
  { 
    id: 1, 
    title: "FinTech Hub", 
    loc: "HSR Layout", 
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
  },
  { 
    id: 2, 
    title: "Creative Studio", 
    loc: "Koramangala", 
    // CHANGED: Replaced the broken link with a new working office image
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" 
  },
  { 
    id: 3, 
    title: "Law Firm Corp", 
    loc: "MG Road", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-burnt-orange">{p.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}