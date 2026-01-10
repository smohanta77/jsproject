export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Dream Office</h2>
          <p className="text-gray-300 mb-8">Ready to transform your workspace? Fill out the form or visit our studio.</p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-burnt-orange font-bold mr-4">📍</span>
              <p>#42, 12th Main, Indiranagar, Bengaluru - 560038</p>
            </div>
            <div className="flex items-center">
              <span className="text-burnt-orange font-bold mr-4">📞</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center">
              <span className="text-burnt-orange font-bold mr-4">✉️</span>
              <p>sudhhigroup@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="lg:w-1/2 bg-white text-charcoal p-8 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded focus:outline-none focus:border-burnt-orange" required />
            <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded focus:outline-none focus:border-burnt-orange" required />
          </div>
          <div className="mb-6">
            <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-burnt-orange" />
          </div>
          <div className="mb-6">
            <textarea rows="4" placeholder="Tell us about your project..." className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-burnt-orange"></textarea>
          </div>
          <button type="button" className="w-full bg-burnt-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-all">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}