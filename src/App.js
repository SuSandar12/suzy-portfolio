
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import JobExperience from "./components/JobExperience";
import Activities from "./components/Activities";
import ActivityModal from "./components/ActivityModal";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div id="app">
      <Nav/>
      <main className="pb-20">
      <Banner />
      <About />
      <Skills />
      <Education/>
      <JobExperience />     
      <Activities onSelect={setSelectedActivity} />
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
      </main>
      <Footer />
    </div>
  );
}

