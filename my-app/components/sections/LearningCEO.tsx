import Image from 'next/image';

export default function LearningCEO() {
  const features = [
    'Strategic Career Guidance',
    'Leadership Development',
    'CV Development',
    'Sustainability Leadership',
    'Communication Skills',
    'Business Model'
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="rounded-3xl p-8 md:p-12 bg-[#F5D8E3]">
          {/* Header Section */}
          <div className="mb-8 md:mb-10">
            <p className="text-[#1671D9] text-[clamp(14px,3vw,16px)] italic font-medium mb-1">
              Learning With Our CEO:
            </p>

            <h2 className="text-[#571244] text-[clamp(28px,6vw,48px)] leading-[130%] italic mb-4">
              Transformation Hub With Jite Newton
            </h2>

            <p className="text-[#151515] text-[clamp(13px,3.5vw,15px)] leading-[1.8]">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden" style={{
                aspectRatio: '450/340'
              }}>
                <Image
                  src="/images/Transhub.jpg"
                  alt="Transformation Hub With Jite Newton"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Features Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="rounded-lg p-4 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="relative w-5 h-5 flex-shrink-0">
                        <Image 
                          src="/images/bolt.png"
                          alt="Bolt icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#333333] text-[clamp(13px,3.5vw,15px)] font-medium">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="bg-[#571244] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 text-[clamp(13px,3.5vw,15px)] hover:opacity-80 transition">
                Learn More
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
