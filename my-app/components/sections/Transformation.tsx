import Image from 'next/image';

export default function Transformation() {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#0f0f0f', minHeight: '400px sm:500px md:600px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/body.jpg"
          alt="Training and Development"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center">
        {/* Badge */}
        <div className="inline-block mb-4 sm:mb-5 md:mb-6">
          <div className="px-4 sm:px-5 md:px-6 py-2 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <span style={{ color: '#ffffff', fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(12px, 2.5vw, 14px)', fontWeight: '600', letterSpacing: '1px' }}>WHAT WE DO</span>
          </div>
        </div>

        {/* Heading */}
        <h2 style={{ 
          color: '#ffffff', 
          fontFamily: "'Nunito', sans-serif", 
          fontSize: 'clamp(32px, 7vw, 56px)', 
          fontWeight: '700', 
          fontStyle: 'normal', 
          lineHeight: '130%', 
          marginBottom: '16px sm:20px md:24px' 
        }}>
          Training and Development
        </h2>

        {/* Description */}
        <p style={{ 
          color: '#e0e0e0', 
          fontFamily: "'Nunito Sans', sans-serif", 
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          lineHeight: '1.6', 
          maxWidth: '700px',
          marginBottom: '24px sm:28px md:32px'
        }}>
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <button className="px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-white font-semibold transition duration-300 hover:opacity-90 text-sm sm:text-base" style={{ backgroundColor: '#6B1D57', fontFamily: "'Nunito Sans', sans-serif" }}>
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
