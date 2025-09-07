import React from 'react';
import { GraduationCap, Briefcase, Plane, MapPin, Tv } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-purple-600">Summery</h2>
      <div className="text-center justify-center">
        IT professional with 5+ years of end-to-end experience in software development, ERP customization, and eCommerce solutions. Strong background in collaborating with cross-functional teams for requirement gathering, solution design, testing, and go-live support. Solution-focused developer with proven ability to adapt to new tools and technologies, continuously learning to deliver scalable and business-aligned applications.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl">
          <GraduationCap className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-semibold text-lg mb-1">Education</h3>
          <p className="text-gray-700 text-center">Bachelor of Computer Science</p>
        </div>
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl">
          <Briefcase className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-semibold text-lg mb-1">Experience</h3>
          <p className="text-gray-700 text-center">5+ Years</p>
        </div>
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl">
          <Plane className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-semibold text-lg mb-1">Hobby</h3>
          <p className="text-gray-700 text-center">Travelling, K-drama</p>
        </div>
        <div className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl">
          <MapPin className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-semibold text-lg mb-1">Current Location</h3>
          <p className="text-gray-700 text-center">Singapore</p>
        </div>
      </div>
    </section>
  );
}