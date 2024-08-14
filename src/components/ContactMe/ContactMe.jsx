import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactMemodule.css'; 

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use environment variables
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2 className={styles.h2} style={{color: '#8C3061'}}>Contact Me</h2>
      <p className={styles.reachMe} style={{ color: '#522258' }}>
        Feel free to reach out to me for any inquiries or collaboration opportunities.
      </p>
      <div className={styles.form}>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.inputField}
          />
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.inputField}
          />
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={styles.textArea}
          />
          <button
            type="submit"
            value="Send"
            className={styles.submitButton}
            style={{
              padding: '10px 20px',
              backgroundColor: '#D95F59',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              height: '40px'
            }}
          > Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
