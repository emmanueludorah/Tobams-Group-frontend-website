import Image from 'next/image';

export default function Consultant() {
  const trainingTypes = [
    'Leadership Training',
    'Strategic Planning and Implementation',
    'Project Management',
    'Sustainability Training',
    'Customised Training'
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Heading */}
            <h1 className="text-[#1a1a1a] text-[clamp(32px,6vw,48px)] leading-[150%] mb-4 sm:mb-5 md:mb-6">
              Corporate Trainings
            </h1>

            {/* Description */}
            <p className="text-[#666666] text-[clamp(14px,3.5vw,16px)] leading-[1.6] mb-6 sm:mb-7 md:mb-8">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
            </p>

            {/* Training Types List */}
            <div className="text-[#333333]">
              {trainingTypes.map((type, index) => (
                <div key={index} className="mb-3 sm:mb-4 md:mb-4 flex items-center gap-[10px] sm:gap-3">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[clamp(14px,3.5vw,16px)]">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end md:order-last">
            <div className="relative w-full max-w-sm md:max-w-none" style={{ 
              aspectRatio: '602/346',
              borderTopLeftRadius: '56px',
              borderTopRightRadius: '24px',
              borderBottomRightRadius: '23px',
              borderBottomLeftRadius: '12px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/Corp_T.jpg"
                alt="Corporate Trainings"
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
