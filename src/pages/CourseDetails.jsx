// import React from 'react';
// import '../components/course-details/courseDetails.css'; // CSS path
// import Footer from '../components/footer/Footer';
// import Navbar from '../components/navbar/Navbar';


// const CourseDetails = () => {
//   return (
//     <div className="course-container">
//       <Navbar/>
//       {/* Hero Section */}
//       <section className="hero-container">
//         <img src="/suji.webp" alt="Hero" className="hero-image" />
//         <div className="hero-content">
//           <img src="/rocket.png" alt="Rocket" className="rocket" />
//         </div>
//       </section>


//       {/* Summary Section */}
//       <section className="summary">
//         <h2>Summary</h2>
//         <p>
//           Iman Gadzhi's Digital Launchpad equips you for success. It tackles common obstacles
//           that hold most people back. Learn Iman's unique 7-minute exercise to jumpstart your
//           journey and develop the right mindset. The program also guides you in choosing the
//           perfect business model for your personality type.
//         </p>
//         <p>
//           Following the foundational training, Iman dives deep into his productivity techniques.
//           Master his "monk mode" strategy for laser focus and peak performance through a detailed
//           breakdown of his daily schedule.
//         </p>
//         <div className="highlight">
//           Digital Launchpad is Iman Gadzhi's introductory program to break free from the bad
//           habits that keep you stuck so you can unlock your full potential.
//         </div>
//         <p>
//           Digital Launchpad will help you overcome the roadblocks to success. The program tackles
//           common pitfalls, provides a unique success exercise, and guides you on choosing the
//           right career path. You'll also learn Iman's high-productivity "monk mode" strategy and
//           discover the top 3 paths to make your first $1,000 online, tailored to your personality
//           type, for a maximized chance of success.
//         </p>
//       </section>
//       <hr className="white-line" />

//       {/* Skills Section */}
//       <section className="skills">
//         <h2>Skills</h2>
//         <ul>
//           <li>Break Bad Habits</li>
//           <li>Overcome Roadblocks</li>
//           <li>Success Mindset</li>
//           <li>Business Models</li>
//           <li>Monk Mode</li>
//           <li>Design Dream Life</li>
//           <li>Online Income</li>
//         </ul>
//       </section>
//       <hr className="white-line" />

//       {/* Curriculum Section */}
//       <section className="curriculum">
//         {/* <h2>Curriculum</h2>
//         <div className="module">
//           <h3>Module 1: How To Unf*ck Your Life (27 Minutes)</h3>
//           <p>Explore common roadblocks and follow a 7-minute exercise to break free...</p>
//         </div>
//         <div className="module">
//           <h3>Module 2: Monk Mode (1 Hour)</h3>
//           <p>Master Iman's daily routine and learn how to implement the same focus strategies...</p>
//         </div>
//         <div className="module">
//           <h3>Module 3: Your First $1,000 (19 Minutes)</h3>
//           <p>Design your dream life and choose the right earning path for your personality...</p>
//         </div> */}
//          <h2>Curriculum</h2>
//         <div className="module">
//           <h3>Module 1: How To Unf*ck Your Life (27 Minutes)</h3>
//           <p>Explore common roadblocks and follow a 7-minute exercise to break free...</p>
       
       
//           <h3>Module 2: Monk Mode (1 Hour)</h3>
//           <p>Master Iman's daily routine and learn how to implement the same focus strategies...</p>
        
//           <h3>Module 3: Your First $1,000 (19 Minutes)</h3>
//           <p>Design your dream life and choose the right earning path for your personality...</p>
//         </div>
//       </section>
//       <hr className="white-line" />

//       {/* Instructor Section */}
//       <section className="instructor">
//         <h2>Instructor</h2>
//         <img src="/Iman.webp" alt="Iman Gadzhi" className="instructor-image" />
//         <h3>Iman Gadzhi</h3>
//         <p>
//           Iman Gadzhi is a British entrepreneur originally from Dagestan, Russia. He overcame early financial
//           hardships to become a prominent figure in digital marketing and education. Starting by trading Instagram
//           accounts at 15, he expanded into fitness training and social media management before founding IAG
//           Media, a successful digital marketing agency.
//         </p>
//         <p>
//           He further established GrowYourAgency, an e-learning platform for agency owners, GADZHI, a brand
//           offering blue light-blocker glasses, Flozy, a software solutions company, and in 2023, launched Educate.io
//           for teaching high-income skills.
//         </p>
//         <p>
//           Additionally, Iman is a dedicated philanthropist, funding the construction of schools in Nepal and
//           participating in fundraising marathons to support rural education, underscoring his impact on both
//           business and global education.
//         </p>
//       </section>
      

//       <Footer/>


//     </div>
//   );
// };

// export default CourseDetails;
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../components/course-details/courseDetails.css'; 
// import Footer from '../components/footer/Footer';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const CourseDetails = () => {
  const launchpadImageRef = useRef();
  const launchpadHeadingRef = useRef();

  // GSAP animation for launchpad image
  useEffect(() => {
    const image = launchpadImageRef.current;
    if (!image) return;

    const handleMouseMoveImage = (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * 10;
      const rotateY = -(x / rect.width) * 10;

      gsap.to(image, {
        scale: 1.05,
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeaveImage = () => {
      gsap.to(image, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    image.addEventListener('mousemove', handleMouseMoveImage);
    image.addEventListener('mouseleave', handleMouseLeaveImage);

    return () => {
      image.removeEventListener('mousemove', handleMouseMoveImage);
      image.removeEventListener('mouseleave', handleMouseLeaveImage);
    };
  }, []);

  // GSAP animation for launchpad heading
  useEffect(() => {
    if (launchpadHeadingRef.current) {
      try {
        gsap.fromTo(
          launchpadHeadingRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
        );
      } catch (error) {
        console.error('GSAP launchpad heading animation error:', error);
      }
    } else {
      console.warn('Launchpad heading ref is not set');
    }
  }, []);

  return (
    <div className="course-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-container">
        <img src="/suji.webp" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <img src="/rocket.png" alt="Rocket" className="rocket" />
        </div>
      </section>

      {/* Summary Section */}
      <section className="summary">
        <h2>Summary</h2>
        <p>
          Iman Gadzhi's Digital Launchpad equips you for success. It tackles common obstacles
          that hold most people back. Learn Iman's unique 7-minute exercise to jumpstart your
          journey and develop the right mindset. The program also guides you in choosing the
          perfect business model for your personality type.
        </p>
        <p>
          Following the foundational training, Iman dives deep into his productivity techniques.
          Master his "monk mode" strategy for laser focus and peak performance through a detailed
          breakdown of his daily schedule.
        </p>
        <div className="highlight">
          Digital Launchpad is Iman Gadzhi's introductory program to break free from the bad
          habits that keep you stuck so you can unlock your full potential.
        </div>
        <p>
          Digital Launchpad will help you overcome the roadblocks to success. The program tackles
          common pitfalls, provides a unique success exercise, and guides you on choosing the
          right career path. You'll also learn Iman's high-productivity "monk mode" strategy and
          discover the top 3 paths to make your first $1,000 online, tailored to your personality
          type, for a maximized chance of success.
        </p>
      </section>
      <hr className="white-line" />

      {/* Skills Section */}
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
      <hr className="white-line" />

      {/* Curriculum Section */}
      <section className="curriculum">
        <h2>Curriculum</h2>
        <div className="module">
          <h3>Module 1: How To Unf*ck Your Life (27 Minutes)</h3>
          <p>Explore common roadblocks and follow a 7-minute exercise to break free...</p>
          <h3>Module 2: Monk Mode (1 Hour)</h3>
          <p>Master Iman's daily routine and learn how to implement the same focus strategies...</p>
          <h3>Module 3: Your First $1,000 (19 Minutes)</h3>
          <p>Design your dream life and choose the right earning path for your personality...</p>
        </div>
      </section>
      <hr className="white-line" />

      {/* Instructor Section */}
      <section className="instructor">
        <h2>Instructor</h2>
        <img src="/Iman.webp" alt="Iman Gadzhi" className="instructor-image" />
        <h3>Iman Gadzhi</h3>
        <p style={{ fontSize: '16px', color: '#ccc', textAlign: 'left', margin: '0 0 16px 0' }}>
          Iman Gadzhi is a British entrepreneur originally from Dagestan, Russia. He overcame early financial
          hardships to become a prominent figure in digital marketing and education. Starting by trading Instagram
          accounts at 15, he expanded into fitness training and social media management before founding IAG
          Media, a successful digital marketing agency.
        </p>
        <p style={{ fontSize: '16px', color: '#ccc', textAlign: 'left', margin: '0 0 16px 0' }}>
          He further established GrowYourAgency, an e-learning platform for agency owners, GADZHI, a brand
          offering blue light-blocker glasses, Flozy, a software solutions company, and in 2023, launched Educate.io
          for teaching high-income skills.
        </p>
        <p style={{ fontSize: '16px', color: '#ccc', textAlign: 'left', margin: '0 0 16px 0' }}>
          Additionally, Iman is a dedicated philanthropist, funding the construction of schools in Nepal and
          participating in fundraising marathons to support rural education, underscoring his impact on both
          business and global education.
        </p>
      </section>
      <hr className="white-line" />

      {/* Launchpad Section */}
      <section className="launchpad-section">
        <div className="container">
          <div className="launchpad-content">
            <h3 className="launchpad-heading" ref={launchpadHeadingRef}>
              Ready to <br /> start DIGITAL LAUNCHPAD?
            </h3>
            <button
              className="launchpad-button"
              // onClick={() => window.open('https://join.digital-launchpad.com/', '_blank')}
            >
              GET STARTED TODAY
            </button>
          </div>
          <div className="launchpad-image" ref={launchpadImageRef}></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;