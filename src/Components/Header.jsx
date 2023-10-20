import React from 'react'
import './Header.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Header = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate("/home");
    };
    return (
        <>
            <div className="Header">
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


        </>
    )
}

export default Header