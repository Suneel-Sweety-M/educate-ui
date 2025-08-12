import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/api/auth/reset-password/${token}`, formData);
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to reset password";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #0000ff, #000000)',
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
        <h1 style={{
          color: '#fff',
          fontSize: '36px',
          fontWeight: '800'
        }}>Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '20px' }}>
            <label style={{
              color: '#fff',
              fontSize: '13px'
            }}>New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
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
              backgroundColor: '#4b5563',
              color: '#fff',
              padding: '8px',
              borderRadius: '9999px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
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
                  color: '#fff'
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
              "Change Password"
            )}
          </button>
        </form>

        <p style={{
          marginTop: '28px',
          color: '#fff',
          fontSize: '13px',
          textAlign: 'center'
        }}>
          Back to{" "}
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

export default ChangePassword;