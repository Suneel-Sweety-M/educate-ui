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
          marginTop: '28px'
        }}>Enter OTP</h2>
        <p style={{
          color: '#fff',
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
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '18px',
                  boxSizing: 'border-box'
                }}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            style={{
              marginTop: '20px',
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              width: '100%',
              padding: '8px',
              borderRadius: '9999px',
              cursor: isLoading || otp.some(digit => !digit) ? 'not-allowed' : 'pointer',
              border: 'none',
              opacity: isLoading || otp.some(digit => !digit) ? '0.6' : '1'
            }}
            disabled={isLoading || otp.some(digit => !digit)}
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
            color: '#fff',
            fontSize: '14px',
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? '0.6' : '1'
          }}
          onMouseOver={(e) => e.target.style.textDecoration = isLoading ? 'none' : 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          disabled={isLoading}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;