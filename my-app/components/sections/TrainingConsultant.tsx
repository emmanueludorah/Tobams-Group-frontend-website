import Image from 'next/image';

export default function TrainingConsultant() {
  const programs = [
    {
      title: 'Expert-Led Learning',
      description: 'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.'
    },
    {
      title: 'Interactive Workshops',
      description: 'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.'
    },
    {
      title: 'Comprehensive Curriculum',
      description: 'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.'
    },
    {
      title: 'Global Recognition',
      description: 'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.'
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#F0EBF1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 style={{
            color: '#571244',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 5vw, 42px)',
            lineHeight: '130%',
            marginBottom: '12px'
          }}>
            Training The Consultant
          </h2>

          <p style={{
            color: '#571244',
            fontSize: 'clamp(13px, 3.5vw, 15px)',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            Maximise Your Potential as a Certified Trainer:
          </p>

          <p style={{
            color: '#151515',
            fontSize: 'clamp(13px, 3.5vw, 15px)',
            lineHeight: '1.8',
            fontFamily: "'Nunito Sans', sans-serif",
            maxWidth: '100%'
          }}>
            With the help of our "Training the Consultant" program, a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Large Dark Purple Container with 2x2 Grid */}
        <div className="rounded-2xl p-8 md:p-10 mb-8" style={{ backgroundColor: '#571244' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {programs.map((program, index) => (
              <div key={index}>
                <h3 style={{
                  color: '#ffffff',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(16px, 3.5vw, 19px)',
                  marginBottom: '12px'
                }}>
                  {program.title}
                </h3>

                <p style={{
                  color: '#E8E8E8',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  lineHeight: '1.7',
                  fontFamily: "'Nunito Sans', sans-serif"
                }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button style={{
          backgroundColor: '#571244',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '6px',
          border: 'none',
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: 'clamp(13px, 3.5vw, 15px)',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'opacity 0.3s'
        }}>
          Learn More
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}
