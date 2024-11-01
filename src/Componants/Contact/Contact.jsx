import React, { useState } from 'react';
import './Contact.css';
import { IoMdContact } from "react-icons/io";
import { Element } from 'react-scroll';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "KEY");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: 'Success :)',
          text: 'Message sent successfully!',
          icon: 'success',
          confirmButtonColor: '#76db47',
        });
        setFormData({ fullName: '', email: '', mobileNumber: '', message: '' });
      } else {
        throw new Error(res.message || 'Something went wrong');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#8b1c97',
      });
    }
  };

  return (
    <Element name='contact'>
      <div className='cont-container'>
        <div className='cont-content'>
          <div>
            <h2 className='cont-head'>
              <span className='cont-icon'><IoMdContact /></span> Contact Me
            </h2>
          </div>
          <div className='main-cont-content'>
            <div className='hit-message'>
              <form onSubmit={onSubmit}>
                <div className='form-n'>
                  <input
                    className='form-fn'
                    type="text"
                    id='fullName'
                    name='fullName'
                    placeholder='Full Name *'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-c'>
                  <input
                    className='form-email'
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Email *'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className='form-pn'
                    type="tel"
                    id='mobileNumber'
                    name='mobileNumber'
                    placeholder='Mobile Number'
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-t'>
                  <textarea
                    className='form-message'
                    name="message"
                    id="message"
                    placeholder='Message *'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className='form-b'>
                  <button className='form-btn' type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
