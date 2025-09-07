import React from "react";

export default function JobExperience() {
  return (
    <section id="experiences" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary-pink">
        Professional Experience
      </h2>
      <div className="space-y-10">
        {/* Bacha Coffee */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400">Application Developer</h3>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-sm mb-2">
            <span>Bacha Coffee, Singapore</span>
            <span>May 2024 – Present (on-site)</span>
          </div>
          <ul className="list-disc pl-6 text-gray-200 space-y-1">
            <li>Developed and maintained an internal Business Portal using ASP.NET and C#, with user-friendly interfaces and real-time data integration from ERP systems.</li>
            <li>Customized and extended Microsoft Business Central (MSBC) functionalities using AL Language, streamlining finance and warehouse operations.</li>
            <li>Worked closely with Digital, Finance, and Warehouse teams to gather and translate business requirements into technical features.</li>
            <li>Supported go-live deployment, troubleshooting issues under tight timelines.</li>
            <li>Participated in daily L1 support, addressing real-time operational bugs and system queries.</li>
            <li>Initiated component-level improvements in UI/UX and backend structure to improve performance and user experience.</li>
            <li>Engaged in Agile sprint planning, task estimation, and documentation processes for continuous delivery.</li>
            <li>Negotiated with vendors to evaluate and procedure decisions.</li>
            <li>Picked up new analysis skills to assess business needs and technical feasibility when adopting new tools.</li>
          </ul>
        </div>
        {/* TWG Tea */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400">E-Commerce Developer</h3>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-sm mb-2">
            <span>TWG Tea, Singapore</span>
            <span>Dec 2021 – Mar 2024 (Remote, Contract)</span>
          </div>
          <ul className="list-disc pl-6 text-gray-200 space-y-1">
            <li>Site Performance Monitoring & Customization: Responsible for monitoring site performance and developing customized modules tailored to meet diverse business needs.</li>
            <li>System Integrations: Successfully integrated various third-party systems, including APIs, to enhance the functionality of the e-commerce platform.</li>
            <li>Ongoing Maintenance & Enhancements: Ensure ongoing maintenance, troubleshooting, and enhancements of the e-commerce website to improve user experience and operational efficiency.</li>
            <li>Code Deployment: Proficiently manage code deployments using Git Extension and BitBucket, ensuring version control and smooth integration within the development lifecycle.</li>
            <li>Cross-Functional Collaboration: Collaborate closely with cross-functional teams to gather business requirements and deliver solutions that align with company goals.</li>
          </ul>
          <div className="mt-2 text-gray-300 font-semibold">Key Projects:</div>
          <ul className="list-disc pl-8 text-gray-200 space-y-1">
            <li>Shipment Creation System Integration with DHL API: Designed and implemented a shipment creation system that integrates with the DHL shipping API, automating the shipping process and improving order fulfillment.</li>
            <li>Parcel Shipping Order Entry System: Developed a parcel shipping order entry system using C# and Razor, enabling streamlined and accurate order management.</li>
            <li>Export Sales Order Data System: Created an automated system for exporting sales order data, improving data management and reporting processes.</li>
            <li>API Integrations: Successfully integrated various external APIs, enhancing system capabilities and enabling smoother data exchange between platforms.</li>
            <li>Sales Data Import System: Developed a Windows Form Application and Console Application in C# to automate the import of sales data from e-commerce websites into the respective databases, scheduled to run daily and monthly via Windows Task Scheduler.</li>
            <li>Static Web Pages & JSON-Powered Webpage Project: Developed static web pages and a JSON-powered webpage project using React.js, improving website interactivity and data handling.</li>
          </ul>
        </div>
        {/* DynamicWeb APAC */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400">Web Developer</h3>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-sm mb-2">
            <span>DynamicWeb APAC, Yangon</span>
            <span>Oct 2018 – Oct 2021</span>
          </div>
          <ul className="list-disc pl-6 text-gray-200 space-y-1">
            <li>Collaborated with both local and international colleagues, including teams from Myanmar, on various e-commerce projects.</li>
            <li>Successfully developed multiple e-commerce platforms using the Dynamic Web Ecommerce Engine, ensuring integration with payment providers (2C2P) and shipping providers (Marathon, Ninja Van).</li>
            <li>Developed and integrated REST APIs to support mobile applications, improving the overall e-commerce ecosystem.</li>
            <li>Played a key role in maintaining and enhancing site performance, optimizing functionality, and ensuring smooth operations of the platforms.</li>
            <li>Coordinated cross-functional activities, including integration, API development, business logic implementation, and frontend design, while contributing to all stages of the software development lifecycle.</li>
          </ul>
          <div className="mt-2 text-gray-300 font-semibold">Key Projects:</div>
          <ul className="list-disc pl-8 text-gray-200 space-y-1">
            <li>Pet Lovers Centre (www.petloverscentre.com):
              <ul className="list-disc pl-6">
                <li>Developed and maintained the site using C#, ASP.NET, Razor, and frontend technologies (HTML, CSS, JS).</li>
                <li>Ensured optimal site performance, functionality, and user experience through continuous enhancements and monitoring.</li>
              </ul>
            </li>
            <li>Commune Life (thecommunelife.com):
              <ul className="list-disc pl-6">
                <li>Worked as the main developer, focusing on API development, business logic, and frontend design.</li>
                <li>Enhanced system performance and ensured seamless integration between backend and frontend components.</li>
              </ul>
            </li>
            <li>Lasource Group Myanmar (lasource.com.mm):
              <ul className="list-disc pl-6">
                <li>Led the integration of payment providers and shipping providers to streamline the checkout process.</li>
                <li>Developed various sales report systems for the sellers, improving data management and decision-making.</li>
              </ul>
            </li>
            <li>LPG Gas Singapore Delivery & Sales Management System:
              <ul className="list-disc pl-6">
                <li>Developed an internal delivery and sales management system.</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Acroquest Myanmar */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400">Intern – Java Developer</h3>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-sm mb-2">
            <span>Acroquest Myanmar</span>
            <span>May 2018 – Jul 2018</span>
          </div>
          <ul className="list-disc pl-6 text-gray-200 space-y-1">
            <li>JUnit Testing & Automated Testing: Created and maintained JUnit test cases to verify software functionality and reliability. Conducted thorough testing using automated tools to identify bugs, streamline the testing process, and enhance system performance.</li>
            <li>Server-Side Development: Developed and supported server-side functions using Java and the Spring Framework to ensure robust, scalable, and efficient software.</li>
            <li>Learned about Japanese work culture, team collaboration, and quality-focused development practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
