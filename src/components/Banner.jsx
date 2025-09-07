import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Banner() {
  return (
  <section className="min-h-[700px] py-32 mt-10 flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 relative overflow-hidden">
    <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="relative w-full md:w-1/2 flex flex-col justify-center h-[400px] px-4 md:px-8 mb-8 md:mb-0">
        <div className="absolute top-0 left-0 w-full md:w-[110%] h-full bg-white/30 backdrop-blur-md  -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Hsu Sandar Swe</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">Application Analyst Developer</h2>
        <p className="text-base md:text-lg text-gray-600">Welcome to my portfolio! I love building beautiful and functional web applications.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={profilePic}
          alt="Suzy"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
          style={{zIndex: 20}}
        />
      </div>
    </div>
    </section>
  );
}

