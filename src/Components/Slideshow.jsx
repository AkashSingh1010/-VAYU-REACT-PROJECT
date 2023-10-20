import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
  }

  componentDidMount() {
    this.showSlides();
  }

  showSlides = () => {
    let { slideIndex } = this.state;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    this.setState({ slideIndex });

    // Use setInterval to change image every 2 seconds
    this.slideInterval = setInterval(this.showSlides, 2000);
  }

  render() {
    return (
      <div>
        <h2>Automatic Slideshow</h2>
        <p>Change image every 2 seconds:</p>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src='assets\images\praveen.jpg' style={{ width: '100%' }} alt="Slide 1" />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src='assets\images\react1.jpg' style={{ width: '100%' }} alt="Slide 2" />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src='assets\images\java2.jpg' style={{ width: '100%' }} alt="Slide 3" />
            <div className="text">Caption Three</div>
          </div>
        </div>
        <br />

        <div style={{ textAlign: 'center' }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;