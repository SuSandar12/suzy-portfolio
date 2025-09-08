import React, { useState } from "react";

import bacha1 from "../assets/profile.jpg";
import twg1 from "../assets/profile.jpg";
import dw1 from "../assets/profile.jpg";
import acro1 from "../assets/profile.jpg";

const jobs = [
  {
    title: "Application Developer",
    company: "Bacha Coffee, Singapore",
    period: "May 2024 – Present (on-site)",
    images: [bacha1],
    bullets: [
      "Developed and maintained an internal Business Portal using ASP.NET and C#, with user-friendly interfaces and real-time data integration from ERP systems.",
      "Customized and extended Microsoft Business Central (MSBC) functionalities using AL Language, streamlining finance and warehouse operations.",
      "Worked closely with Digital, Finance, and Warehouse teams to gather and translate business requirements into technical features.",
      "Supported go-live deployment, troubleshooting issues under tight timelines.",
      "Participated in daily L1 support, addressing real-time operational bugs and system queries.",
      "Initiated component-level improvements in UI/UX and backend structure to improve performance and user experience.",
      "Engaged in Agile sprint planning, task estimation, and documentation processes for continuous delivery.",
      "Negotiated with vendors to evaluate and procedure decisions.",
      "Picked up new analysis skills to assess business needs and technical feasibility when adopting new tools.",
    ],
  },
  {
    title: "E-Commerce Developer",
    company: "TWG Tea, Singapore",
    period: "Dec 2021 – Mar 2024 (Remote, Contract)",
    images: [twg1],
    bullets: [
      "Site Performance Monitoring & Customization: Responsible for monitoring site performance and developing customized modules tailored to meet diverse business needs.",
      "System Integrations: Successfully integrated various third-party systems, including APIs, to enhance the functionality of the e-commerce platform.",
      "Ongoing Maintenance & Enhancements: Ensure ongoing maintenance, troubleshooting, and enhancements of the e-commerce website to improve user experience and operational efficiency.",
      "Code Deployment: Proficiently manage code deployments using Git Extension and BitBucket, ensuring version control and smooth integration within the development lifecycle.",
      "Cross-Functional Collaboration: Collaborate closely with cross-functional teams to gather business requirements and deliver solutions that align with company goals.",
    ],
    projects: [
      "Shipment Creation System Integration with DHL API: Designed and implemented a shipment creation system that integrates with the DHL shipping API, automating the shipping process and improving order fulfillment.",
      "Parcel Shipping Order Entry System: Developed a parcel shipping order entry system using C# and Razor, enabling streamlined and accurate order management.",
      "Export Sales Order Data System: Created an automated system for exporting sales order data, improving data management and reporting processes.",
      "API Integrations: Successfully integrated various external APIs, enhancing system capabilities and enabling smoother data exchange between platforms.",
      "Sales Data Import System: Developed a Windows Form Application and Console Application in C# to automate the import of sales data from e-commerce websites into the respective databases, scheduled to run daily and monthly via Windows Task Scheduler.",
      "Static Web Pages & JSON-Powered Webpage Project: Developed static web pages and a JSON-powered webpage project using React.js, improving website interactivity and data handling.",
    ],
  },
  {
    title: "Web Developer",
    company: "DynamicWeb APAC, Yangon",
    period: "Oct 2018 – Oct 2021",
    images: [dw1],
    bullets: [
      "Collaborated with both local and international colleagues, including teams from Myanmar, on various e-commerce projects.",
      "Successfully developed multiple e-commerce platforms using the Dynamic Web Ecommerce Engine, ensuring integration with payment providers (2C2P) and shipping providers (Marathon, Ninja Van).",
      "Developed and integrated REST APIs to support mobile applications, improving the overall e-commerce ecosystem.",
      "Played a key role in maintaining and enhancing site performance, optimizing functionality, and ensuring smooth operations of the platforms.",
      "Coordinated cross-functional activities, including integration, API development, business logic implementation, and frontend design, while contributing to all stages of the software development lifecycle.",
    ],
    projects: [
      "Pet Lovers Centre (www.petloverscentre.com): Developed and maintained the site using C#, ASP.NET, Razor, and frontend technologies (HTML, CSS, JS). Ensured optimal site performance, functionality, and user experience through continuous enhancements and monitoring.",
      "Commune Life (thecommunelife.com): Worked as the main developer, focusing on API development, business logic, and frontend design. Enhanced system performance and ensured seamless integration between backend and frontend components.",
      "Lasource Group Myanmar (lasource.com.mm): Led the integration of payment providers and shipping providers to streamline the checkout process. Developed various sales report systems for the sellers, improving data management and decision-making.",
      "LPG Gas Singapore Delivery & Sales Management System: Developed an internal delivery and sales management system.",
    ],
  },
  {
    title: "Intern – Java Developer",
    company: "Acroquest Myanmar",
    period: "May 2018 – Jul 2018",
    images: [acro1],
    bullets: [
      "JUnit Testing & Automated Testing: Created and maintained JUnit test cases to verify software functionality and reliability. Conducted thorough testing using automated tools to identify bugs, streamline the testing process, and enhance system performance.",
      "Server-Side Development: Developed and supported server-side functions using Java and the Spring Framework to ensure robust, scalable, and efficient software.",
      "Learned about Japanese work culture, team collaboration, and quality-focused development practices.",
    ],
  },
];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="relative w-full h-56 md:h-64 flex items-center justify-center">
      <img src={images[current]} alt="job" className="w-full h-full object-cover rounded-xl" />
      {images.length > 1 && (
        <>
          <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full">&#8249;</button>
          <button onClick={() => setCurrent((current + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full">&#8250;</button>
        </>
      )}
    </div>
  );
}

export default function JobExperience() {
  return (
    <section id="experiences" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary-pink">Professional Experience</h2>
      <div className="space-y-16">
        {jobs.map((job, idx) => (
          <div key={job.title} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
            {/* Carousel */}
            <div className="md:w-1/2 w-full">
              <Carousel images={job.images} />
            </div>
            {/* Text */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-pink-400">{job.title}</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-sm mb-2">
                <span>{job.company}</span>
                <span>{job.period}</span>
              </div>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {job.projects && (
                <>
                  <div className="mt-2 text-gray-300 font-semibold">Key Projects:</div>
                  <ul className="list-disc pl-8 text-gray-200 space-y-1">
                    {job.projects.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
