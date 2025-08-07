import React from 'react';
import '../components/course-details/courseDetails.css'; // Correct path to CSS

const CourseDetails = () => {
  return (
    <div className="course-container">
      <header>
        <div className="logo">EDUCATE</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#mission">Our Mission</a>
          <a href="#career">Career</a>
          <a href="#login" className="login">Student Login</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>DIGITAL LAUNCHPAD</h1>
          <img src="/rocket.png" alt="Rocket" className="rocket" />
        </div>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>Iman Gadzhi's Digital Launchpad equips you for success. It tackles common obstacles that hold most people back. Learn Iman's unique 7-minute exercise to jumpstart your journey and develop the right mindset. The program also guides you in choosing the perfect business model for your personality type.</p>
        <p>Following the foundational training, Iman dives deep into his productivity techniques. Master his "monk mode" strategy for laser focus and peak performance through a detailed breakdown of his daily schedule.</p>
        <p>Digital Launchpad is Iman Gadzhi's introductory program to break free from the bad habits that keep you stuck so you can unlock your full potential.</p>
        <p>Digital Launchpad will help you overcome the roadblocks to success. The program tackles common pitfalls, provides a unique success exercise, and guides you on choosing the right career path. You'll also learn Iman's high-productivity "monk mode" strategy and discover the top 3 paths to make your first $1,000 online, tailored to your personality type, for a maximized chance of success.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Break Bad Habits</li>
          <li>Overcome Roadblocks</li>
          <li>Success Mindset</li>
          <li>Business Models</li>
          <li>Monk Mode</li>
          <li>Design Dream Life</li>
          <li>Online Income</li>
        </ul>
      </section>

      <section className="curriculum">
        <h2>Curriculum</h2>
        <div className="module">
          <h3>Module 1: How To Unf*ck Your Life (27 Minutes)</h3>
          <p>This module explores the roadblocks holding you back. Iman outlines five common obstacles and guides you through a 7-minute exercise to break free and jumpstart your journey. He advises avoiding specific business models as a beginner, ensuring you choose the right path.</p>
        </div>
        <div className="module">
          <h3>Module 2: Monk Mode (1 Hour)</h3>
          <p>Unleash your full potential with Iman's exclusive "monk mode" protocol. This module offers unprecedented transparency, detailing his daily schedule hour by hour. Witness how he achieves laser focus to reach incredible heights, and learn the tools you need to master this technique and surpass the competition.</p>
        </div>
        <div className="module">
          <h3>Phase 3: Your First $1,000 (19 Minutes)</h3>
          <p>Have you ever wondered how to make your dream life a reality? Iman unveils his most powerful tool to help you design and manifest your vision. He dives into the 3 best paths to making your first $1,000 online. Each path is tailored to different personality types, so you can choose the one that best suits you. This personalized approach dramatically increases your odds of success.</p>
        </div>
      </section>

      <section className="instructor">
        <h2>Instructor</h2>
        <h3>Iman Gadzhi</h3>
        <p>Iman Gadzhi is a British entrepreneur originally from Dagestan, Russia. He overcame early financial hardships to become a prominent figure in digital marketing and education. Starting by trading Instagram accounts at 15, he expanded into fitness training and social media management before founding IAG Media, a successful digital marketing agency.</p>
        <p>He further established GrowYourAgency, an e-learning platform for agency owners, GADZHI, a brand offering blue light-blocker glasses, Flozy, a software solutions company, and in 2023, launched Educate.io for teaching high-income skills.</p>
      </section>
    </div>
  );
};

export default CourseDetails;
