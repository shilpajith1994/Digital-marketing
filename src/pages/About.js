import './About.scss';
import React, { useEffect, useRef } from 'react';
import CountUp from "react-countup";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const breadcrumbStyle = {
    '--bs-breadcrumb-divider': "'>"
  };

  const teamSlider ={
    
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

    return(
      <>
      <section className="about-banner-section text-white" style={{backgroundImage:`url("images/about/banner-six.webp")`}}>
        <div className="container">
          <h2 className="text-uppercase about-banner-subtitle">About Us</h2>
          <h1 className="about-banner-title">Know about us</h1>
          <nav style={breadcrumbStyle} aria-label="breadcrumb" className="about-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-white">Home</a></li>
              <li className="breadcrumb-item active text-white" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="work-perfection-section"> 
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="text-voilet"><img src="/images/about/rectangle.webp" alt="rectangle" className="img-fluid" width="40" height="40"/>ESTABLISHED IN 1990s</h4>
              <h3 className="work-perfection-title">We work with Perfection</h3>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper diam ut et elementum quis magna tristique. Commodo condimentum turpis quam porttitor. Pretium, odio viverra ornare quisque.</p>
              <span className="d-block ceo-person mb-3">James Cameron</span>
              <span className="d-block grey-text font-18">CEO</span>
            </div>
            <div className="col-lg-6">
              <div className="work-img-container">
                <img src="/images/about/work-perfect.webp" alt="work perfect"   className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="counter-wrapper">
                <div className="project-counter-wrapper d-flex align-items-center">
                  <div className="project-img-container">
                    <img src="images/about/counter.webp" alt="projects" />
                  </div>
                  <div className="project-content">
                    <span className="d-block counter-number"><CountUp
                    start={0}
                    end={50}
                    duration={5}
                /></span>
                    <span className="d-flex counter-title">Projects Completed</span>
                  </div>
                   
                </div>
                <div className="project-counter-wrapper d-flex align-items-center ">
                  <div className="project-img-container">
                    <img src="images/about/happy-customers.webp" alt="projects" />
                  </div>
                  <div className="project-content">
                    <span className="d-block counter-number"><CountUp
                    start={0}
                    end={150}
                    duration={5}
                /></span>
                    <span className="d-flex counter-title">Happy Customers</span>
                  </div>
                   
                </div>
                <div className="project-counter-wrapper d-flex align-items-center">
                  <div className="project-img-container">
                    <img src="images/about/trained-professional.webp" alt="projects" />
                  </div>
                  <div className="project-content">
                    <span className="d-block counter-number"><CountUp
                      start={0}
                      end={300}
                      duration={5}
                    /></span>
                    <span className="d-flex counter-title">Trained Professional</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-voilet stat-work-title">STATS ABOUT WORK</h4>
              <h3  className="work-perfection-title">Some Interesting Facts</h3>
              <p className="grey-text pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec felis at pellentesque. Sed amet dolor penatibus sed at posuere justo, lacinia neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec felis at pellentesque. Sed amet dolor penatibus sed at posuere justo, lacinia neque.</p>
              <div className="view-more-button-wrapper mt-4">
                <button type="button" className="view-more-btn btn text-uppercase">View More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4 className="text-voilet">WHY CHOOSE US</h4>
              <h3 className="video-subtitle">We Provide Best Digital Services To Help You</h3>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="in-video__container">
    
                <img className="" src="https://21645388.fs1.hubspotusercontent-na1.net/hubfs/21645388/video-poster-one.webp" alt="Video Poster" loading="lazy" />
        
                <div className="in-video__content">
                  <h3 className="in-video__title">See How we do things</h3>
                  <div className="in-video__icon-content">
                    <a href="https://21645388.fs1.hubspotusercontent-na1.net/hubfs/21645388/infinity/video-1.mp4" className="in-video__icon in-play-btn" aria-label="WATCH VIDEO">
                      <span id="hs_cos_wrapper_module_16526866969616_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon"  data-hs-cos-general-type="widget" data-hs-cos-type="icon"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"><g id="Play1_layer"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></g></svg></span>
                      <span className="in-video__icon-text">WATCH VIDEO</span>
                    </a>         
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-detail-section">
        <div className="container">
          <h3 className=" team-detail-title">The <span className="text-voilet">team behind</span>  Infinity are spread world around</h3>
          <Slider {...teamSlider} className="team-slider">  
            <div className="card team-card">
              <img src="/images/about/jacob-smith.webp" className="card-img-top" width="350" height="312" alt="Tech person"/>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between"><span class="d-inline-block">Jacob Smith</span><span class="d-inline-block ">Designer</span></h5>
                <p className="card-text">5K projects done</p>
              </div>
            </div>
            <div className="card team-card">
              <img src="/images/about/wade-warner.webp" className="card-img-top" width="350" height="312" alt="Tech person"/>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between"><span class="d-inline-block">Jacob Smith</span><span class="d-inline-block ">Designer</span></h5>
                <p className="card-text">2K projects done</p>
              </div>
            </div>
            <div className="card team-card">
                <img src="/images/about/emma-jones.webp" className="card-img-top" width="350" height="312" alt="Tech person"/>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between"><span class="d-inline-block">Jacob Smith</span><span class="d-inline-block ">Designer</span></h5>
                  <p className="card-text">5K projects done</p>
                </div>
            </div>
            <div className="card team-card">
              <img src="/images/about/mathew-james.webp" className="card-img-top" width="350" height="312" alt="Tech person"/>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between"><span class="d-inline-block">Jacob Smith</span><span class="d-inline-block ">Designer</span></h5>
                <p className="card-text">5K projects done</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      </>
    );
  };
  
  export default About;