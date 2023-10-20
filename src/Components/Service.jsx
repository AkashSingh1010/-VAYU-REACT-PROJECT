import React from 'react'
import './Service.css';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <>

      <div className="Service">
        <h1> OUR SERVICES</h1>
      </div>
      <div className='redirect'>
        <Link to={`/home`} >Home</Link>
        <p>/</p>
        <Link to={`/service`} >Our Services</Link>
      </div>

      <div className='serv-cont'>
        <h4>Our Services</h4>
        <h1 className='serv-h2'>IT Training</h1>

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
      







    </>
  )
}

export default Service