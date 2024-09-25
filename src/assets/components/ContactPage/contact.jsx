import React, { useState } from 'react';
import './contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    alert("Message Sent! Thanks for completing the form. We'll be in touch soon.");
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <div className="banner-container">
        <img src="/header.png" alt="Contact Banner" className="min-banner" />
        <div className="banner-text">
          <h2>Contact</h2>
          <p>Home {'>'} Contact</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch With Us</h3>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <div className="info-section">
            <img src="/address.png" alt="Address" />
            <h4>Address</h4>
            <p>2036 5th Avenue, <br />New York 10035, United States</p>
          </div>

          <div className="info-section">
            <img src="/phone.png" alt="Phone" />
            <h4>Phone</h4>
            <p>Mobile: (+01) 234 567 890 <br /> Hotline: (+01) 234 567 890</p>
          </div>

          <div className="info-section">
            <img src="/work.png" alt="Working Time" />
            <h4>Working Time</h4>
            <p>Monday - Friday: 08:00 - 20:00 <br /> Saturday - Sunday: 09:00 - 21:00</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Abc@def.com" 
                value={formData.email} 
                onChange={handleChange} 
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject" 
                placeholder="This is an optional" 
                value={formData.subject} 
                onChange={handleChange} 
              />
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                placeholder="Hi! I'd like to ask about..." 
                value={formData.message} 
                onChange={handleChange} 
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <div>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
};

export default Contact;