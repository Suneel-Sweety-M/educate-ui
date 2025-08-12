import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import OurMission from "./pages/OurMission";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import VerifyOTP from "./pages/VerifyOTP";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCourseAdd from "./components/admin/courses/AdminCourseAdd";
import AdminCourses from "./components/admin/courses/AdminCourses";
import AdminNotifications from "./components/admin/dashboard/AdminNotifications";
import AdminProfile from "./components/admin/dashboard/AdminProfile";
import AdminCourseView from "./components/admin/courses/AdminCourseView";
import AdminCourseEdit from "./components/admin/courses/AdminCourseEdit";
import AdminLectures from "./components/admin/lectures/AdminLectures";
import AdminLectureAdd from "./components/admin/lectures/AdminLectureAdd";
import AdminLectureEdit from "./components/admin/lectures/AdminLectureEdit";
import StudentLectureView from "./components/student/StudentLectureView";
import { ToastBar, Toaster } from "react-hot-toast";

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
<Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
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

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/course/add" element={<AdminCourseAdd />} />
        <Route
          path="/admin/course/:courseId/view"
          element={<AdminCourseView />}
        />
        <Route
          path="/admin/course/:courseId/edit"
          element={<AdminCourseEdit />}
        />

        <Route
          path="/admin/course/:courseId/lectures"
          element={<AdminLectures />}
        />
        <Route
          path="/admin/course/:courseId/lectures/add"
          element={<AdminLectureAdd />}
        />
        <Route
          path="/admin/course/:courseId/edit-lectures"
          element={<AdminLectureEdit />}
        />

        <Route
          path="/student/lecture/:courseId/:videoId/view"
          element={<StudentLectureView />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
