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
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#ffffff', fontFamily: "'Nunito Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Heading */}
            <h1 style={{ 
              color: '#1a1a1a', 
              fontFamily: "'Nunito', sans-serif", 
              fontWeight: '600',
              fontSize: 'clamp(32px, 6vw, 48px)',
              lineHeight: '150%',
              marginBottom: '16px sm:20px md:24px'
            }}>
              Corporate Trainings
            </h1>

            {/* Description */}
            <p style={{ 
              color: '#666666', 
              fontSize: 'clamp(14px, 3.5vw, 16px)', 
              lineHeight: '1.6', 
              fontFamily: "'Nunito Sans', sans-serif",
              marginBottom: '24px sm:28px md:32px'
            }}>
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
            </p>

            {/* Training Types List */}
            <div style={{ color: '#333333' }}>
              {trainingTypes.map((type, index) => (
                <div key={index} style={{ marginBottom: '12px sm:14px md:16px', display: 'flex', alignItems: 'center', gap: '10px sm:12px' }}>
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                    <Image 
                      src="/images/Vector.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontFamily: "'Nunito Sans', sans-serif" }}>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end">
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
<div 
  style={{
    borderBottomLeftRadius: '12px',
    opacity: 1,
    transform: 'rotate(0deg)',
    position: 'relative' // Required for fill images
  }}
>
  <Image 
    src="/images/Corp_T.jpg"
    alt="Corporate Training"
    fill
    className="object-cover"
    priority
  />
</div>}
