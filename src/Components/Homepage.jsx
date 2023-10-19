import React from 'react'
import './Homepage.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';




function HomePage() {
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
  const navigate = useNavigate();
  const handleButton =()=>{
    navigate(`./service`);
  }
  return (
    <>
      <div className="header-down">
        <div className='down-left'>
        <h2>Training</h2>
        <p> We provide Training and Placement</p>
        <button className='btn btn-info' onClick={handleButton}>Explore Now</button>
        </div>
        <div className="down-right">
        <div className="form-container">
      <h2>Get Callback from Us</h2>
      <form action="#" method="post" className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>

        <div className="form-group">
          <label htmlFor="stream">Stream:</label>
          <select id="stream" name="stream">
            <option value="select">Select Stream</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="passingYear">Year of Passing:</label>
          <input type="text" id="passingYear" name="passingYear" required />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" rows="4" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="course">Choose a Course:</label>
          <select id="course" name="course">
            <option value="select">Select Course</option>
            <option value="devops">DevOps</option>
            <option value="hr">HR</option>
            <option value="sap">SAP</option>
            <option value="react">React</option>
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Call Me" />
        </div>
      </form>
    </div>
        </div>
      </div>
     
     
        
     
      <div className="body-about">
        <div className="body-image">
          <img className='about-image' src='assets/images/training.jpg' alt='' />
        </div>
        <div className='body-text'>
          <h1>An Year Experience</h1>
          <h5>We Started in 2021 December with just 8 students for a batch of Java training.<br />
            We started the training for Devops as the next stream and followed by SAP,<br />
            React and planning to extend the training to Quality Assurance, Data engineer,<br /> Data analytics and HR profiles.</h5>
          <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
        </div>
      </div>


      <div className='serv-cont'>
        <p>Our Services</p>
        <h2>IT Training</h2>

      </div>
    <div className="body-service">
      <div>
      <img src='assets/images/devops3.jpg' alt=''></img>
      <h4>Devops</h4>
      <p>IT Devops Training</p>
      <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
      </div>
      <div>
      <img src='assets/images/java3.jpg' alt=''></img>
      <h4>Devops</h4>
      <p>IT Devops Training</p>
      <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
      </div>
      <div>
      <img src='assets/images/react1.jpg' alt=''></img>
      <h4>Devops</h4>
      <p>IT Devops Training</p>
      <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
      </div>
      <div>
      <img src='assets/images/sap1.jpg' alt=''></img>
      <h4>Devops</h4>
      <p>IT Devops Training</p>
      <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
      </div>
    </div>


    <div className="service-two">
      <div className='left'>
        <h3>Why Choose Us?</h3>
        <h2>Expert in Training </h2>
        <h2>and Placement</h2>
        <h4>We provide world class IT training.</h4>
        <button onClick={handleButton} className="btn btn-info">LEARN MORE</button>
      </div>
      <div>
      <div className='right' >
      <img src='assets/images/devops2.jpg' alt=''></img>
      <div>
        <h3>Devops</h3>
        <h4>Devops.</h4>
      </div>
      </div>
      <div className='right-two'>
      <img src='assets/images/java2.jpg' alt=''></img>
      <div>
        <h3>Java</h3>
        <h4>Java.</h4>
      </div>
      </div>
      
      </div>
    </div>
      
    <div className="faq-main">
    <div className="faq-left">
      <h3>You Might Ask</h3>
      <h2>Frequently Asked <br/>Questions</h2>
      <img src='assets/images/faq.jpg' alt='faq'></img>
    </div>
    <div className="faq-right">
    <details open={isExpanded.service}>
        <summary className="summary" onClick={() => toggleDetails('service')}>
          <span className="icon">
            {isExpanded.service ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
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
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
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
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
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
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
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
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </span>
          What if I don't like the course in the middle?
        </summary>
        <p>Registration fee won't be returned.</p>
      </details>
    </div>
    </div>
    

      
    </>
  )
}


export default HomePage;