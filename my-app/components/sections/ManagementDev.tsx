import Image from 'next/image';

export default function ManagementDev() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="rounded-3xl overflow-hidden bg-[#2C0922] p-10">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Title for Mobile Only - appears first on mobile */}
            <div className="order-1 md:hidden w-full">
              <h2 className="text-white text-[clamp(20px,5vw,32px)] leading-[130%] mb-4">
                Management Development Program
              </h2>
            </div>

            {/* Left - Image */}
            <div className="order-2 md:order-1 flex justify-center w-full md:w-full">
              <div className="rounded-[8px] overflow-hidden w-full md:max-w-[580px]" style={{ 
                aspectRatio: '580/600'
              }}>
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/MagDev.jpg"
                    alt="Management Development Program"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-3 md:order-2 w-full">
              <h2 className="hidden md:block text-white text-[32px] leading-[130%] mb-5">
                Management Development Program
              </h2>

              <p className="text-white text-[clamp(13px,3.5vw,15px)] leading-[1.7] mb-3">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>

              <p className="text-[#E8E8E8] text-[clamp(13px,3.5vw,15px)] leading-[1.7] mb-7">
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {[
                  'Enhanced Leadership Skills',
                  'Improved Employee Engagement',
                  'Stronger Organisational Culture',
                  'Sustainable Growth'
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#8F6182] px-5 py-3.5 rounded-lg flex items-center gap-3">
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <Image 
                        src="/images/Vector (1).png"
                        alt="Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-[clamp(13px,3.5vw,15px)] font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
