'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Programs() {
  return (
    <div className="pt-20">
      <HeroSection
        title="Comprehensive Recovery Programs"
        subtitle="Evidence-Based Treatment Options for Your Recovery"
      />

      {/* Residential Treatment */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">Residential Treatment Program (RTC)</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our flagship residential treatment program provides comprehensive care in a luxury setting. Clients receive 24/7 medical supervision, clinical therapy, and support within a community of peers committed to recovery.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The program typically lasts 28-90 days and includes individual therapy, group sessions, family counseling, and evidence-based addiction treatment.
              </p>
              <h4 className="font-bold mb-4">Program Includes:</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>24/7 medical supervision and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Individual and group therapy sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Family counseling and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Recreational and wellness activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Aftercare planning and alumni support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Enroll in RTC Program
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-96"></div>
          </div>
        </div>
      </section>

      {/* Intensive Outpatient */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary rounded-lg h-96 order-2 md:order-1"></div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">Intensive Outpatient Program (IOP)</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our intensive outpatient program offers flexibility for those who need to maintain employment, family commitments, or other responsibilities while receiving professional treatment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Clients attend sessions 3-4 days per week for 2-3 hours, allowing them to apply recovery principles in real-world settings while receiving clinical support.
              </p>
              <h4 className="font-bold mb-4">Program Features:</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Flexible scheduling to accommodate work/family</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Intensive group and individual therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Real-world application of recovery skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Peer support and community connection</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Learn About IOP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">Find the Right Program for Your Needs</h2>
          <div className="overflow-x-auto">
            <table className="w-full border collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border p-4 text-left">Feature</th>
                  <th className="border p-4 text-center">RTC</th>
                  <th className="border p-4 text-center">IOP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 Medical Supervision', '✓', '—'],
                  ['Individual Therapy', '✓', '✓'],
                  ['Group Therapy', '✓', '✓'],
                  ['Family Counseling', '✓', '✓'],
                  ['Flexible Schedule', '—', '✓'],
                  ['Work/Life Balance', '—', '✓'],
                  ['Residential Setting', '✓', '—'],
                  ['Peer Community', '✓', '✓'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border p-4">{row[0]}</td>
                    <td className="border p-4 text-center">{row[1]}</td>
                    <td className="border p-4 text-center">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-center mb-12">Specialized Treatment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Trauma-Informed Care</h3>
              <p className="text-gray-700">
                Specialized treatment addressing trauma and PTSD, recognizing the connection between past trauma and current addiction patterns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Dual Diagnosis Treatment</h3>
              <p className="text-gray-700">
                Comprehensive care for co-occurring mental health conditions and substance use disorders, integrated treatment approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Veterans Program</h3>
              <p className="text-gray-700">
                Specialized program for veterans, addressing military-related trauma, PTSD, and addiction with cultural competency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max text-center">
          <h2 className="mb-6">Your Insurance May Cover the Cost of Treatment</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We accept most major insurance plans. Our admissions team can verify your coverage and explain your options.
          </p>
          <Link href="/verify-insurance" className="btn bg-white text-primary hover:bg-gray-100">
            Verify Your Insurance
          </Link>
        </div>
      </section>
    </div>
  );
}
