import React from 'react';
import './Story.css';
import { Link } from 'react-router-dom';

function Story() {
  return (
    <>

      <div className="Story">
        <h1> OUR STORY </h1>
      </div>
      <div className='redirect'>
        <Link to={`/home`} >Home</Link>
        <p>/</p>
        <Link to={`/story`} >Our Story</Link>
      </div>

      <div className='Story1'>
        <p>Our Story</p>
        <h2>Visit Our Trainings</h2>

      </div>

      <div className='buttons'>
        <button class="btn btn-info" >ALL</button>
        <button class="btn btn-info" >COMPLETED</button>
        <button class="btn btn-info" >ONGOING</button>
        <button class="btn btn-info">UPCOMING</button>
      </div>

      <div className="body-story">
        <div className="body-one">
        <img src='assets\images\b1.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-1 JAVA</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b2.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-2 DEVOPS</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b3.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-3 DEVOPS</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b4.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-4 JAVA</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b5.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-5 DEVOPS</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b6.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-6 REACTJS</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b7.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-7 SAP</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b8.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-8 DEVOPS</button>
        </div>
        <div className="body-one">
        <img src='assets\images\b9.jpg' alt=''></img>
        <button class="btn btn-info" >BATCH-9 JAVA</button>
        </div>
       

      </div>





    </>
  )
}

export default Story