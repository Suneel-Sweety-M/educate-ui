import React from "react";
import JobCard from "../components/career/JobCard";
import '../components/career/career.css';


const Careers = () => {
  const jobs = [
    {
      id: 1,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/Vlog-Editor-Thumbnail-1-p-1080.jpg",
    },
    {
      id: 2,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/CLOSER-min-p-1080.jpg"
    },
    {
      id: 3,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/666a12bf627c78759b8ca105_Video-Editor-p-1080.webp",
    },
    {
      id: 4,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/Educate-p-1080.png",
    },
    {
      id: 5,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/Educate_1-p-1080.png",
    },
    {
      id: 6,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/Educate_2-p-1080.png"
    },
    {
      id: 7,
      location: "Remote",
      type: "Full-time",
      image: "https://educate.io/images/Educate_3-p-1080.png",
    }
  ];
  document.title = "Open Roles - Educate"
  return (
    <div className="bg-black">
      <div className="careers-container">
        <h1 className="careers-title">OPEN ROLES</h1>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
