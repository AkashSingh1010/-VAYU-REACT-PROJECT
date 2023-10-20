import React from 'react'
import './Homepage.css';
import {FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn,FaCalendarAlt,FaListAlt} from 'react-icons/fa'; 

function Homepage() {
  return (  
    <div className='Home-page-container'>
      <div className='home-page'>
       <div className='home-page-header'>
       <div className='header-logo'>

        <img className='icon' src= 'assets\images\ABC logo.png' alt=' '/>  
       </div>
       <div className='home-pg-contact'>
       <a href=' '>
      <FaPhoneAlt classname = 'phone' />
      <span>+91 76192 21922</span>
      </a>
      <a href="mailto:admin@amigosbusinesscorp.com">
      <FaEnvelope  className = 'envelop'/>
      <span>admin@amigosbusinesscorp.com</span>
      </a>
       </div>
       <div className='Menu-bar'>
        <nav>
          <ul>
            <li><a href=' '>HOME</a></li>
            <li><a href=' '>ABOUT</a></li>
            <li><a href=' '>SERVICE</a></li>
            <li><a href=' '>STORY</a></li>
            <li><a href=' '>CONTACTS</a></li>
          </ul>
        </nav>
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



    </div> 

       </div>
      <div className="team">
                <div className="team-container">
                    <div className="section-header">
                        <p>Team Member</p>
                        <h2>Meet Our Expert Trainers</h2>
                    </div>
            <div className='Team-member'>
            <div className='Team-member-one'>
          <div className='team-mem-1'>
         <div className='mem-profile'>
        <img src='images\assets\bharat.jpg' alt=' '></img>
        </div>
    <div className='team-mem-details'>
    <h2>Bharat kumar T</h2>
     <h3>Administrator</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div>

    <div className='Team-member-one'>
     <div className='team-mem-1'>
    <div className='mem-profile'>
        <img src='images\assets\swamy.jpg' alt=' '></img>
    </div>
    <div className='team-mem-details'>
    <h2>Swamy R</h2>
     <h3>Co-ordinator</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div>

    <div className='Team-member-one'>
     <div className='team-mem-1'>
    <div className='mem-profile'>
        <img src='images\assets\praveen.jpg' alt=' '></img>
    </div>
    <div className='team-mem-details'>
    <h2>Praveen K</h2>
     <h3>Trainer</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div>

    <div className='Team-member-one'>
     <div className='team-mem-1'>
    <div className='mem-profile'>
        <img src='images\assets\adi.jpg' alt=' '></img>
    </div>
    <div className='team-mem-details'>
    <h2>AdiKarthik Gupta</h2>
     <h3>Trainer</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div>

    <div className='Team-member-one'>
     <div className='team-mem-1'>
    <div className='mem-profile'>
        <img src='images\assets\harish.jpg' alt=' '></img>
    </div>
    <div className='team-mem-details'>
    <h2>Harish</h2>
     <h3>Trainer</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div>

    <div className='Team-member-one'>
     <div className='team-mem-1'>
    <div className='mem-profile'>
        <img src='images\assets\shashi.jpg' alt=' '></img>
    </div>
    <div className='team-mem-details'>
    <h2>Shashikala</h2>
     <h3>Trainer</h3>
     <div className='team-social'>
    <FaLinkedinIn  className = 'a'/>
    <FaInstagram className='a'/>
     </div>
    </div>
    </div>
    </div> 
   </div>
   </div> 
</div>



         {/* FAQ page */}


  <div className="faqs">
  <div className="faq-container">
    <div className="row">
      <div className="col-md-5">
        <div className="section-header left">
          <p>You Might Ask</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <img src="images\assets\faq.jpg" alt=" img " />
      </div>
      <div className="col-md-7">
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                <span>1</span> What are the services we provide?
              </a>
            </div>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <div className="card-body">
                We provide all type of training and placement services.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                <span>2</span> How much do you charge for a cource?
              </a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="card-body">
                We charge 10,000.00 INR for any cource.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseThree">
                <span>3</span> do you suppot in placement assistance?
              </a>
            </div>
            <div id="collapseThree" className="collapse" data-parent="#accordion">
              <div className="card-body">
                yes we do support in placement assistance from resume building to profile creation and further.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseFour">
                <span>4</span> I am a fresher will i get placed?
              </a>
            </div>
            <div id="collapseFour" className="collapse" data-parent="#accordion">
              <div className="card-body">
                Yes, we do support in placement for freshers also.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseFive">
                <span>5</span> what if i dont like the cource in middle?
              </a>
            </div>
            <div id="collapseFive" className="collapse" data-parent="#accordion">
              <div className="card-body">
                Registration fee wont be returned.
              </div>
            </div>
          </div> 
        </div>
        <a className="btn" href="/contacts">Ask more</a>
      </div>
    </div>
  </div>
</div>


{/* Student review */}

<div className="testimonial">
  <div className="testimonial-container">
    <div className="testimonial-section-header">
      <p>Sudent Review</p>
      <h2>Student Says About Training</h2>
    </div>
    <div className="owl-carousel testimonials-carousel">
      <div className="testimonial-item">
        <div className="testimonial-img">
          <img src="images\assets\profile (1).jpg" alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            it was a great eperience
          </p>
          <h3>Student Name</h3>
          <h4>Devops Engineer</h4>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-img">
          <img src='images\assets\profile (3).jpg' alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            I loved the trainig
          </p>
          <h3>Student Name</h3>
          <h4>Java Developer</h4>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-img">
          <img src="images\assets\profile (2).jpg" alt=' ' />
        </div>
        <div className="testimonial-content">
          <p>
            helped me in getting job
          </p>
          <h3>Student Name</h3>
          <h4>Devops Tech lead</h4>
        </div>
      </div>
    </div>
  </div>
</div>
 
      {/* Team celebration page */}

      <div className="blog">
  <div className="blog-container">
    <div className="blog-section-header">
      <p>Latest From Blog</p>
      <h2>Stay Updated From Our Blog</h2>
    </div>
    <div className="blog-row">
      <div className="col-lg-4 col-md-6">
        <div className="blog-item">
          <img src="images\assets\core.jpg" alt="Blog" />
          <h3>Core Team</h3>
          <div className="meta">
          <FaListAlt className="fa fa-list-alt" />
            <a href>Team Mates</a>
         <FaCalendarAlt  className='fa fa-calendar-alt'/>
            <p>24-Dec-21</p>
          </div>
          <p>
            Team ABC
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-item">
          <img src="images\assets\celebration.jpg" alt="Blog" />
          <h3>Event Celebration</h3>
          <div className="meta">
            <FaListAlt className="fa fa-list-alt" />
            <a href>Company Launch</a>
            <FaCalendarAlt  className='fa fa-calendar-alt'/> 
            <p>17-Oct-2022</p>
          </div>
          <p>
            Company Launch
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-item">
          <img src="images\assets\extended.jpg" alt="Blog" />
          <h3>Complete Team</h3>
          <div className="meta">
            <FaListAlt className="fa fa-list-alt" /> 
            <a href>Team Intro</a>
            <FaCalendarAlt  className='fa fa-calendar-alt'/> 
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
    

      
       </div>
  )
}

export default Homepage;
