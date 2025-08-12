
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './OurMission.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function OurMission() {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const statRef = useRef();
  const philanthropyImagesRef = useRef();
  const marathonImagesRef = useRef();
  const launchpadImageRef = useRef();
  const headingRef = useRef();
  const launchpadHeadingRef = useRef(); // New ref for launchpad heading

  // Stat counter useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          const duration = 2000;
          const end = 30000;
          const increment = 150;
          let current = 0;

          const totalSteps = Math.floor(end / increment);
          const stepTime = Math.max(16, duration / totalSteps);

          const counter = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(counter);
            }
            setCount(current);
          }, stepTime);

          setHasCounted(true);
          const currentRef = statRef.current;
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.5, rootMargin: '100px' }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) observer.unobserve(statRef.current);
    };
  }, [hasCounted]);

  // Philanthropy images animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.5, rootMargin: '50px' }
    );

    if (philanthropyImagesRef.current) {
      observer.observe(philanthropyImagesRef.current);
    }

    return () => {
      if (philanthropyImagesRef.current) observer.unobserve(philanthropyImagesRef.current);
    };
  }, []);

  // Marathon images animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.5, rootMargin: '50px' }
    );

    if (marathonImagesRef.current) {
      observer.observe(marathonImagesRef.current);
    }

    return () => {
      if (marathonImagesRef.current) observer.unobserve(marathonImagesRef.current);
    };
  }, []);

  // Handle mousemove for philanthropy and marathon images
  const handleMouseMove = (e) => {
    const images = e.currentTarget.getElementsByTagName('img');
    for (let img of images) {
      img.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = (e) => {
    const images = e.currentTarget.getElementsByTagName('img');
    for (let img of images) {
      img.style.transform = 'scale(1)';
    }
  };

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

  // GSAP animation for mission header
  useEffect(() => {
    if (headingRef.current) {
      try {
        gsap.fromTo(
          headingRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        );
      } catch (error) {
        console.error('GSAP animation error:', error);
      }
    } else {
      console.warn('Heading ref is not set');
    }
  }, []);

  // GSAP animation for launchpad heading
  useEffect(() => {
    if (launchpadHeadingRef.current) {
      try {
        gsap.fromTo(
          launchpadHeadingRef.current,
          { x: -100, opacity: 0 }, // Start: 100px left, transparent
          { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 } // End: original position, opaque
        );
      } catch (error) {
        console.error('GSAP launchpad heading animation error:', error);
      }
    } else {
      console.warn('Launchpad heading ref is not set');
    }
  }, []);

  return (
    <div className="our-mission">
      <Navbar/>
      <div className="text-hole">
        <section className="mission-header">
             
          <div className="sujicontainer" style={{ marginTop: '120px' }}>
            <h1 ref={headingRef}>To Revolutionize The Education System</h1>
            <p style={{ marginTop: '-10px' }}>
              One student at a time, we hope to empower the next generation of <pre style={{ marginTop: '4px' }}>entrepreneurs.</pre>
            </p>
          </div>
        </section>

        <section className="mission-stats" style={{ marginTop: '100px' }}>
          <div className="sujicontainer">
            <div className="stat-box" ref={statRef}>
              <div className="stat-number">
                <span>{count.toLocaleString()}</span>
                <span className="plus-sign">+</span>
              </div>
              <div className="stat-text" style={{ marginRight: '100px', marginTop: '40px' }}>
                <p>Total Number of Students <pre style={{ marginTop: '4px' }}>transformed through our programs</pre></p>
              </div>
            </div>
          </div>
        </section>
        <hr className="white-line" />

        <section className="mission-founder">
          <div className="sujicontainer">
            <div className="founder-text">
              <p className="founder-name"> Iman Gadzhi</p>
              <h2 className="founder-title">Our Founder</h2>
            </div>
            <div className="founder-image">
              <img src="https://educate.io/images/Iman-p-2000.webp" alt="Iman Gadzhi" />
            </div>
          </div>
        </section>
        <section className="mission-founder">
          <div className="sujicontainerr">
            <div className="founder-text">
              <p className="founder-name">HOW WE GIVE BACK</p>
              <h2 className="founder-title">PHILANTHROPY</h2>
            </div>
          </div>
        </section>
        <section className="mission-purpose">
          <div className="container_Purpose">
            <h2 style={{ marginTop: '10px', textAlign: 'left' }}>Purpose</h2>
            <div>
              <span>To Revolutionize The Education System</span>
              <p style={{ color: 'rgba(230, 230, 230, 0.6)', textAlign: 'justify' }}>
                We strive towards a simple but ambitious mission: to reform the education system by offering world-class{' '}
                <br /> learning rooted in experience and real-life application at a fraction of the cost of traditional
                academic <br /> institutions.
                <br />
                Every program we produce must adhere to our exacting standards and our commitment to students is<br /> unparalleled with direct contact to coaches and a thriving community.
              </p>
            </div>
          </div>
        </section>
        <hr className="white-line" />

        <section className="mission-journey">
          <div className="container_journey">
            <h2 style={{ marginTop: '10px', textAlign: 'left' }}>Journey</h2>
            <p style={{ color: 'rgba(230, 230, 230, 0.6)', textAlign: 'justify', marginTop: '10px', lineHeight: '2' }}>
              Educate was founded by Iman Gadzhi, a British entrepreneur and digital marketer in 2018 and has been<br />
              responsible for the education and careers of hundreds of thousands of students across the world.{''}
              <p>
                Initially specialising in agency growth and personal branding, Educate has expanded its curriculum <br />to
                support careers in a wide variety of disciplines including eCommerce, copywriting and more.<br />
              </p>
              In 2022, the organisation adopted ‘Educate’ as its official name, reflecting its mission statement
              and ethos.<br />
              In 2023, Educate launched ‘Digital Launchpad’, the world’s subscription-first e-learning portal dedicated
              to <br /> helping entrepreneurs start their career.
            </p>
          </div>
        </section>
        <hr className="white-line" />

        <section className="mission-philanthropy">
          <div className="sujicontainer">
            <div className="card">
              <div className="card-text">
                <h2>Schools in Nepal</h2>
                <p>
                  Our commitment to education extends beyond the students in our programs. Every year, we donate a
                  percentage of our profits to building physical schools in developing countries and helping to
                  support the futures of the most disadvantaged members of society.
                </p>
                <p>
                  We have partnered with charitable organisations like the Pahar Trust in the UK and Ladles of Love
                  in South Africa to build schools in Nepal and provide meals to students.
                </p>
              </div>
              <div
                className="card-images"
                ref={philanthropyImagesRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://educate.io/images/Nepal_0002_Generative-Fill-6.webp" alt="Nepal School Visit" />
                <img src="https://educate.io/images/Nepal_0003_Generative-Fill.webp" alt="Nepal from Helicopter" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-marathon">
          <div className="sujicontainer">
            <div className="card">
              <div className="card-text">
                <h2>Company Marathon</h2>
                <p>
                  At the end of 2023, 75 employees of Educate ran a marathon to raise funds for Pahar Trust Nepal,
                  enhancing education in rural areas. Iman led his team to complete three marathons across three
                  countries in a week, supporting education in Nepal, and will personally match every donation made.
                </p>
              </div>
              <div
                className="card-images"
                ref={marathonImagesRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://educate.io/images/web_0018_Generative-Fill-9-p-2000.webp" alt="Running Marathon" />
                <img src="https://educate.io/images/web_0022_Generative-Fill-p-2000.webp" alt="Team Marathon" />
              </div>
            </div>
          </div>
        </section>

        <section className="launchpad-section">
          <div className="sujicontainer">
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
      </div>
              <Footer/>

    </div>
  );
}

export default OurMission;