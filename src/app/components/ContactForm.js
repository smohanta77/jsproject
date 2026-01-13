"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState(null); 
  const [errors, setErrors] = useState({}); 

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScJZZLgboxTCMlNgHJ_9xv4e-U2fpSmBPmrR_LfZRXu9NKXow/formResponse";

  const validateForm = (formData) => {
    let newErrors = {};
    let isValid = true;

    // Regex for Names: 
    // ^[A-Z] -> Must start with a Capital Letter
    // [a-zA-Z\s]*$ -> Can only contain letters and spaces (No numbers)
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
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side (Info) */}
        <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Let's Build Your Dream Office</h2>
            <p className="text-gray-300">Ready to transform your workspace? Fill out the form or visit our studio.</p>
            <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <MapPin className="text-burnt-orange shrink-0" /> 
                  <span>#42, 100ft Road, Indiranagar, Bengaluru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-burnt-orange shrink-0" /> 
                  <span>+91 93370 16561</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-burnt-orange shrink-0" /> 
                  <span>hello@sudhhigroup.in</span>
                </div>
            </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white text-charcoal p-8 rounded-2xl shadow-xl">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thanks for contacting Sudhhi Group.<br/>We will call you shortly.</p>
              <button onClick={() => setStatus(null)} className="mt-6 text-burnt-orange font-bold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* FIRST NAME */}
                <div>
                  <label className="block text-sm font-bold mb-2">First Name</label>
                  <input 
                    name="firstName" 
                    type="text" 
                    placeholder="e.g. Rahul"
                    className={`w-full p-3 bg-gray-50 border rounded focus:border-burnt-orange outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                    required 
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName}</p>}
                </div>

                {/* LAST NAME */}
                <div>
                  <label className="block text-sm font-bold mb-2">Last Name</label>
                  <input 
                    name="lastName" 
                    type="text" 
                    placeholder="e.g. Sharma"
                    className={`w-full p-3 bg-gray-50 border rounded focus:border-burnt-orange outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                    required 
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.lastName}</p>}
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  className={`w-full p-3 bg-gray-50 border rounded focus:border-burnt-orange outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200'}`} 
                  required 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-bold mb-2">Phone (10 Digits)</label>
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="e.g. 9988776655"
                  className={`w-full p-3 bg-gray-50 border rounded focus:border-burnt-orange outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`} 
                  required 
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Project Type</label>
                <select name="projectType" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-burnt-orange outline-none transition-colors">
                  <option>Full Office Design</option>
                  <option>Renovation</option>
                  <option>Furniture Sourcing</option>
                  <option>Consultation Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-burnt-orange outline-none transition-colors"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-burnt-orange text-white font-bold py-4 rounded hover:bg-orange-600 transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}