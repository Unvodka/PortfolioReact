import React from "react";
import phoneIcon from '../img/phone-square-alt-solid.svg'
import locationIcon from '../img/map-marker-alt-solid.svg'
import emailIcon from '../img/envelope-square-solid.svg'
import { useRef, useState } from "react";
import emailjs from 'emailjs-com'
import './Contact.css'
import { useContext } from 'react';
import { ThemeContext } from '../context';

const ContactMe = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false)

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_d9wvswt', formRef.current, 'user_j0DBFik1bsTzzxgRJJoNa')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="contact">

      <div className="contact-left" style={{backgroundColor: darkMode ? 'wheat' : '#222',
         color: darkMode ? '#222' : 'wheat'}}> 
        <h3>Let's discuss your projects</h3>
        <p>As a fresh new developer i'm looking for an unpaid job wich can improve my skills and benefit to you also</p>
        <p>Hoping to work in real world applications</p>
        <p>I'm open to talk about projects and requirements we could have to work together.</p>
        <p className="marg">Let's do that by the contact method of your choice</p>

        <form className="form-form" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name"style={{backgroundColor: darkMode ? 'wheat' : 'wheat',
         color: darkMode ? '#222' : '#222'}}></input>
          <input type="text" placeholder="Subject" name="user_subject" style={{backgroundColor: darkMode ? 'wheat' : 'wheat',
         color: darkMode ? '#222' : '#222'}}></input>
          <input type="text" placeholder="Email" name="user_email" style={{backgroundColor: darkMode ? 'wheat' : 'wheat',
         color: darkMode ? '#222' : '#222'}}></input>
          <textarea rows="4" placeholder="Leave a message here" name="message" style={{backgroundColor: darkMode ? 'wheat' : 'wheat',
         color: darkMode ? '#222' : '#222'}}></textarea>
          <button className="btn-form-contact" style={{backgroundColor: darkMode ? 'wheat' : 'wheat',
         color: darkMode ? '#222' : '#222'}}>Submit</button>
        </form>
        {done && "Message was sent successfully, thank you ..."}
      </div>

      <div className="contact-right">
        <h3>My personal contact :</h3>
        <div className="contact-info">
            <p><img src={locationIcon} alt="icon" className="contact-icon"/>
                Location : Antibes, France UTC+1</p>
            <p><img src={phoneIcon} alt="icon" className="contact-icon"/>
                Phone : +33 07 49 48 62 03</p>
            <p className="marg1"><img src={emailIcon} alt="icon" className="contact-icon"/>
                Email : <a href="mailto:chevallier.a06@gmail.com"><p>chevallier.a06@gmail.com</p></a></p>
        </div>
      </div>

    </div>

  );
};

export default ContactMe;