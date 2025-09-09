import React from "react";

const jobs = [
  {
    title: "Application Developer",
    company: "Bacha Coffee, Singapore",
    period: "May 2024 – Present (on-site)",
    link: "https://www.bachacoffee.com/",
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
    projects: [
      "Internal Business Portal: Developed an internal portal integrating finance and warehouse data with MSBC, improving operational efficiency.",
      "Component-Level Improvements: Enhanced UI/UX and backend modules for better performance and maintainability.",
    ],
  },
  {
    title: "E-Commerce Developer",
    company: "TWG Tea, Singapore",
    period: "Dec 2021 – Mar 2024 (Remote, Contract)",
    link: "https://www.twgtea.com/",
    bullets: [
      "Site Performance Monitoring & Customization: Responsible for monitoring site performance and developing customized modules tailored to meet diverse business needs.",
      "System Integrations: Successfully integrated various third-party systems, including APIs, to enhance the functionality of the e-commerce platform.",
      "Ongoing Maintenance & Enhancements: Ensure ongoing maintenance, troubleshooting, and enhancements of the e-commerce website to improve user experience and operational efficiency.",
      "Code Deployment: Proficiently manage code deployments using Git Extension and BitBucket, ensuring version control and smooth integration within the development lifecycle.",
      "Cross-Functional Collaboration: Collaborate closely with cross-functional teams to gather business requirements and deliver solutions that align with company goals.",
    ],
    projects: [
      "Shipment Creation System Integration with DHL API: Automated shipping using DHL API.",
      "Parcel Shipping Order Entry System: Developed with C# and Razor.",
      "Export Sales Order Data System: Automated sales data export for reporting.",
      "API Integrations: Integrated multiple external APIs for smoother data exchange.",
      "Sales Data Import System: Automated imports using Windows Forms and Console apps.",
      "Static Web Pages & JSON-Powered Webpage Project: Improved website interactivity using React.js.",
    ],
  },
  {
    title: "Web Developer",
    company: "DynamicWeb APAC, Yangon",
    period: "Oct 2018 – Oct 2021",
    link: "https://dynamicweb.com/",
    bullets: [
      "Collaborated with both local and international colleagues, including teams from Myanmar, on various e-commerce projects.",
      "Successfully developed multiple e-commerce platforms using the Dynamic Web Ecommerce Engine, ensuring integration with payment providers (2C2P) and shipping providers (Marathon, Ninja Van).",
      "Developed and integrated REST APIs to support mobile applications, improving the overall e-commerce ecosystem.",
      "Played a key role in maintaining and enhancing site performance, optimizing functionality, and ensuring smooth operations of the platforms.",
      "Coordinated cross-functional activities, including integration, API development, business logic implementation, and frontend design, while contributing to all stages of the software development lifecycle.",
    ],
    projects: [
      "Pet Lovers Centre (www.petloverscentre.com): Maintained site using C#, ASP.NET, Razor, HTML, CSS, JS.",
      "Commune Life (thecommunelife.com): Main developer for API, business logic, frontend.",
      "Lasource Group Myanmar (lasource.com.mm): Integrated payment & shipping providers, built sales report systems.",
      "LPG Gas Singapore Delivery & Sales Management System: Internal delivery & sales system.",
    ],
  },
  {
    title: "Intern – Java Developer",
    company: "Acroquest Myanmar",
    period: "May 2018 – Jul 2018",
    link: "https://www.acroquest.co.jp/en/",
    bullets: [
      "JUnit Testing & Automated Testing: Created and maintained JUnit test cases to verify software functionality and reliability.",
      "Server-Side Development: Developed and supported server-side functions using Java and the Spring Framework to ensure robust, scalable, and efficient software.",
      "Learned about Japanese work culture, team collaboration, and quality-focused development practices.",
    ],
    projects: [
      "Server-Side Functions: Developed server-side functions using Java & Spring.",
      "Automated Testing: Created JUnit test cases for verification and reliability.",
    ],
  },
];

export default function JobExperience() {
  return (
    
    <section id="experiences" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary-pink">
        Professional Experience
      </h2>
      <div className="relative border-l-4 border-primary-pink pl-8 space-y-12">
        {jobs.map((job, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-primary-pink"></div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-2xl font-semibold text-primary-pink">{job.title}</h3>
                <span className="text-gray-500 text-sm font-bold">{job.period}</span>
              </div>
              <h4 className="text-gray-700 font-medium mb-3">
                <a href={job.link} className="hover:text-primary-pink underline" target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {job.projects && (
                <>
                  <div className="mt-2 text-gray-300 font-semibold">Key Projects:</div>
                  <ul className="list-disc pl-8 text-gray-200 space-y-1">
                    {job.projects.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
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
