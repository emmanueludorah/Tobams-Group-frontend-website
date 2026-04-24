import Image from 'next/image';

export default function MgmtProgram() {
  const trainingItems = [
    'Leadership Development',
    'Soft Skills Development',
    'Industry Specific Knowledge',
    'Technical Skills Enhancement',
    'Time Management and Productivity',
    'Career Development'
  ];

  const capacityItems = [
    'Tailored Training Programs',
    'Expert-Led Workshops',
    'Personalized Mentorship',
    'Technical Skills Enhancement',
    'Collaborative Learning Environment',
    'Ongoing Support and Resources'
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      {/* Personalised Individual Training Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-20 md:mb-24">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1 flex justify-center w-full md:w-auto">
            <div className="relative w-full md:max-w-md" style={{ 
              aspectRatio: '599/378',
              borderTopLeftRadius: '33px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              borderBottomLeftRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/Personal.png"
                alt="Personalised Individual Training"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Title for Mobile Only - appears first on mobile */}
          <div className="order-1 md:hidden w-full">
            <h2 className="text-[#1a1a1a] text-[clamp(28px,6vw,40px)] leading-[120%] mb-3 sm:mb-4 md:mb-4">
              Personalised Individual Training
            </h2>
          </div>

          {/* Right - Content */}
          <div className="order-3 md:order-2">
            <h2 className="hidden md:block text-[#1a1a1a] text-[clamp(28px,6vw,40px)] leading-[120%] mb-3 sm:mb-4 md:mb-4">
              Personalised Individual Training
            </h2>

            <p className="text-[#666666] text-[clamp(13px,3.5vw,15px)] leading-[1.6] mb-5 sm:mb-6 md:mb-6">
              Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.
            </p>

            {/* Training Types List */}
            <div className="text-[#333333]">
              {trainingItems.map((item, index) => (
                <div key={index} className="mb-3 sm:mb-3 md:mb-3 flex items-center gap-[10px] sm:gap-3">
                  <div className="relative w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[clamp(13px,3.5vw,15px)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capacity Development Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-2 flex justify-center w-full md:w-auto">
            <div className="relative w-full md:max-w-md" style={{ 
              aspectRatio: '601/405',
              borderTopLeftRadius: '40px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              borderBottomLeftRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/CapDev.png"
                alt="Capacity Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Title for Mobile Only - appears first on mobile */}
          <div className="order-1 md:hidden w-full">
            <h2 className="text-[#1a1a1a] text-[clamp(28px,6vw,40px)] leading-[120%] mb-3 sm:mb-4 md:mb-4">
              Capacity Development
            </h2>
          </div>

          {/* Right - Content */} 
          <div className="order-3 md:order-1 w-full">
            <h2 className="hidden md:block text-[#1a1a1a] text-[clamp(28px,6vw,40px)] leading-[120%] mb-3 sm:mb-4 md:mb-4">
              Capacity Development
            </h2>

            <p className="text-[#666666] text-[clamp(13px,3.5vw,15px)] leading-[1.6] mb-5 sm:mb-6 md:mb-6">
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>

            {/* Training Types List */}
            <div className="text-[#333333]">
              {capacityItems.map((item, index) => (
                <div key={index} className="mb-3 sm:mb-3 md:mb-3 flex items-center gap-[10px] sm:gap-3">
                  <div className="relative w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[clamp(13px,3.5vw,15px)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}