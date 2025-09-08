import React from 'react';

export default function Footer(){
    return (
    <footer className="w-full bg-black text-gray-400 py-6 mt-12 border-t border-pink-500">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm text-white">&copy; {new Date().getFullYear()} Suzy Portfolio. All rights reserved.</span>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="https://github.com/SuSandar12" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">GitHub</a>
                    <a href="mailto:suzy@email.com" className="hover:text-pink-400 transition">Email</a>
                    <a href="https://www.linkedin.com/in/susandar-swe/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
    }