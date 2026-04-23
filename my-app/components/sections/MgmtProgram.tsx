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
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#ffffff', fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Personalised Individual Training Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-20 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md" style={{ 
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

          {/* Right - Content */}
          <div>
            <h2 style={{ 
              color: '#1a1a1a', 
              fontFamily: "'Nunito', sans-serif", 
              fontWeight: '700',
              fontSize: 'clamp(28px, 6vw, 40px)',
              lineHeight: '120%',
              marginBottom: '12px sm:16px'
            }}>
              Personalised Individual Training
            </h2>

            <p style={{ 
              color: '#666666', 
              fontSize: 'clamp(13px, 3.5vw, 15px)', 
              lineHeight: '1.6', 
              fontFamily: "'Nunito Sans', sans-serif",
              marginBottom: '20px sm:24px'
            }}>
              Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.
            </p>

            {/* Training Types List */}
            <div style={{ color: '#333333' }}>
              {trainingItems.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px sm:12px', display: 'flex', alignItems: 'center', gap: '10px sm:12px' }}>
                  <div className="relative w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span style={{ fontSize: 'clamp(13px, 3.5vw, 15px)', fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capacity Development Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 style={{ 
              color: '#1a1a1a', 
              fontFamily: "'Nunito', sans-serif", 
              fontWeight: '700',
              fontSize: 'clamp(28px, 6vw, 40px)',
              lineHeight: '120%',
              marginBottom: '12px sm:16px'
            }}>
              Capacity Development
            </h2>

            <p style={{ 
              color: '#666666', 
              fontSize: 'clamp(13px, 3.5vw, 15px)', 
              lineHeight: '1.6', 
              fontFamily: "'Nunito Sans', sans-serif",
              marginBottom: '20px sm:24px'
            }}>
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>

            {/* Training Types List */}
            <div style={{ color: '#333333' }}>
              {capacityItems.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px sm:12px', display: 'flex', alignItems: 'center', gap: '10px sm:12px' }}>
                  <div className="relative w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span style={{ fontSize: 'clamp(13px, 3.5vw, 15px)', fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:order-last">
            <div className="relative w-full max-w-sm md:max-w-md" style={{ 
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
        </div>
      </div>
    </section>
  );
}
