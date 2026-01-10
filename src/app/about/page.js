import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white pt-24 pb-20">
      
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Designing the Future of Work</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Sudhhi Group was born from a simple belief: <span className="text-burnt-orange font-semibold">Your office environment dictates your company's culture.</span>
          <br />Based in the heart of Bengaluru, we combine data-driven space planning with biophilic design.
        </p>
      </div>

      {/* Stats Row */}
      <div className="bg-charcoal text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-burnt-orange mb-2">50+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-burnt-orange mb-2">2 Lakh</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Sq. Ft. Designed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-burnt-orange mb-2">12</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Design Awards</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-burnt-orange mb-2">100%</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">On-Time Delivery</div>
          </div>
        </div>
      </div>

      {/* The Team */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Meet the Architects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 relative overflow-hidden">
               {/* Replace with actual team photo */}
               <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Founder" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Arjun Mehta</h3>
            <p className="text-burnt-orange text-sm font-medium mb-4">Principal Architect</p>
            <p className="text-gray-600 text-sm">15 years of experience designing for Fortune 500 companies. Graduate of CEPT Ahmedabad.</p>
          </div>

           {/* Member 2 */}
           <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 relative overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Designer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Sneha Reddy</h3>
            <p className="text-burnt-orange text-sm font-medium mb-4">Head of Design</p>
            <p className="text-gray-600 text-sm">Specialist in sustainable materials and biophilic office layouts.</p>
          </div>

           {/* Member 3 */}
           <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 relative overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" alt="Manager" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">Vikram Singh</h3>
            <p className="text-burnt-orange text-sm font-medium mb-4">Project Lead</p>
            <p className="text-gray-600 text-sm">Ensures every project is delivered on time and within budget.</p>
          </div>

        </div>
      </div>

    </div>
  );
}