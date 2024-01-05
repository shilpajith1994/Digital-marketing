import './Footer.scss';

const Footer=()=>{
    return(
       <footer className="bg-black">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">   
                    <div className="footer-logo-img-container">
                        <img src="/images/footer-logo.svg" alt="footer logo"  className="img-fluid"/>
                    </div>
                    <p className="text-white">
                        Infinity is one of the best marketing theme with which you can create astounding websites. It is easy to use, highly customizable and built with a modern approach.
                    </p>
                    <ul className="footer-social-media-links list-unstyled d-flex">
                        <li className="px-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-facebook"></i> 
                            </a>
                          </li>
                          <li className="px-2">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="px-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-instagram"></i> 
                            </a>
                          </li>
                    </ul>
                </div>
                <div className="col-lg-3">   
                    <h5 className="text-white footer-list-title">Company</h5>
                    <ul className="text-white list-unstyled company-details-list">
                        <li><a href="" className=" text-decoration-none ">Event</a></li>
                        <li><a href="" className=" text-decoration-none ">Pricing</a></li>
                        <li><a href="" className=" text-decoration-none ">Career</a></li>
                        <li><a href="" className=" text-decoration-none ">Faq's</a></li>
                        <li><a href="" className=" text-decoration-none ">Blog</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">   
                    <h5 className="text-white footer-list-title">Quick Links</h5>
                    <ul className="text-white list-unstyled quick-link-list">
                        <li><a href=""className=" text-decoration-none ">Product Landing Page</a></li>
                        <li><a href="" className=" text-decoration-none ">Career Landing Page</a></li>
                        <li><a href="" className=" text-decoration-none">Testimonial</a></li>
                        <li><a href="" className=" text-decoration-none ">Portfolio</a></li>
                        <li><a href="" className=" text-decoration-none ">Services</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">   
                    <h5 className="text-white footer-list-title">Get In Touch</h5>
                    <ul  className="text-white list-unstyled get-in-touch-details">
                        <li>
                             <a href="tel:(209) 555-0104" className="text-white  d-flex align-items-start text-decoration-none"><i className="fas fa-phone d-inline-block"></i><span className="d-inline-block">(209) 555-0104 </span></a>
                        </li>
                        <li>
                            <a href="mailto:deanna.curtis@example.com" className="text-white d-flex align-items-start text-decoration-none"><i className="fas fa-envelope d-inline-block"></i><span className="d-inline-block">deanna.curtis@example.com</span></a>
                        </li>
                        <li className=" d-flex align-items-start">
                            <i className="fas fa-map-marker-alt d-inline-block"></i><span className="d-inline-block">4140 Parker Rd. Allentown, New Mexico 31134</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=" copyright-content d-flex flex-column flex-lg-row justify-content-between text-center text-lg-start">
                <p className="text-white">Copyright © 2023 MakeWebBetter All Rights Reserved.</p>
                <p  className="text-white">Privacy Policy | Terms & Condition</p>
            </div>
        </div>
        
       </footer>
    )
}

export default Footer