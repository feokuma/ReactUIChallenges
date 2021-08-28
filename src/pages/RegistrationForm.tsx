import React from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  return (
    <div className="container">
      <div className="input">
        <label>Full Name</label>
        <input type="text" className="input-field" placeholder="Your Name" />
        <label>Email Address</label>
        <input
          type="text"
          className="input-field"
          placeholder="Email Address"
        />
        <label>Gender</label>
        <div className="radio-btn">
          <label>
            <input type="radio" name="gender" value="male" />
            <span className="mark"></span>
            <span className="btn-border"></span>
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            <span className="mark"></span>
            <span className="btn-border"></span>
            Female
          </label>
        </div>
        <label>Date of Birth</label>
        <input type="number" placeholder="DD/MM/YYYY" className="input-field" />
        <div className="text">
          <input type="checkbox" />
          <p>
            I accept the <a href="#">terms & conditions</a>
          </p>
        </div>
        <div className="btn">
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
}
