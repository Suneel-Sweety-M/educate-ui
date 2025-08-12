import { useState, useEffect, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { gsap } from "gsap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const slideRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (role) => {
    setFormData({ ...formData, role });
  };

  useEffect(() => {
    const slide = slideRef.current;
    const xPosition = formData.role === "student" ? 0 : 100; // 100px for Teacher (width of each label)
    const background = formData.role === "student"
      ? 'linear-gradient(45deg, #0000ff, #000000)'
      : 'linear-gradient(45deg, #ff0000, #000000)';
    
    gsap.to(slide, {
      x: xPosition,
      background: background,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [formData.role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", formData);
      toast.success(response.data.message);
      navigate("/verify-otp", { state: { email: formData.email } });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: formData.role === "teacher" 
        ? 'linear-gradient(45deg, #ff0000, #000000)'
        : 'linear-gradient(45deg, #0000ff, #000000)',
      backgroundSize: 'cover',
      backgroundColor: 'transparent',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '400px',
        width: '100%',
        padding: '20px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <img
            src="/digital.png"
            alt="Digital Launchpad Logo"
            style={{ height: '60px' }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#212121',
            borderRadius: '12px',
            padding: '4px',
            position: 'relative',
            width: '200px',
            height: '40px',
            overflow: 'hidden'
          }}>
            <div
              ref={slideRef}
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '96px',
                height: '32px',
                background: formData.role === "student" 
                  ? 'linear-gradient(45deg, #011669, #00000)' 
                  : 'linear-gradient(45deg, #ff0000, #000000)',
                borderRadius: '8px',
                zIndex: 1
              }}
            />
            <label
              onClick={() => handleToggle("student")}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: formData.role === "student" ? '#fff' : '#b8b8b8',
                background: 'transparent',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              Student
            </label>
            <label
              onClick={() => handleToggle("teacher")}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: formData.role === "teacher" ? '#fff' : '#b8b8b8',
                background: 'transparent',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              Teacher
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '28px' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              style={{
                padding: '8px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '9999px',
                textAlign: 'center',
                border: 'none',
                width: '100%',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="axxxxx@gmail.com"
              style={{
                padding: '8px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '9999px',
                textAlign: 'center',
                border: 'none',
                width: '100%',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              style={{
                padding: '8px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '9999px',
                textAlign: 'center',
                border: 'none',
                width: '100%',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '20px',
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              padding: '8px',
              borderRadius: '9999px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              opacity: isLoading ? '0.6' : '1',
              width: '100%',
              boxSizing: 'border-box'
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                style={{
                  animation: 'spin 1s linear infinite',
                  height: '20px',
                  width: '20px',
                  marginRight: '8px',
                  color: '#000'
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  style={{ opacity: '0.25' }}
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  style={{ opacity: '0.75' }}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              "Sign Up"
            )}
          </button>

          <div style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <Link
              to="/forgot-password"
              style={{
                color: '#93c5fd',
                fontSize: '13px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Forgot password?
            </Link>
            <Link
              to="/login"
              style={{
                color: '#93c5fd',
                fontSize: '13px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Have an account? Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;