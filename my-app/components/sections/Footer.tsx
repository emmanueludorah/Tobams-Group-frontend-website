import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 border-b border-gray-700 bg-[#1D0617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <p className="text-[#999999] text-[clamp(12px,2.5vw,14px)] font-normal m-0 mb-2">
                Ready to be a part of something extraordinary?
              </p>
              <h2 className="text-white text-[clamp(28px,5vw,40px)] leading-[130%] m-0">
                Let's work together to create a difference
              </h2>
            </div>
            <div className="flex flex-col items-center gap-6">
              <button className="bg-[#6B1D57] text-white px-8 py-3 rounded-md text-[clamp(14px,3vw,16px)] hover:opacity-90 transition whitespace-nowrap">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="w-full py-12 md:py-16 bg-[#11040E]">
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
                  className="w-auto h-auto"
                />
              </div>
              <p className="text-[#cccccc] text-[14px] leading-[1.6] m-0 mb-4">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              {/* Social Icons */}
              <div className="mt-6">
                <Image src="/images/Frame 1618868695.png" alt="Tobams Group" width={300} height={120} className="w-full h-auto" />
              </div>
            </div>

            {/* What We Do Column */}
            <div>
              <h3 className="text-white text-[16px] font-bold mb-4">
                What We Do
              </h3>
              <ul className="space-y-3">
                {['Sustainability Services', 'Strategy Planning and Implementation', 'Tech Talent Solutions', 'Training and Development', 'IT Consulting Services', 'Social Impact', 'Talent Recruitment'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#cccccc] text-[14px] no-underline transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white text-[16px] font-bold mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {['About', 'Jobs', 'Projects', 'Our Founder', 'Business Model', 'The Team', 'Contact Us', 'Blog', 'FAQs', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#cccccc] text-[14px] no-underline transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Column */}
            <div>
              <h3 className="text-white text-[16px] font-bold mb-4">
                Solution
              </h3>
              <ul className="space-y-3">
                {['Tobams Group Academy', 'Help a Tech Talent', 'Campus Ambassadors Program', 'Join Our Platform', 'Pricing', 'Book a Consultation', 'Join Our Slack Community'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#cccccc] text-[14px] no-underline transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registered Offices & Contact Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 pb-12 border-b border-gray-700 bg-[rgba(255,255,255,0.06)] p-8 rounded-lg md:gap-12">
            {/* Contact Information - appears first on mobile, second on desktop */}
            <div className="order-1 md:order-2 flex-1">
              <h3 className="text-white text-[16px] font-bold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/images/material-symbols_mail.png" alt="Email" width={24} height={24} />
                  </div>
                  <a href="mailto:theteam@tobamsgroup.com" className="text-[#cccccc] text-[14px] no-underline transition hover:text-white">
                    theteam@tobamsgroup.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/images/ic_round-phone.png" alt="Phone" width={24} height={24} />
                  </div>
                  <a href="tel:+447886600748" className="text-[#cccccc] text-[14px] no-underline transition hover:text-white">
                    +447886600748
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Offices - appears second on mobile, first on desktop */}
            <div className="order-2 md:order-1 flex-1">
              <h3 className="text-white text-[16px] mb-4">
                Registered Offices
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[#E33B6B] text-[14px] mb-1">
                    United Kingdom
                  </p>
                  <p className="text-[#cccccc] text-[13px] leading-[1.6] m-0">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
                <div>
                  <p className="text-[#E33B6B] text-[14px] mb-1">
                    Nigeria
                  </p>
                  <p className="text-[#cccccc] text-[13px] leading-[1.6] m-0">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 text-center md:text-left">
            <p className="text-[#999999] text-[13px] m-0 order-2 md:order-1">
              Copyright © Tobams Group, 2024. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-end order-1 md:order-2">
              <a href="#" className="text-[#999999] text-[13px] underline transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-[#999999] text-[13px] underline transition hover:text-white">
                Cookies Policy
              </a>
              <a href="#" className="text-[#999999] text-[13px] underline transition hover:text-white">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
