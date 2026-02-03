'use client';

import HeroSection from '@/components/HeroSection';

export default function Privacy() {
  return (
    <div className="pt-20">
      <HeroSection
        title="Privacy Policy"
        subtitle="Your Privacy and Data Protection Matters to Us"
      />

      <section className="section-padding">
        <div className="container-max max-w-3xl prose prose-lg">
          <div className="prose">
            <h2 className="mb-6">Privacy Policy for More Life Recovery</h2>
            <p className="text-gray-700 mb-6">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <h3 className="mt-8 mb-4">1. Introduction</h3>
            <p className="text-gray-700 mb-6">
              More Life Recovery is committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains our online information practices and the choices you can make about how your information is collected and used.
            </p>

            <h3 className="mt-8 mb-4">2. Information We Collect</h3>
            <p className="text-gray-700 mb-4">We collect information you voluntarily provide, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Insurance information</li>
              <li>Medical history and treatment information</li>
              <li>Communications through contact forms or email</li>
            </ul>

            <h3 className="mt-8 mb-4">3. How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Verify insurance coverage and benefits</li>
              <li>Process admissions and provide treatment</li>
              <li>Communicate about your treatment and recovery</li>
              <li>Improve our website and services</li>
            </ul>

            <h3 className="mt-8 mb-4">4. HIPAA Compliance</h3>
            <p className="text-gray-700 mb-6">
              More Life Recovery is committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). Your health information is protected with appropriate safeguards and is only shared as permitted by law.
            </p>

            <h3 className="mt-8 mb-4">5. Information Security</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate administrative, physical, and technical safeguards to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="mt-8 mb-4">6. Third-Party Links</h3>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
            </p>

            <h3 className="mt-8 mb-4">7. Your Rights</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Opt-out of certain communications</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
            </ul>

            <h3 className="mt-8 mb-4">8. Contact Us</h3>
            <p className="text-gray-700 mb-6">
              If you have questions about our privacy policy or how we handle your information, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p><strong>Email:</strong> moreliferehab@gmail.com</p>
              <p><strong>Phone:</strong> (818) 301-1213</p>
              <p><strong>Address:</strong> Van Nuys, California</p>
            </div>

            <h3 className="mt-8 mb-4">9. Changes to This Policy</h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to update this privacy policy at any time. Changes will be effective when posted to our website. Your continued use of our website constitutes your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
