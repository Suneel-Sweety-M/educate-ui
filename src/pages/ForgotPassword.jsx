import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/auth/forgot-password", { email });
      toast.success(response.data.message);
      setEmail("")
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to send reset link";
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
        <h1 style={{
          color: '#fff',
          fontSize: '36px',
          fontWeight: '800'
        }}>Forgot Password</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '20px' }}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
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
              padding: '8px 24px',
              borderRadius: '0.75rem',
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
              "Send Reset Link"
            )}
          </button>
        </form>

        <p style={{
          marginTop: '28px',
          color: '#fff',
          fontSize: '13px',
          textAlign: 'center'
        }}>
          Remember your password?{" "}
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

export default ForgotPassword;