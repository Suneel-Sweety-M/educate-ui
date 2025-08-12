import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").split("").slice(0, 4);
    if (paste.every(char => /^[0-9]$/.test(char))) {
      setOtp(paste);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const otpCode = otp.join("");
    
    try {
      const response = await axios.post("http://localhost:8000/api/auth/verify-otp", {
        email,
        otp: otpCode
      });
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "OTP verification failed";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/auth/resend-otp", { email });
      toast.success(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to resend OTP";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a2a 0%, #000033 50%, #0a0a2a 100%)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        backgroundColor: 'rgba(10, 10, 42, 0.8)',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 51, 0.5)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          <img
            src="/images/pl.webp"
            alt=""
            style={{ height: '60px' }}
          />
        </div>

        <h2 style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '28px',
          textShadow: '0 0 10px rgba(100, 149, 237, 0.5)'
        }}>Enter OTP</h2>
        <p style={{
          color: '#a0a0ff',
          textAlign: 'center',
          marginTop: '8px'
        }}>A 4-digit code was sent to {email}</p>

        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px'
          }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                style={{
                  width: '48px',
                  height: '48px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(20, 20, 60, 0.8)',
                  color: '#fff',
                  borderRadius: '6px',
                  border: '1px solid #6495ed',
                  fontSize: '18px',
                  boxSizing: 'border-box',
                  boxShadow: '0 0 10px rgba(100, 149, 237, 0.3)'
                }}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            style={{
              marginTop: '20px',
              backgroundColor: '#6495ed',
              color: '#fff',
              fontWeight: 'bold',
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              cursor: isLoading || otp.some(digit => !digit) ? 'not-allowed' : 'pointer',
              border: 'none',
              opacity: isLoading || otp.some(digit => !digit) ? '0.6' : '1',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 10px rgba(100, 149, 237, 0.5)'
            }}
            disabled={isLoading || otp.some(digit => !digit)}
            onMouseOver={(e) => !isLoading && !otp.some(digit => !digit) && (e.target.style.backgroundColor = '#4169e1')}
            onMouseOut={(e) => !isLoading && !otp.some(digit => !digit) && (e.target.style.backgroundColor = '#6495ed')}
          >
            {isLoading ? (
              <svg
                style={{
                  animation: 'spin 1s linear infinite',
                  height: '20px',
                  width: '20px',
                  marginRight: '8px',
                  display: 'inline-block',
                  verticalAlign: 'middle'
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
              "Verify OTP"
            )}
          </button>
        </form>

        <button
          onClick={handleResend}
          style={{
            marginTop: '12px',
            color: '#6495ed',
            fontSize: '14px',
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? '0.6' : '1',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => !isLoading && (e.target.style.textDecoration = 'underline')}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          disabled={isLoading}
        >
          Didn't receive code? <span style={{ fontWeight: 'bold' }}>Resend OTP</span>
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;