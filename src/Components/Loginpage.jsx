import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';


function Loginpage() {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
      if (isNaN(emailOrMobile)) {
          // emailOrMobile is not a number, so it's treated as an email
          if (!emailOrMobile.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
              alert('Give a valid Email');
              return;
          }
      } else {
          // emailOrMobile is a number, so it's treated as a phone number
          if (!/^\d{10}$/.test(emailOrMobile)) {
              alert('Enter Valid Email/Mobile');
              return;
          }
      }
      if (password.length < 6 || password.length > 10) {
          alert('Password Must be between 6 and 10 Characters');
          return;
      }
  
      alert('Login Successful');
       navigate('/home');
  }
  

    return (
        <>
        
        <div className="container">
        <div className="icon">
                    <img className='main-icon' src='assets\images\ABC logo.png' alt='' ></img>

                </div>
        {/* <img src='Images\ABClogo.jpeg' alt='img'/> */}
        <form action="">
            <h3>WELCOME</h3>
            <div className="form-group">
            <label>Username:</label>
            <input
                type='text'
                value={emailOrMobile}
                className="form-control"
                onChange={(e) => setEmailOrMobile(e.target.value)}
                placeholder='Email/Mobile'
            />
            </div>
            <div className="form-group">
                <label>Password:</label>
            <input
                type='password'
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            </div>
            <br />
            <button onClick={handleLogin} className="btn">Login</button>
            </form>
            </div>
        </>
    )
}

export default Loginpage;