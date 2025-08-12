import React from 'react';
import Hero from '../components/home/Hero';
import CourseCard from '../components/courses/CourseCard';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <Hero />
        <CourseCard />
      </div>
    </>
  );
};

export default Home;