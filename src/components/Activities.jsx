import React, { useState } from "react";
import ActivitiesModal from "./ActivityModal";

const activities = [
  {
    id: 1,
    title: "Ooredoo Hackathon 2019",
    shortDesc: "Awarded by the Women’s Empowerment sector as part of Team Divas.",
    longDesc:
      "I was honoured to be part of the 'Divas' team in Ooredoo Hackathon 2019...",
    images: ["/images/hackathon1.jpg", "/images/hackathon2.jpg"],
  },
  {
    id: 2,
    title: "International ICT Awards, Taiwan",
    shortDesc: "Represented Myanmar in an international ICT competition.",
    longDesc:
      "In 2017, I represented Myanmar at the International ICT Innovative Services Awards in Taiwan...",
    images: ["/images/taiwan1.jpg"],
  },
  {
    id: 3,
    title: "ACM-ICPC Asia-Yangon Contest",
    shortDesc: "Competed in regional programming contests in Yangon.",
    longDesc:
      "I joined ACM-ICPC Asia-Yangon multiple times. It sharpened my algorithmic thinking...",
    images: ["/images/acm1.jpg", "/images/acm2.jpg"],
  },
  {
    id: 4,
    title: "Samsung Tech Mobile App Training",
    shortDesc: "Completed with 2nd place in Upper Myanmar region.",
    longDesc:
      "In 2016, I joined Samsung Tech’s Android Mobile App Development Training Program and achieved 2nd place in the Upper Myanmar region.",
    images: ["/images/samsung1.jpg"],
  },
  {
    id: 5,
    title: "English Language Competition",
    shortDesc: "Competed at Technological Universities and Computer University.",
    longDesc:
      "In 2017, I participated in an English Language Competition where I tested my communication and presentation skills.",
    images: ["/images/english1.jpg"],
  },
];

export default function Activities() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary-pink">Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelected(activity)}
          >
            <img
              src={activity.images[0]}
              alt={activity.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold">{activity.title}</h3>
            <p className="text-gray-600 text-sm">{activity.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ActivitiesModal activity={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

