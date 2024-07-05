import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [codeDigits, setCodeDigits] = useState(["", "", "", ""]);
  const [verificationError, setVerificationError] = useState("");
  const navigate = useNavigate();
  

  const handleChange = (e, index) => {
    const newCodeDigits = [...codeDigits];
    newCodeDigits[index] = e.target.value;
    setCodeDigits(newCodeDigits);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = codeDigits.join("");
    console.log(verificationCode);


    try {
      const response = await fetch(`https://localhost:4000/verify-email`, {
       method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          token:verificationCode,
          triggerEvent:'account-creation'
        }),
      });
     //  console.log(await response.json())
      if (response.ok) {
        navigate("/EmailVerify"); // Navigate to the new password page
      } else {
        console.log(await response)
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
        <label>Enter Verification Code sent to your Email Address:</label>
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

export default Success;
