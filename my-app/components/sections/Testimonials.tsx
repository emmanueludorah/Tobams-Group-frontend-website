'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Aisha Yusuf',
      title: 'Founder, CraftHub NG',
      avatar: '/images/Ellipse 407.png',
      text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!'
    },
    {
      name: 'John Davies',
      title: 'Marketing Manager, E-Commerce Emporium',
      avatar: '/images/Ellipse 407 (1).png',
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!"
    },
    {
      name: 'Chinonso Nwankwo',
      title: 'HR Director, FutureTech Solutions',
      avatar: '/images/Ellipse 407 (2).png',
      text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.'
    },
    {
      name: 'Emeka Okonkwo',
      title: 'CEO, Innovation Labs',
      avatar: '/images/Ellipse 407 (3).png',
      text: 'The training programs offered by Tobams Group transformed our team dynamics. Professional, engaging, and results-driven. Highly recommended for any organization serious about growth.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-8 md:py-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* CTA Box */}
        <div className="rounded-2xl p-8 md:p-12 mb-16 md:mb-20 text-center flex flex-col items-center" style={{ backgroundColor: '#571244' }}>
          <h2 style={{
            color: '#ffffff',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '600',
            fontSize: 'clamp(20px, 5vw, 32px)',
            lineHeight: '140%',
            marginBottom: '16px'
          }}>
            Want to accelerate professional growth and development at your organisation?
          </h2>
          
          <p style={{
            color: '#ffffff',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '500',
            fontSize: 'clamp(16px, 3.5vw, 20px)',
            marginBottom: '24px'
          }}>
            See how we can help.
          </p>

          <button style={{
            backgroundColor: '#ffffff',
            color: '#4a1d5e',
            padding: '12px 32px',
            borderRadius: '6px',
            border: 'none',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'opacity 0.3s'
          }}>
            Book a Consultation
          </button>
        </div>

        {/* Testimonials Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 style={{
            color: '#1a1a1a',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(32px, 6vw, 48px)',
            lineHeight: '130%'
          }}>
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderLeft: '4px solid #E33B6B'
                }}
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p style={{
                      color: '#1a1a1a',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: '600',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      {testimonial.name}
                    </p>
                    <p style={{
                      color: '#666666',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: '400',
                      fontSize: '12px',
                      margin: '0'
                    }}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p style={{
                  color: '#333333',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
            style={{
              backgroundColor: '#F5D8E3',
              color: '#E33B6B',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
            style={{
              backgroundColor: '#F5D8E3',
              color: '#E33B6B',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
