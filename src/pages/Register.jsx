import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      background: 'url(/images/background.jpg) no-repeat center center',
      backgroundSize: 'cover',
      backgroundColor: '#000',
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
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          <img
            src="/digital.png"
            alt=""
            style={{ height: '60px' }}
          />
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

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2px',
            gap: '10px'
          }}>
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
                  width: '300px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
            <div style={{ marginTop: '20px' }}>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={{
                  padding: '8px',
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="user">User</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
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
                borderRadius: '120px',
                textAlign: 'center',
                border: 'none',
                width: '100%',
                height:'100%',
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
              padding: '8px 24px',
              borderRadius: '9999px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              opacity: isLoading ? '0.6' : '1'
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
        </form>

        <p style={{
          marginTop: '28px',
          color: '#fff',
          fontSize: '13px',
          textAlign: 'center'
        }}>
          Have an account?{" "}
          <Link
            to="/login"
            style={{
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#fff'
            }}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;