import Image from 'next/image';

export default function Transformation() {
  return (
    <section className="px-8 md:px-0 relative w-full py-16 sm:py-24 md:py-32 overflow-hidden bg-[#0f0f0f] min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/body.jpg"
          alt="Learning and Development"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
      </div>

      {/* Centered Content */}
      <div className="gap-8 relative z-10 max-w-4xl md:max-w-full mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center text-center">
        {/* Badge */}
        <div className="inline-block mb-4 sm:mb-5 md:mb-6">
          <div className="px-4 sm:px-5 md:px-6 py-2 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]">
            <span className="text-white text-[clamp(12px,2.5vw,14px)] tracking-[1px]">WHAT WE DO</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[24px] md:text-[42px] text-white font-bold leading-[130%] mb-4 sm:mb-5 md:mb-6">
          <span className="block md:hidden">Learning and Development</span>
          <span className="hidden md:block">Training and Development</span>
        </h2>

        {/* Description */}
        <p className="md:max-w-[58%] text-[#e0e0e0] text-[clamp(14px,3.5vw,18px)] leading-[1.6] mb-6 sm:mb-7 md:mb-8">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <button className="px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-white transition duration-300 hover:opacity-90 text-sm sm:text-base bg-[#6B1D57]">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}

