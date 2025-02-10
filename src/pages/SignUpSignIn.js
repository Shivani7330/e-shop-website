import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUpSignIn.css"; // Import the CSS file

const SignUpSignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(isSignUp ? "Signing up" : "Logging in", formData);
      // Perform authentication logic here (API call)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="auth-input"
                placeholder="John Doe"
              />
              {errors.name && <p className="auth-error">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
              placeholder="example@email.com"
            />
            {errors.email && <p className="auth-error">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              placeholder="******"
            />
            {errors.password && <p className="auth-error">{errors.password}</p>}
          </div>

          <button type="submit" className="auth-button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="auth-toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <Link to="/products" className="auth-back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignUpSignIn;
