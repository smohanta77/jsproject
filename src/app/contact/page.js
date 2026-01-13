"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
  const [errors, setErrors] = useState({});

  // ✅ CORRECT URL (Ends in /formResponse)
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScJZZLgboxTCMlNgHJ_9xv4e-U2fpSmBPmrR_LfZRXu9NKXow/formResponse";

  const validateForm = (formData) => {
    let newErrors = {};
    let isValid = true;

    // Regex: First Letter Capital, No numbers
    const nameRegex = /^[A-Z][a-zA-Z\s]*$/;

    // 1. First Name Validation
    const firstName = formData.get('firstName');
    if (!firstName || !nameRegex.test(firstName)) {
      newErrors.firstName = "Must start with Capital letter & have no numbers";
      isValid = false;
    }

    // 2. Last Name Validation
    const lastName = formData.get('lastName');
    if (!lastName || !nameRegex.test(lastName)) {
      newErrors.lastName = "Must start with Capital letter & have no numbers";
      isValid = false;
    }

    // 3. Phone Validation (10 digits)
    const phone = formData.get('phone');
    if (!phone || !/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    // 4. Email Validation
    const email = formData.get('email');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Run Validation
    if (!validateForm(formData)) {
      return;
    }

    setStatus('submitting');
    
    const data = new URLSearchParams();
    // YOUR ENTRY IDs
    data.append("entry.1211829476", formData.get("firstName"));
    data.append("entry.1350038236", formData.get("lastName"));
    data.append("entry.1811446448", formData.get("email"));
    data.append("entry.1404014767", formData.get("phone"));
    data.append("entry.999447275", formData.get("projectType"));
    data.append("entry.623381691", formData.get("message"));

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setStatus('success');
      e.target.reset();
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-20">
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl font-bold text-charcoal mb-4">Get in Touch</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Whether you have a bare shell or need a renovation, we are here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Info Cards */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* VISIT US CARD (With Google Maps Link) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
            <MapPin className="text-burnt-orange mb-4" size={32} />
            <h3 className="text-xl font-bold text-charcoal mb-2">Visit Us</h3>
            <a 
              href="https://www.google.com/maps/search/..." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-burnt-orange transition-colors block leading-relaxed"
            >
              #42, 100ft Road,<br/>
              Indiranagar, Bengaluru - 560038
            </a>
          </div>

          {/* CALL US CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Phone className="text-burnt-orange mb-4" size={32} />
            <h3 className="text-xl font-bold text-charcoal mb-2">Call Us</h3>
            <p className="text-gray-500 mb-2">+91 93370 16561</p>
            <p className="text-gray-400 text-sm">Mon-Sat, 9am to 7pm</p>
          </div>

          {/* EMAIL US CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Mail className="text-burnt-orange mb-4" size={32} />
            <h3 className="text-xl font-bold text-charcoal mb-2">Email Us</h3>
            <p className="text-gray-500">hello@sudhhigroup.in</p>
          </div>

        </div>

        {/* Right Column: The Form (Using your working logic) */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-4xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-4">Message Received!</h3>
              <p className="text-gray-500 max-w-md">
                Thank you for reaching out. Our design team will review your requirements and call you within 24 hours.
              </p>
              <button 
                onClick={() => setStatus(null)} 
                className="mt-8 text-burnt-orange font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-charcoal mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input 
                      name="firstName" type="text" placeholder="e.g. Rahul"
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:border-burnt-orange outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                      required 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input 
                      name="lastName" type="text" placeholder="e.g. Sharma"
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:border-burnt-orange outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                      required 
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      name="email" type="email" placeholder="rahul@gmail.com"
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:border-burnt-orange outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      required 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      name="phone" type="tel" placeholder="9988776655"
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:border-burnt-orange outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                      required 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interested In</label>
                  <select name="projectType" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-burnt-orange outline-none cursor-pointer">
                    <option>Full Office Design</option>
                    <option>Office Renovation</option>
                    <option>Furniture & Decor</option>
                    <option>Just Consulting</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tell us about your project</label>
                  <textarea 
                    name="message" rows="5" placeholder="Approx area size, location, requirements..."
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-burnt-orange outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-burnt-orange text-white text-lg font-bold py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending Request...' : 'Submit Request'}
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </main>
  );
}