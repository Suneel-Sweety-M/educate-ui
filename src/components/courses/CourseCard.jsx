import React from 'react';
import '../home/home.css'; // Import home.css instead of courses.css

const CourseCard = () => {
  const programs = [
    { title: 'DIGITAL LAUNCHPAD', highlight: 'AGENCY ACCELERATOR' },
    { title: 'PATHWAY TO PROFITS', highlight: 'E-COMMERCE MASTERY' },
    { title: 'THE WINNING STORE', highlight: 'DROPSHIPPING BLUEPRINT' }
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        {programs.map((program, index) => (
          <div key={index} className="course-card">
            {/* <h2 className="course-title">{program.title}</h2>
            <p className="course-highlight">{program.highlight}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCard;