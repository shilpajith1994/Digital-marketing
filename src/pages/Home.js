import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';

const Home = () => {
    const logoSlider = {
        dots: false,
        arrows:false,
        speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
        responsive: [
                {
                breakpoint: 750,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
        
    };

    const images = [
        '/images/logoipsum-297.svg', 
        '/images/logoipsum-321.svg',
        '/images/logoipsum-325.svg',
        '/images/logoipsum-330.svg',
    ];

    const testimonial = {
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              variableWidth:false,
            },
          },
        ],
    };
    
    
    return (
        <>
        <section className="home-banner-section pb-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 order-2 order-lg-1">   
                        <h1 className="banner-title">We create <span className="text-voilet">amazing </span> digital products</h1>
                        <p className="banner-para pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet adipiscing nam suspendisse et lobortis. Adipiscing auctor lobortis in lorem cursus cursus eget duis massa. Diam sem volutpat turpis condimentum.</p>
                        <div className="pt-4">
                            <button type="button" className="btn text-uppercase know-more-btn rounded-pill">know more</button>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2">   
                        <div className="banner-img-container ">
                            <img src="/images/banner-img.png" alt="banner" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-black">
            <div className="container">
                <Slider {...logoSlider} className="logo-slider">
                    {images.map((image, index) => (
                        <div key={index} className="logo-slides text-center">
                            <img src={image} alt={`Slide ${index}`} className="img-fluid "/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content-wrapper">
                            <img src="/images/dart-board.webp" alt="dart" className="img-fluid"/>
                            <h3 className="about-subtitle">STATS ABOUT WORK</h3>
                            <h2  className="about-title">Appear On the Front  Page of Google!</h2>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet adipiscing nam suspendisse et lobortis. Adipiscing auctor lobortis in lorem cursus cursus eget duis massa. Diam sem volutpat turpis condimentum.
                            </p>
                            <div className="view-more-button-wrapper mt-4">
                                <button type="button" className="view-more-btn btn text-uppercase">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img-wrapper">
                            <img src="/images/about-img.webp" alt="work" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-section">
            <div className="container">
                <h2 className="service-title"><span>Services</span> with which we can support you.</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="service-image-container">
                            <img src="/images/service.webp" alt="service" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card service-card">
                                    <div className="card-body service-card-body">
                                      <h5 className="card-title">Digital marketing <span className="arrow-svg"><img src="/images/arrow.svg" alt="arrow" height="18" width="18"/></span></h5>
                                      <p className="card-text">Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card service-card">
                                    <div className="card-body service-card-body">
                                      <h5 className="card-title">SEO<span className="arrow-svg"><img src="/images/arrow.svg" alt="arrow" height="18" width="18"/></span></h5>
                                      <p className="card-text">Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card service-card">
                                    <div className="card-body service-card-body">
                                      <h5 className="card-title">Digital Analysis<span className="arrow-svg"><img src="/images/arrow.svg" alt="arrow" height="18" width="18"/></span></h5>
                                      <p className="card-text">Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card service-card">
                                    <div className="card-body service-card-body">
                                      <h5 className="card-title">Email marketing <span className="arrow-svg"><img src="/images/arrow.svg" alt="arrow" height="18" width="18"/></span></h5>
                                      <p className="card-text">Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial-section">
            <div className="container">
                <h2 className="testimonial-title">What The <span className="text-voilet">People</span> Thinks About Us</h2>
            </div>
            <Slider {...testimonial} className='testimonial-slider'> 
                
                <div className="card text-center testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src="/images/jenny.webp" className="img-fluid" alt="testimonial" width="108" height="108"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text py-4">"I am so happy with the work that Infinity did for me! They were professional and very detail orientated. I would highly recommend them."</p>
                      <p className="text-voilet person-name">Cody Fisher</p>
                      <div className="logo-wrapper py-3 text-center">
                        <img src="/images/Logo.webp" alt="logo" className="img-fluid  mx-auto"/>
                      </div>
                    </div>
                </div>
                <div className="card text-center testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src="/images/jenny.webp" className="img-fluid" alt="testimonial" width="108" height="108"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text py-4">"I am so happy with the work that Infinity did for me! They were professional and very detail orientated. I would highly recommend them."</p>
                      <p className="text-voilet person-name">Cody Fisher</p>
                      <div className="logo-wrapper  py-3">
                        <img src="/images/Logo.webp" alt="logo" className="img-fluid  mx-auto"/>
                      </div>
                    </div>
                </div>
                <div className="card text-center testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src="/images/jenny.webp" className="img-fluid" alt="testimonial" width="108" height="108"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text py-4">"I am so happy with the work that Infinity did for me! They were professional and very detail orientated. I would highly recommend them."</p>
                      <p className="text-voilet person-name">Cody Fisher</p>
                      <div className="logo-wrapper py-3 ">
                        <img src="/images/Logo.webp" alt="logo" className="img-fluid mx-auto"/>
                      </div>
                    </div>
                </div>
                <div className="card text-center testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src="/images/jenny.webp" className="img-fluid" alt="testimonial" width="108" height="108"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text py-4">"I am so happy with the work that Infinity did for me! They were professional and very detail orientated. I would highly recommend them."</p>
                      <p className="text-voilet person-name">Cody Fisher</p>
                      <div className="logo-wrapper py-3">
                        <img src="/images/Logo.webp" alt="logo" className="img-fluid  mx-auto"/>
                      </div>
                    </div>
                </div>
                <div className="card text-center testimonial-card">
                    <div className="testimonial-img-wrapper">
                        <img src="/images/jenny.webp" className="img-fluid" alt="testimonial" width="108" height="108"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text py-4">"I am so happy with the work that Infinity did for me! They were professional and very detail orientated. I would highly recommend them."</p>
                      <p className="text-voilet person-name">Cody Fisher</p>
                      <div className="logo-wrapper py-3 text-center" >
                        <img src="/images/Logo.webp" alt="logo" className="img-fluid  mx-auto"/>
                      </div>
                    </div>
                </div>
                
                
            </Slider>
        </section>
        <section className="get-in-touch-section">
            <div className="container">
                <div className="get-in-touch-wrapper text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <h4 className="get-in-touch-title">LET'S GET IN TOUCH!</h4>
                            <h3 className="get-in-touch-subtitle">Ready to start your Journey</h3>
                            <p className="get-in-touch-para">Move Parallel with us. Achieve your goals by consistently getting our latest updates. Always keep an eye on what we are doing by subscribing to our newsletter.</p>
                        </div>
                        <div className="col-lg-3">
                            <div className="know-more-btn-container text-lg-end">
                                <button type="button" className="rounded-pill btn know-more-btn">KNOW MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;