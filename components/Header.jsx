'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container-max flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          More Life Recovery
        </Link>
        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`flex-col md:flex-row gap-4 md:gap-8 ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}>
          <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
          <li><Link href="/programs" className="hover:text-primary transition">Programs</Link></li>
          <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
          <li><Link href="/testimonials" className="hover:text-primary transition">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link href="/contact" className="btn btn-primary">
            Get Help
          </Link>
        </div>
      </nav>
    </header>
  );
}
