import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
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
import VerifyOTP from './pages/VerifyOTP';

function App() {
  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ChangePassword />} />
         <Route path="/verify-otp" element={<VerifyOTP />} />
        
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
    </>
  );
}

export default App;
