import Image from 'next/image';

export default function LMSIntro() {
  const coursesList = [
    ['Business Analysis', 'Design Thinking'],
    ['Entrepreneurship', 'Career Development'],
    ['Effective Communication', 'Business Model']
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E8DDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <h2 className="block md:hidden text-[24px] text-[#571244] leading-[150%] tracking-[3%] mb-6 sm:mb-6 md:mb-8">
              Learning Management System
            </h2>

          {/* Left - Circular Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-square rounded-full overflow-hidden">
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
            <h2 className="hidden md:block text-[#571244] font-semibold text-[clamp(28px,6vw,40px)] leading-[150%] tracking-[3%] mb-6 sm:mb-6 md:mb-8">
              Learning Management System
            </h2>

            {/* Light Purple Box */}
            <div className="p-6 sm:p-7 md:p-8 rounded-lg mb-6 sm:mb-7 md:mb-8 bg-[rgba(138,94,139,0.15)]">
              <p className="text-[#333333] text-[clamp(13px,3.3vw,15px)] leading-[1.6]">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
              </p>
              
              {/* Courses Section */}
              <div className="mt-8 sm:mt-9 md:mt-10 mb-6 sm:mb-7 md:mb-8">
                <h3 className="text-[#4a1d5e] text-[clamp(13px,3.5vw,16px)] font-semibold mb-3 sm:mb-4 md:mb-4">
                  Some of our courses include:
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {coursesList.map((pair, pairIndex) => (
                    <div key={pairIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {pair.map((course, courseIndex) => (
                        <div key={courseIndex} className="text-[#333333]">
                          <p className="text-[clamp(13px,3.5vw,15px)]">● {course}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <button className="block md:hidden px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-white transition duration-300 hover:opacity-90 inline-flex items-center gap-2 text-sm sm:text-base bg-[#4a1d5e]">
              Learn More
              <span>↗</span>
            </button>
            </div>

            {/* Learn More Button */}
            <button className="hidden md:inline-flex px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-white transition duration-300 hover:opacity-90 items-center gap-2 text-sm sm:text-base bg-[#4a1d5e]">
              Learn More
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
