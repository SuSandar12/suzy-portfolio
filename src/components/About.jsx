import React from "react";
import { GraduationCap, Briefcase, Plane, MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary-pink">
        About
      </h2>

      <div className="text-center justify-center pb-10">
        Software Developer with 5+ years of end-to-end experience in software
        development, and eCommerce solutions. <br/> Experienced in collaborating with cross-functional teams for requirement gathering, solution design, testing, and go-live support. Solution-focused developer with proven
        ability to adapt to new tools and technologies, continuously learning to
        deliver scalable and business-aligned applications.
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          <div
            className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
            data-taos-offset="300"
          >
            <GraduationCap className="w-10 h-10 text-primary-pink mb-2" />
            <h3 className="font-semibold text-lg mb-1 text-primary-pink">
              Education
            </h3>
            <p className="text-gray-700 text-center">
              Bachelor of Computer Science
            </p>
          </div>
          <div
            className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
            data-taos-offset="300"
          >
            <Briefcase className="w-10 h-10 text-primary-pink mb-2" />
            <h3 className="font-semibold text-lg mb-1 text-primary-pink">
              Experience
            </h3>
            <p className="text-gray-700 text-center">5+ Years</p>
          </div>
          <div
            className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
            data-taos-offset="300"
          >
            <Plane className="w-10 h-10 text-primary-pink mb-2" />
            <h3 className="font-semibold text-lg mb-1 text-primary-pink">
              Hobby
            </h3>
            <p className="text-gray-700 text-center">Travelling, K-drama</p>
          </div>
          <div
            className="flex flex-col items-center bg-white/70 rounded-xl shadow p-6 hover:shadow-2xl delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
            data-taos-offset="300"
          >
            <MapPin className="w-10 h-10 text-primary-pink mb-2" />
            <h3 className="font-semibold text-lg mb-1 text-primary-pink">
              Current Location
            </h3>
            <p className="text-gray-700 text-center">Singapore</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
