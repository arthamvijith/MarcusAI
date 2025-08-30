// EmailSignUp.jsx
import React from 'react';
import '../SignIn/SignIn.css'; // reuse the signin styling for input fields etc.

const EmailSignUp = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Continue button clicked — connect this to your signup backend');
  };

  return (
    <div className="auth-content">
      <div className="heart">
        {/* Uncomment and add your logo here */}
        {/* <img src="image.jpg" alt="Company Heart Logo" className="company-heart" /> */}
      </div>
      <h2>Create your account</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" required />

        <button type="submit" className="white-btn">Continue</button>
      </form>
    </div>
  );
};

export default EmailSignUp;
