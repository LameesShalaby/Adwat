import img1 from "../../assets/images/software.png";
import img2 from "../../assets/images/develop.png";
import img3 from "../../assets/images/design.png";
import img4 from "../../assets/images/erp.png";
import img5 from "../../assets/images/marketing.png";
import img6 from "../../assets/images/web-development 1.png";
import downArrow from "../../assets/images/down-arrow.svg";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <section className="banner-style">
        <div className="container">
          <div className="row justify-content-center mask-group">
            <div className="property-data">
              <div className="col-lg-6 col-md-12 text" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <h1>Our Services</h1>
                <div className="row justify-content-end">
                  <div className="hook">
                    <a href="#find-out-more">
                      {" "}
                      <img src={downArrow} alt="" />
                    </a>
                  </div>
                  <a href="#find-out-more">
                    <p>Find out more</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="heading-style" id="find-out-more">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h1>Features Digital Marketing</h1>
              <p>
                Makes you fly away from your competitors, and we have an
                experienced team that will reach us with new horizons.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img1} alt="" />
                </div>
                <h4>Software Development</h4>
                <p>
                  How we drive your product to success: Mobile Apps, Desktop,
                  Web Applications, Software as a Service
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img2} alt="" />
                </div>
                <h4>App Development</h4>
                <p>
                  provide clients with world class software technology that
                  optimizes business processes.
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img3} alt="" />
                </div>
                <h4>Design & Branding</h4>
                <p>
                  Increase web traffic with pay-per click and retargeting
                  advertising for your web pages.
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img4} alt="" />
                </div>
                <h4>ERP System</h4>
                <p>
                  Adwat ERP helps you engage with leads and customers, get
                  insights about your business, build a scalable sales process,
                  and grow your business faster.
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img5} alt="" />
                </div>
                <h4>Marketing Support</h4>
                <p>
                  Comprehensives SEO involves keywords research and ranking
                  racking, on-site optimizations, backlink analysis.
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img6} alt="" />
                </div>
                <h4>Web Development</h4>
                <p>
                  Startup Owner's Manual guides you through Steve Blank's proven
                  Customer Development process, step-by-step.
                </p>
                <div className="btn-style-1">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="col-img">
        <div className="container">
          <div className="row">
            <div className="bg-img col-lg-12 col-md-12" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h2>Our Featured Projects</h2>
              <p>Bringing ideas to life with innovative solutions</p>
              <Link to="/portfolio">
                <div className="btn-style-2">View Our Portfolio</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
