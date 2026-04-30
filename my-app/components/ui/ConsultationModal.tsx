'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ConsultationModal({ 
  isOpen, 
  onClose, 
  title = 'Book a Consultation' 
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 2 seconds and close modal
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#571244] to-[#6B1D57] text-white p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={handleClose}
              className="text-2xl font-light hover:opacity-80 transition"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-[#571244] mb-2">Thank you!</h3>
                <p className="text-gray-600">We've received your request. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#151515] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#571244] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#151515] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#571244] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#151515] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#571244] focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#151515] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#571244] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#151515] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#571244] focus:border-transparent resize-none"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#571244] text-white py-3 rounded-md font-semibold hover:bg-[#4a0e35] transition duration-300"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
