import React from 'react';
import styles from './ContactMemodule.css';

const ContactMe = () => {
    return (
        <div id='contact' className={styles.contactContainer}>
            <h2 className={styles.h2}>Contact Me</h2>
            <p className={styles.reachMe} style={{ color: '#522258' }}>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
            <div  className={styles.form}>
            <form>
                <input type="text" placeholder="Your Name" className={styles.inputField} />
                <input type="email" placeholder="Your Email" className={styles.inputField} />
                <textarea placeholder="Your Message" className={styles.textArea}></textarea>
                <button type="submit" className={styles.submitButton} style={{
    padding: '10px 20px',
    backgroundColor: '#D95F59',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }}>Send Message</button>
                </form>
        </div>
        </div>
    );
}

export default ContactMe;
