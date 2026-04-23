import Image from 'next/image';

export default function LMSIntro() {
  const coursesList = [
    ['Business Analysis', 'Design Thinking'],
    ['Entrepreneurship', 'Career Development'],
    ['Effective Communication', 'Business Model']
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#E8DDE5', fontFamily: "'Nunito Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Circular Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs md:max-w-sm" style={{ 
              aspectRatio: '1',
              borderRadius: '50%',
              overflow: 'hidden',
              opacity: 1
            }}>
              <Image 
                src="/images/lms.jpg"
                alt="TG Academy Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Heading */}
            <h2 style={{ 
              color: '#571244', 
              fontFamily: "'Nunito', sans-serif", 
              fontWeight: '600',
              fontSize: 'clamp(28px, 6vw, 40px)',
              lineHeight: '150%',
              letterSpacing: '3%',
              marginBottom: '20px sm:24px md:32px'
            }}>
              Learning Management System
            </h2>

            {/* Light Purple Box */}
            <div className="p-6 sm:p-7 md:p-8 rounded-lg mb-6 sm:mb-7 md:mb-8" style={{ backgroundColor: 'rgba(138, 94, 139, 0.15)' }}>
              <p style={{ color: '#333333', fontSize: 'clamp(13px, 3.5vw, 16px)', lineHeight: '1.6', fontFamily: "'Nunito Sans', sans-serif" }}>
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
              </p>
              
              {/* Courses Section */}
              <div className="mt-8 sm:mt-9 md:mt-10 mb-6 sm:mb-7 md:mb-8">
                <h3 style={{ 
                  color: '#4a1d5e', 
                  fontSize: 'clamp(13px, 3.5vw, 16px)', 
                  fontWeight: '600', 
                  marginBottom: '12px sm:14px md:16px', 
                  fontFamily: "'Nunito Sans', sans-serif" 
                }}>
                  Some of our courses include:
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {coursesList.map((pair, pairIndex) => (
                    <div key={pairIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {pair.map((course, courseIndex) => (
                        <div key={courseIndex} style={{ color: '#333333' }}>
                          <p style={{ fontSize: 'clamp(13px, 3.5vw, 15px)', fontFamily: "'Nunito Sans', sans-serif" }}>● {course}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <button className="px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-white font-semibold transition duration-300 hover:opacity-90 inline-flex items-center gap-2 text-sm sm:text-base" style={{ backgroundColor: '#4a1d5e', fontFamily: "'Nunito Sans', sans-serif" }}>
              Learn More
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
