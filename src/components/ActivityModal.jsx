import React, { useState } from "react";

export default function ActivityModal ({ activity, onClose }){
  const [currentImage, setCurrentImage] = useState(0);

  if (!activity) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + activity.images.length) % activity.images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 h-4/5 relative overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>

        {/* Carousel */}
        <div className="relative mb-4">
          <img
            src={activity.images[currentImage]}
            alt={activity.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          {activity.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Long Description */}
        <p className="text-gray-700">{activity.longDesc}</p>
      </div>
    </div>
  );
};

