import Image from 'next/image';

export default function ManagementDev() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#2C0922', padding: '40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <div style={{ 
                width: '580px',
                height: '600px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '8px',
                overflow: 'hidden'
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
            <div>
              <h2 style={{ 
                color: '#FFFFFF', 
                fontFamily: "'Nunito', sans-serif", 
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '130%',
                marginBottom: '20px'
              }}>
                Management Development Program
              </h2>

              <p style={{ 
                color: '#FFFFFF', 
                fontSize: '15px', 
                lineHeight: '1.7', 
                fontFamily: "'Nunito Sans', sans-serif",
                marginBottom: '14px'
              }}>
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>

              <p style={{ 
                color: '#E8E8E8', 
                fontSize: '15px', 
                lineHeight: '1.7', 
                fontFamily: "'Nunito Sans', sans-serif",
                marginBottom: '28px'
              }}>
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
                  <div key={index} style={{ 
                    backgroundColor: '#8F6182', 
                    padding: '14px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <Image 
                        src="/images/Vector (1).png"
                        alt="Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span style={{ 
                      fontSize: '15px', 
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: '#FFFFFF',
                      fontWeight: '500'
                    }}>
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
