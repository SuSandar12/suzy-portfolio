import React from "react";

export default function Nav() {
  return (
    <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-primary-pink">Suzy's Portfolio</div>
        <ul className="flex space-x-6 hidden md:flex">
          <li>
            <a href="#about" className="text-gray-700 hover:text-pink-600 font-medium">About</a>
          </li>
           <li>
            <a href="#skills" className="text-gray-700 hover:text-pink-600 font-medium">Skills</a>
          </li>
          <li>
            <a href="#experiences" className="text-gray-700 hover:text-pink-600 font-medium">Experiences</a>
          </li>
          <li>
            <a href="#activities" className="text-gray-700 hover:text-pink-600 font-medium">Activities</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}