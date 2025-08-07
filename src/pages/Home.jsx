import React from 'react';
import Hero from '../components/home/Hero';
import CourseCard from '../components/courses/CourseCard';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CourseCard/>
    </div>
  );
};

export default Home;