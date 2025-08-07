import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import OurMission from './pages/OurMission';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';

import React from 'react';

function AppContent() {
  const location = useLocation();

  // List of routes where footer should be hidden
  const hideFooterRoutes = ['/'];

  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ChangePassword />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/:id" element={<CareerDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <AppContent />
    </React.StrictMode>
  );
}

export default App;