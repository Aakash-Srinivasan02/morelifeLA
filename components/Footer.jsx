'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container-max grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="text-lg font-bold mb-4">More Life Recovery</h4>
          <p className="text-gray-400">
            Luxury addiction treatment center dedicated to evidence-based recovery programs.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61578713999874" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Facebook
            </a>
            <a href="https://www.instagram.com/morelifetreatment/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
            <a href="https://x.com/more_life09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/services" className="hover:text-white transition">All Services</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Case Management</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Recovery Support</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Veterans Program</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Information</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p className="text-gray-400 mb-2">
            <strong>Phone:</strong> (818) 301-1213
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Email:</strong> moreliferehab@gmail.com
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> Van Nuys, California
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {currentYear} More Life Recovery. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
