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
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* CTA Box */}
        <div className="rounded-2xl p-8 md:p-12 mb-16 md:mb-20 text-center flex flex-col items-center bg-[#571244]">
          <h2 className="text-white text-[clamp(20px,5vw,32px)] leading-[140%] mb-4">
            Want to accelerate professional growth and development at your organisation?
          </h2>
          
          <p className="text-white text-[clamp(16px,3.5vw,20px)] mb-6">
            See how we can help.
          </p>

          <button className="bg-white text-[#4a1d5e] px-8 py-3 rounded-md text-[clamp(14px,3.5vw,16px)] font-semibold hover:opacity-90 transition">
            Book a Consultation
          </button>
        </div>

        {/* Testimonials Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#1a1a1a] font-bold text-[clamp(32px,6vw,48px)] leading-[130%]">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-8">
          {/* Mobile - Single Testimonial Carousel */}
          <div className="md:hidden mb-8">
            <div className="flex justify-center">
              <div 
                className="p-6 rounded-lg bg-white border border-[#e0e0e0] border-l-4 border-l-[#E33B6B] w-full max-w-sm"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-semibold text-[14px] m-0">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-[#666666] font-normal text-[12px] m-0">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[#333333] text-[14px] leading-[1.6] m-0">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop - Grid Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-white border border-[#e0e0e0] border-l-4 border-l-[#E33B6B]"
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
                      <p className="text-[#1a1a1a] font-semibold text-[14px] m-0">
                        {testimonial.name}
                      </p>
                      <p className="text-[#666666] font-normal text-[12px] m-0">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#333333] text-[14px] leading-[1.6] m-0">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80 bg-[#F5D8E3] text-[#E33B6B] border-none cursor-pointer text-[18px] font-bold"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80 bg-[#F5D8E3] text-[#E33B6B] border-none cursor-pointer text-[18px] font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
