"use client";

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  
  // Simple handler to show interaction (In a real app, send this to a backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-off-white pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Ready to transform your workspace? Visit our studio in Indiranagar or fill out the form below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Contact Info & Map */}
        <div className="space-y-8">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Phone className="text-burnt-orange mb-3" size={28} />
              <h3 className="font-bold text-charcoal mb-1">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Mail className="text-burnt-orange mb-3" size={28} />
              <h3 className="font-bold text-charcoal mb-1">Email</h3>
              <p className="text-gray-600">sudhhigroup@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
              <div className="flex items-start">
                <MapPin className="text-burnt-orange mr-4 shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Office Address</h3>
                  <p className="text-gray-600">#42, 100ft Road, Indiranagar, Bengaluru - 560038</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="h-64 w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.6392093750764!3d12.971762987343516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a9d9c6f6e3%3A0x6b4b4b4b4b4b4b4b!2sIndiranagar%20100ft%20Road!5e0!3m2!1sen!2sin!4v1708500000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
              <select className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors">
                <option>Full Office Design</option>
                <option>Renovation</option>
                <option>Furniture Sourcing</option>
                <option>Consultation Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 bg-off-white border border-gray-200 rounded-lg focus:outline-none focus:border-burnt-orange transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full bg-burnt-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-all shadow-md">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}