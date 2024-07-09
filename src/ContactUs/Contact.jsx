import Header from "../HomePage/Header"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hn461on', 'template_jr4ebve', form.current, {
        publicKey: 'gHr0Z3kekVSB36fTe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <Header></Header>
  <div className="form">

    <form ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea  name="message" />
      <br></br>
      <input id="final" type="submit" value="Send" />
      
    </form>
  </div>
    </>
  );
};

export default Contact
