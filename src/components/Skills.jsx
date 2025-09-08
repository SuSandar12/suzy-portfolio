import React from "react";
import { FileText, Code, Monitor, Database, Wrench, ShoppingCart, Repeat } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-primary-pink mb-8 text-center">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Requirement Gathering & Analysis */}
  <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <FileText className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Requirement Gathering & Analysis</h3>
            <p className="text-white text-sm">Engaging business users, documenting requirements, translating into technical specs.</p>
          </div>
        </div>
        {/* Languages & Frameworks */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Code className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Languages & Frameworks</h3>
            <p className="text-white text-sm">C#, ASP.NET, MVC, Razor, JavaScript, React.js, Next.js, AL Language</p>
          </div>
        </div>
        {/* Frontend */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Monitor className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Frontend</h3>
            <p className="text-white text-sm">HTML5, CSS3, JavaScript, Ajax, jQuery, Bootstrap, Tailwind</p>
          </div>
        </div>
        {/* Backend & Integration */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Repeat className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Backend & Integration</h3>
            <p className="text-white text-sm">RESTful APIs, Entity Framework, Windows Forms</p>
          </div>
        </div>
        {/* Databases */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Database className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Databases</h3>
            <p className="text-white text-sm">SQL Server, MSSQL</p>
          </div>
        </div>
        {/* Tools */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Wrench className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Tools</h3>
            <p className="text-white text-sm">Git, Bitbucket, Git Extension, Visual Studio, Postman, Windows Task Scheduler, Jira, Azure DevOps, CI/CD</p>
          </div>
        </div>
        {/* Ecommerce & ERP Systems */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <ShoppingCart className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Ecommerce & ERP Systems</h3>
            <p className="text-white text-sm">Microsoft Dynamics 365 Business Central, Dynamicweb Content Management System</p>
          </div>
        </div>
        {/* Methodologies */}
        <div className="bg-black rounded-xl shadow p-6 flex items-start gap-4">
          <Repeat className="w-8 h-8 text-primary-pink mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-primary-pink mb-1">Methodologies</h3>
            <p className="text-white text-sm">Agile / Scrum, Test-Driven Development (TDD)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
