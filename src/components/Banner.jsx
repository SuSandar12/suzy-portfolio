import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Banner () {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400">
      <div className="text-center">
        <img
          src={profilePic}
          alt="Suzy"
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg"
        />
        <h1 className="mt-6 text-4xl font-bold text-white">Hi, I'm Suzy</h1>
      </div>
    </section>
  );
};

