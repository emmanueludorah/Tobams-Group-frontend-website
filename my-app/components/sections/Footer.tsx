import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section style={{ backgroundColor: '#1D0617' }} className="w-full py-12 md:py-16 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <p style={{
                color: '#999999',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 'clamp(12px, 2.5vw, 14px)',
                fontWeight: '400',
                margin: '0 0 8px 0'
              }}>
                Ready to be a part of something extraordinary?
              </p>
              <h2 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: '700',
                lineHeight: '130%',
                margin: '0'
              }}>
                Let's work together to create a difference
              </h2>
            </div>
            <div className="flex flex-col items-center gap-6">
              <button style={{
                backgroundColor: '#6B1D57',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '6px',
                border: 'none',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
                whiteSpace: 'nowrap'
              }}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer style={{ backgroundColor: '#11040E' }} className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
            {/* Left Column - Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Tobams Group"
                  width={120}
                  height={50}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <p style={{
                color: '#cccccc',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '14px',
                lineHeight: '1.6',
                margin: '0 0 16px 0'
              }}>
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              {/* Social Icons */}
              <div className="mt-6">
                <Image src="/images/Frame 1618868695.png" alt="Tobams Group" width={300} height={120} style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>

            {/* What We Do Column */}
            <div>
              <h3 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                What We Do
              </h3>
              <ul className="space-y-3">
                {['Sustainability Services', 'Strategy Planning and Implementation', 'Tech Talent Solutions', 'Training and Development', 'IT Consulting Services', 'Social Impact', 'Talent Recruitment'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{
                      color: '#cccccc',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }} className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                Company
              </h3>
              <ul className="space-y-3">
                {['About', 'Jobs', 'Projects', 'Our Founder', 'Business Model', 'The Team', 'Contact Us', 'Blog', 'FAQs', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{
                      color: '#cccccc',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }} className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Column */}
            <div>
              <h3 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                Solution
              </h3>
              <ul className="space-y-3">
                {['Tobams Group Academy', 'Help a Tech Talent', 'Campus Ambassadors Program', 'Join Our Platform', 'Pricing', 'Book a Consultation', 'Join Our Slack Community'].map((item) => (
                  <li key={item}>
                    <a href="#" style={{
                      color: '#cccccc',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }} className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registered Offices & Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-700" style={{ backgroundColor: '#FFFFFF0F', padding: '32px', borderRadius: '12px' }}>
            {/* Registered Offices */}
            <div>
              <h3 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                Registered Offices
              </h3>
              <div className="space-y-6">
                <div>
                  <p style={{
                    color: '#E33B6B',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                    United Kingdom
                  </p>
                  <p style={{
                    color: '#cccccc',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
                <div>
                  <p style={{
                    color: '#E33B6B',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                    Nigeria
                  </p>
                  <p style={{
                    color: '#cccccc',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 style={{
                color: '#ffffff',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/images/material-symbols_mail.png" alt="Email" width={24} height={24} />
                  </div>
                  <a href="mailto:theteam@tobamsgroup.com" style={{
                    color: '#cccccc',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }} className="hover:text-white">
                    theteam@tobamsgroup.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/images/ic_round-phone.png" alt="Phone" width={24} height={24} />
                  </div>
                  <a href="tel:+447886600748" style={{
                    color: '#cccccc',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }} className="hover:text-white">
                    +447886600748
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <p style={{
              color: '#999999',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '13px',
              margin: '0'
            }}>
              Copyright © Tobams Group, 2024. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-end">
              <a href="#" style={{
                color: '#999999',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '13px',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} className="hover:text-white">
                Terms and Conditions
              </a>
              <a href="#" style={{
                color: '#999999',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '13px',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" style={{
                color: '#999999',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '13px',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }} className="hover:text-white">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
