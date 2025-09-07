import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Banner() {
  return (
  <section className="min-h-[700px] mt-10 flex items-center justify-center bg-gradient-to-r from-black via-black to-pink-500 relative overflow-hidden">
    <div className="w-full flex flex-col md:flex-row items-center relative z-10">
      <div className="relative w-full md:w-1/2  w-1/3 flex flex-col justify-center h[400px] px-4 md:px-12 mb-8 md:mb-0 md:ml-10 ml-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-pink mb-4">Hsu Sandar Swe</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Application Developer</h2>
        <p className="text-base md:text-lg text-white">Welcome to my portfolio! I love building beautiful and functional web applications.</p>
      </div>
      <div className="w-full md:w-1/2 w-2/3 h-[400px] md:h-[400px] p-0 m-0 flex">
        <img
          src={profilePic}
          alt="Suzy"
          className="w-full h-full object-cover rounded-none p-0 m-0"
          style={{zIndex: 20}}
        />
      </div>
    </div>
  </section>
  );
}

