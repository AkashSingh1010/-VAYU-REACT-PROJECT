import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';






function About() {
  const navigate = useNavigate();




  const handleButton = () => {
    navigate(`/home`);

  }
  return (
    <>

      <div className="About">
        <h1> ABOUT US </h1>
      </div>
      <div className='redirect'>
        <Link to={`/home`} >Home</Link>
        <p>/</p>
        <Link to={`/about`} >About Us</Link>
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





    </>
  )
}

export default About