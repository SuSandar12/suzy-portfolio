import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="/suzy-portfolio/images/graduation.jpg"
            alt="Graduation"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </div>

        <div className="w-full md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-bold text-primary-pink mb-6">
            Education
          </h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-semibold text-black leading-relaxed ">
                Bachelor of Computer Science
              </h3>
              <p className="text-black leading-relaxed ">University of Computer Studies, Taunggyi (2013 - 2019) </p>
              <p className="text-black leading-relaxed italic">
                Graduated with honors. Focused on software engineering and Computer Science.
              </p>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}
