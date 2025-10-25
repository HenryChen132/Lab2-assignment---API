import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './controlled.css'
export default function Contact() {
  const navigate = useNavigate();
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Captured Form Data:", formData); 
    navigate("/"); 
  };
return (
<div className="home">
    <div className="overlay-box">
      <div className="contact-panel">
       <h2 style={{ color: 'white' ,backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>Contact Information</h2>
       <p><strong>Email:</strong> haoxuanchen@example.com</p>
       <p><strong>Phone:</strong> +1 (647) 123-4567</p>
       <p><strong>Location:</strong> Toronto, ON, Canada</p>
       <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/haoxuan-chen-217353383/" target="_blank" rel="noopener noreferrer">linkedin.com/in/haoxuan-chen-217353383</a></p>
       <p><strong>GitHub:</strong> <a href="https://github.com/HenryChen132" target="_blank" rel="noopener noreferrer">github.com/HenryChen132</a></p>
     </div>
     <hr />
     <h2 style={{ color: 'white' ,backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>Information Box</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required /><br /><br />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required /><br /><br />
        <input type="text" name="contactNumber" placeholder="Phone Number" value={formData.contactNumber} onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required /><br /><br />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required /><br /><br />
        <div>
         <button type="button" onClick={() =>
         setFormData({
         firstName: "",
         lastName: "",
         contactNumber: "",
         email: "",
         message: "",
        })
        }>Reset</button>
        <button type="submit">Send</button>
        </div>
      </form>
    </div>
    <footer style={{ textAlign: 'center', color: 'lightblue' }}>
      Copyright © 2025 Haoxuan Chen
    </footer>
</div>
);
}