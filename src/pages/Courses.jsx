import React, { useState } from 'react';
import '../components/courses/courses.css';
import { useNavigate } from 'react-router-dom';

const HoverVideoCard = ({ course, video, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (slug) {
      navigate(`/programs/${slug}`);
    }
  };

  return (
    <div
      className="program-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="program-image-container">
        <img
          src={course.image}
          alt={course.title}
          className="program-image"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="program-video"
            style={{ opacity: isHovered ? 1 : 0 }}
            preload="none"
          />
        )}
      </div>
      <div className="program-content">
        <div className="program-title-row">
          {course.logo && <img src={course.logo} alt="badge" className="program-logo-badge" />}
          <h2 className="program-title">{course.title}</h2>
        </div>
        <div className="program-instructor">{course.instructor}</div>
      </div>
    </div>
  );
};

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'DIGITAL LAUNCHPAD',
      instructor: 'Iman Gadzhi',
      image: '/img2.png',
      logo: '/logo1.png',
      video: 'https://uploads-ssl.webflow.com/665b73119387617f4ef9f5b7%2F6669b101f5364ee789663a76_Digital%20Launchpad%20Sneak-transcode.mp4',
      slug: 'digital-launchpad',
    },
    {
      id: 2,
      title: 'THE WINNING STORE',
      instructor: 'Jordan Welch',
      image: '/img3.png',
      logo: '/logo2.png',
      video: 'https://uploads-ssl.webflow.com/665b73119387617f4ef9f5b7%2F665b76efc8e3e6fdae0ba6b4_1717077121684726-transcode.mp4',
      slug: 'the-winning-store',
    },
    {
      id: 3,
      title: 'PATHWAY TO PROFITS',
      instructor: 'Waqar Asim',
      image: '/img4.png',
      logo: '/logo3.png',
      video: 'https://uploads-ssl.webflow.com/665b73119387617f4ef9f5b7%2F666a1071cf97b5b7c4cc9d22_Pathway%20To%20Profits%20Sneak-transcode.mp4',
      slug: 'pathway-to-profits',
    },
    {
      id: 4,
      title: 'SIX FIGURE SALES REP',
      instructor: 'Paul Daley',
      image: '/img5.png',
      logo: '/logo3.png',
      slug: 'six-figure-sales-rep',
    },
    {
      id: 5,
      title: 'AD ARCHITECT',
      instructor: 'Justin Lalonde',
      image: '/img6.png',
      logo: '/logo3.png',
      slug: 'ad-architect',
    },
    {
      id: 6,
      title: 'PEN TO PROFIT',
      instructor: 'Luis Berger',
      image: '/img7.png',
      logo: '/logo3.png',
      slug: 'pen-to-profit',
    },
    {
      id: 7,
      title: 'AGENCY NAVIGATOR',
      instructor: 'Alex Fedotoff',
      image: '/img8.png',
      logo: '/logo2.png',
      slug: 'agency-navigator',
    },
    {
      id: 8,
      title: 'COPY PASTE AGENCY',
      instructor: 'Niklas Pedde',
      image: '/img9.png',
      logo: '/logo2.png',
      slug: 'copy-paste-agency',
    },
    {
      id: 9,
      title: 'E-COM EMPIRE',
      instructor: 'Sebastian Ghiorghiu',
      image: '/img10.png',
      logo: '/logo2.png',
      slug: 'ecom-empire',
    },
    {
      id: 10,
      title: 'SOCIAL MEDIA MASTERY',
      instructor: 'Jason Wardrop',
      image: '/img11.png',
      logo: '/logo1.png',
      slug: 'social-media-mastery',
    },
    {
      id: 11,
      title: 'HIGH TICKET CLOSER',
      instructor: 'Dan Lok',
      image: '/img12.png',
      logo: '/logo1.png',
      slug: 'high-ticket-closer',
    }
  ];

  return (
    <div className="programs-page">
      <div className="programs-header">
        <div className="programs-title">
          <img src="/launchpad.webp" alt="Digital Launchpad" className="programs-logo" width="20%" />
        </div>
      </div>

      <div className="programs-container">
        <div className="programs-grid">
          {courses.map((course) => (
            <HoverVideoCard 
              key={course.id} 
              course={course} 
              video={course.video} 
              slug={course.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;