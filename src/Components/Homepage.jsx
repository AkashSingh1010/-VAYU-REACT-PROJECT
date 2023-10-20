import React from 'react'
import './Homepage.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaCalendarAlt, FaListAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Homepage = () => {

  const HandleClick = () => {

  };
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(`/home`);
  };
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

      <div className="header-main">
        <div className="header">
          <div className="icon">
            <img className='main-icon' src='assets/images/ABC logo.png' alt='' onClick={() => HandleClick()} ></img>
            {/* <button  onClick={() => HandleClick()}>Logout</button>  */}
          </div>
          <div className='topbar'>
            <div className="phoneNumber">
              <FaPhoneAlt className='a' />
              <a href="tel:+91 7619221922">+91 76192 21922</a>

              <div className="email-info">
                <FaEnvelope className='a' />
                <a href='mailto:admin@amigosbusinesscorp.com'>admin@amigosbusinesscorp.com</a>
              </div>
            </div>
            <div className="navbar">
              <Navbar />
            </div>

          </div>


        </div>



        <div className='form-sub-part'>
          <div className='explore-part'>
            <h2><span>Training</span></h2>
            <p>We provide Training and Placement</p>
            <a href=' ' className='explore-btn'>Explore Now</a>

          </div>

          <div className='form-container'>
            <h3> Get Callback From Us</h3>
            <form action=' '>
              <div className='form-control-name'>
                <input required="required" name='Name' type='text' placeholder='Your Name'></input>
              </div>
              <div className='form-control-stream'>
                <input required='required' name='stream' type='text' placeholder='Your stream'></input>
              </div>
              <div className='form-control-yop'>
                <input required='required' name='year' type='text' pattern='[0-9]{4}' placeholder='Year of Passing'></input>
              </div>
              <div className='form-control-num'>
                <input required='required' name='mobile' type='text' pattern='[6-9]{1}[0-9]{9}' placeholder='Mobile Number'></input>
              </div>
              <div className='form-control-choose'>
                <select className='user-option' required='required' name='course'>
                  <option selected value="">Choose a Course</option>
                  <option value="Devops">Devops</option>
                  <option value="Java">Java</option>
                  <option value="React Js">React Js</option>
                  <option value="SAP">SAP</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div className='form-control-comment'>
                <input required='required' name='stream' placeholder='Comment'></input>
              </div>
              <button className='button'>Call me</button>
            </form>
          </div>


          {/* <----- SlideShow ---->>>>>>> */}























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
          <img src='assets\images\devops3.jpg' alt=''></img>
          <h4>Devops</h4>
          <p>IT Devops Training</p>
        </div>
        <div>
          <img src='assets\images\java3.jpg' alt=''></img>
          <h4>Java</h4>
          <p>IT Java Training</p>
        </div>
        <div>
          <img src='assets\images\react1.jpg' alt=''></img>
          <h4>React</h4>
          <p>IT React Training</p>
        </div>
        <div>
          <img src='assets\images\sap1.jpg' alt=''></img>
          <h4>Sap</h4>
          <p>IT Sap Training</p>
        </div>
      </div>

      <div className="service-two">
        <div className='left'>
          <h3>Why Choose Us?</h3>
          <h2>Expert in Training </h2>
          <h2>and Placement</h2>
          <h4>We provide world class IT training.</h4>
        </div>
        <div>
          <div className='right' >
            <img src='assets\images\devops2.jpg' alt=''></img>
            <div>
              <h3>Devops</h3>
              <h4>Devops.</h4>
            </div>
          </div>
          <div className='right-two'>
            <img src='assets\images\java2.jpg' alt=''></img>
            <div>
              <h3>Java</h3>
              <h4>Java.</h4>
            </div>
          </div>

        </div>
      </div>




      <div className="team-info">
        <p>Team Member</p>
        <h2>Meet Our Expert Trainers</h2>
      </div>


      <div className="team-one">

        <div className="profile-one">




          <img className='mem-image' src='assets\images\bharat.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>


        <div className="profile-one">




          <img className='mem-image' src='assets\images\swamy.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>

        <div className="profile-one">




          <img className='mem-image' src='assets\images\praveen.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>

        <div className="profile-one">




          <img className='mem-image' src='assets\images\adi.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>
      </div>

      <div className="team-two">

        <div className="profile-one">




          <img className='mem-image' src='assets\images\harish.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>
        <div className="profile-one">




          <img className='mem-image' src='assets\images\shashi.jpg' alt=' '></img>


          <h2>Bharat kumar T</h2>
          <h3>Administrator</h3>
          <div className='team-social'>
            <FaLinkedinIn className='a' />
            <FaInstagram className='a' />



          </div>
        </div>
      </div>






      <div className="faq-main">
        <div className="faq-left">

          <p>You Might Ask</p>
          <h2>Frequently Asked Questions</h2>
          <img src="assets\images\faq.jpg" alt=" img " />



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



      <div className="student-info">
        <p>Sudent Review</p>
        <h2>Student Says About Training</h2>
      </div>
      <div className="student-cards">

        <div className="testimonial-img">
          <img src="assets\images\profile.jpg" alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            it was a great experience
          </p>
          <h3>Student Name</h3>
          <h4>Devops Engineer</h4>
        </div>
        <div className="testimonial-img">
          <img src="assets\images\profile.jpg" alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            it was a great experience
          </p>
          <h3>Student Name</h3>
          <h4>Devops Engineer</h4>
        </div>
        <div className="testimonial-img">
          <img src="assets\images\profile.jpg" alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            it was a great experience
          </p>
          <h3>Student Name</h3>
          <h4>Devops Engineer</h4>
        </div>


      </div>






      <div className="blog">
        <div className="blog-container">
          <div className="blog-section-header">
            <p>Latest From Blog</p>
            <h2>Stay Updated From Our Blog</h2>
          </div>
          <div className="blog-row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="assets\images\core.jpg" alt="Blog" />
                <h3>Core Team</h3>
                <div className="meta">
                  <FaListAlt className="fa fa-list-alt" />
                  <a href>Team Mates</a>
                  <FaCalendarAlt className='fa fa-calendar-alt' />
                  <p>24-Dec-21</p>
                </div>
                <p>
                  Team ABC
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="assets\images\celebration.jpg" alt="Blog" />
                <h3>Event Celebration</h3>
                <div className="meta">
                  <FaListAlt className="fa fa-list-alt" />
                  <a href>Company Launch</a>
                  <FaCalendarAlt className='fa fa-calendar-alt' />
                  <p>17-Oct-2022</p>
                </div>
                <p>
                  Company Launch
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="assets\images\extended.jpg" alt="Blog" />
                <h3>Complete Team</h3>
                <div className="meta">
                  <FaListAlt className="fa fa-list-alt" />
                  <a href>Team Intro</a>
                  <FaCalendarAlt className='fa fa-calendar-alt' />
                  <p>17-Oct-2022</p>
                </div>
                <p>
                  Extended Team ABC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

































































    </>



























  )
}

export default Homepage;
