import React, { useState } from "react";
import ActivitiesModal from "./ActivityModal";

const activities = [
  {
    id: 1,
    title: "Samsung Tech Mobile App Training 2017",
    shortDesc: "Completed with 2nd place in Upper Myanmar region.",
    longDesc:
      "The Samsung Tech Institute: Mobile Application Training is an annual program designed to advance the knowledge and skills of university students in Myanmar in mobile and digital technology. Each year, selected students from computer studies universities undergo a two-month course covering Android mobile app development, theoretical lessons, and group practical sessions. In 2016, I joined the program and achieved 2nd place in the Upper Myanmar region, gaining hands-on experience in Android application development and innovation.",
    images: ["/suzy-portfolio/images/samsung1.jpg"],
    ref:"https://news.samsung.com/global/creating-opportunities-with-computer-skills",
  },
  {
    id: 2,
    title: "International ICT Awards, Taiwan 2017",
    shortDesc: "Represented Myanmar in an international ICT competition.",
    longDesc:
      "The InnoServe Awards is a prestigious annual international ICT competition with over 30 years of history. It brings together students worldwide to present innovative projects that bridge academic knowledge and industry needs.I participated as a representative of Myanmar, presenting an information management project alongside global peers. The competition attracted participants from 100+ universities and colleges worldwide, making it one of the largest and most significant ICT contests in Taiwan.",
    images: ["/suzy-portfolio/images/innoserve1.jpg","/suzy-portfolio/images/innoserve2.jpg"],
    ref: "https://innoserve.tca.org.tw/en/about_contest.aspx",
  },
  {
    id: 3,
    title: "ACM-ICPC Asia-Yangon Contest 2018",
    shortDesc: "Competed in regional programming contests in Yangon.",
    longDesc:
      "The ACM International Collegiate Programming Contest (ICPC) is one of the world’s most prestigious programming competitions. I took part in the Asia-Yangon Regional Contest, competing with talented students and programmers across the region to solve complex algorithmic and coding challenges under time pressure. This experience strengthened my problem-solving skills, teamwork, and ability to perform under competitive conditions.",
    images: ["/suzy-portfolio/images/icpc1.jpg"],
    ref: "https://icpc.global/",
  },
  
  {
    id: 4,
    title: "English Language Competition 2018",
    shortDesc: "Competed at Technological Universities and Computer University.",
    longDesc:
      "In 2017, I participated in an English Language Competition where I tested my communication and presentation skills.",
    images: ["/suzy-portfolio/images/english1.jpg"],
  },{
    id: 5,
    title: "Ooredoo-UNDP Myanmar Hackathon 2019",
    shortDesc: "Awarded by the Women’s Empowerment sector as part of Team Divas.",
    longDesc:
      "At the Ooredoo-UNDP Hackathon 2019 in Yangon, our team Divas was awarded the Women’s Empowerment prize. We developed HearU, an innovative platform that enables employees to confidentially report workplace misconduct directly to HR or management.This solution was showcased during Demo Day at Ooredoo Myanmar Headquarters, with an audience of the startup community and potential investors.",
    images: ["/suzy-portfolio/images/hackathon1.jpg", "/suzy-portfolio/images/hackathon2.jpg"],
    ref: "https://www.qatar-tribune.com/article/169033/NATION/Ooredoo-UNDP-Myanmar-Hackathon-winners-showcase-their-innovations",
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

