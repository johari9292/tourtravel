import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plan Your Adventure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our travel experts to plan your perfect Skardu experience.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Contact Info */}
          <div className="w-full md:w-2/5 bg-blue-700 text-white p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-blue-200">03148445023, 03137777614</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-200">Iamayaz.marketing@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-blue-200">Skardu, Gilgit-Baltistan, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-3/5 p-8 md:p-10">
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;