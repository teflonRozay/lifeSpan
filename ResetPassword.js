import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [codeDigits, setCodeDigits] = useState(["", "", "", ""]);
  const [verificationError, setVerificationError] = useState("");
  const navigate = useNavigate();
  const baseUrl = 'http://64.225.93.242:8080/api/v1'

  const handleChange = (e, index) => {
    const newCodeDigits = [...codeDigits];
    newCodeDigits[index] = e.target.value;
    setCodeDigits(newCodeDigits);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = codeDigits.join("");

    try {
      const response = await fetch(`${baseUrl}/auth/validate-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token:verificationCode,
          triggerEvent:'confirm-reset-password'
        }),
      });

      if (response.ok) {
        navigate("/PasswordUpdate"); // Navigate to the new password page
      } else {
        setVerificationError("Incorrect verification code. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setVerificationError("An error occurred while verifying the code.");
    }
  };

  return (
    <div>
      <h2>Verify Email</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Verification Code:</label>
        <div>
          {codeDigits.map((digit, index) => (
            <input
              key={index}
              type="number"
              min="0"
              max="9"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              required
              style={{ width: "2em", textAlign: "center" }}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      {verificationError && <p style={{ color: "red" }}>{verificationError}</p>}
    </div>
  );
};

export default ResetPassword;
