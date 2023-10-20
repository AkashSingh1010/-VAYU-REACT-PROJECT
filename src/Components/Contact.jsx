import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [isExpanded, setIsExpanded] = useState({
    service: false,
    courseCharge: false,
    placementAssistance: false,
    fresherPlacement: false,
    courseCancellation: false,
  });

  const toggleDetails = (section) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <>

      <div className="Contact">
        <h1> CONTACT US  </h1>
      </div>
      <div className='redirect'>
        <Link to={`/home`} >Home</Link>
        <p>/</p>
        <Link to={`/contact`} >Contact</Link>
      </div>

      <div className='content'>
        <p>Contact Us</p>
        <h2>Find Your Answer / </h2>
        <h2>Send Message</h2>
      </div>

      <div className='body-contact'>
      <div className="details-left">
        
      <details open={isExpanded.service}>
        <summary className="summary" onClick={() => toggleDetails('service')}>
          <span className="icon">
            {isExpanded.service ? (
         <i class="fa-solid fa-up-down"></i>
            ) : (
              <i class="fa-solid fa-up-down"></i>
            )}
          </span>
          What are the services we provide?
        </summary>
        <p>We provide all types of training and placement services.</p>
      </details>

      <details open={isExpanded.courseCharge}>
        <summary className="summary" onClick={() => toggleDetails('courseCharge')}>
          <span className="icon">
            {isExpanded.courseCharge ? (
             <i class="fa-solid fa-up-down"></i>
            ) : (
              <i class="fa-solid fa-up-down"></i>
            )}
          </span>
          How much do you Charge For a Course?
        </summary>
        <p>We charge 10,000.00 INR for any Course.</p>
      </details>

      <details open={isExpanded.placementAssistance}>
        <summary className="summary" onClick={() => toggleDetails('placementAssistance')}>
          <span className="icon">
            {isExpanded.placementAssistance ? (
              <i class="fa-solid fa-up-down"></i>
            ) : (
              <i class="fa-solid fa-up-down"></i>
            )}
          </span>
          Do You Support Placement Assistance?
        </summary>
        <p>Yes, we do support in placement assistance from resume building to profile creation and further.</p>
      </details>

      <details open={isExpanded.fresherPlacement}>
        <summary className="summary" onClick={() => toggleDetails('fresherPlacement')}>
          <span className="icon">
            {isExpanded.fresherPlacement ? (
             <i class="fa-solid fa-up-down"></i>
            ) : (
              <i class="fa-solid fa-up-down"></i>
            )}
          </span>
          I am a Fresher Will I get Placed?
        </summary>
        <p>Yes, we do support in placement for freshers also.</p>
      </details>

      <details open={isExpanded.courseCancellation}>
        <summary className="summary" onClick={() => toggleDetails('courseCancellation')}>
          <span className="icon">
            {isExpanded.courseCancellation ? (
              <i class="fa-solid fa-up-down"></i>
            ) : (
              <i class="fa-solid fa-up-down"></i>
            )}
          </span>
          What if I don't like the course in the middle?
        </summary>
        <p>Registration fee won't be returned.</p>
      </details>
    </div>


        <div className="form">
          <h2>Contact Us</h2>
          <form action="submit.php" method="post" >
            <label htmlFor="name" >Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email" >Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="mobile" >Mobile:</label>
            <input type="tel" id="mobile" name="mobile" />

            <label htmlFor="message" >Message:</label><br />
            <textarea id="message" name="message" rows="4" />

            <input type="submit" value="Send Message" />
          </form>

        </div>




      </div>







    </>
  )
}

export default Contact