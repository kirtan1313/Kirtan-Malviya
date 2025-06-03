import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://my-portfoliyo-backend-side.onrender.com/send-message", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert('✅ Message sent successfully!');
        // Clear form
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('❌ Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('⚠️ Something went wrong. Try again!');
    }
  };

  return (
    <>
      <section className='collabrate-section'>
        <div className='collabrate'>
          <span className='fs-2 pe-3'>🚀</span>
          <h2 className="services-heading">
            Let's<span className="highlight ps-3">Collabration</span>
            <div className="underline"></div>
          </h2>
        </div>

        <div className="container">
          <p className='sub'>
            Got a question, proposal or project or want to work
            <br />
            together on something? Feel free to reach out.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="side">
                <label htmlFor="name">Your Name</label>
                <input
                  placeholder='Enter Your Name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="side1">
                <label htmlFor="email">Your E-mail</label>
                <input
                  placeholder='Enter Your Email Address'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="textarea">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Hi, I think we need you to work on this particular product. Reach out as soon as you can"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='mt-5'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
