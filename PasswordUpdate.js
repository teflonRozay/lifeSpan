import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordUpdate = () => {
  const [password, setPassword] = useState("");
  const [updateError, setUpdateError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      if (response.ok) {
        navigate("/PasswordCongrat"); // Navigate to the password updated page
      } else {
        const data = await response.json();
        setUpdateError(data.message || "Failed to update password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setUpdateError("An error occurred while updating the password. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
      {updateError && <p style={{ color: "red" }}>{updateError}</p>}
    </div>
  );
};

export default PasswordUpdate;
