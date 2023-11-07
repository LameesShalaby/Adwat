import img2 from "../../assets/images/bell.svg";
import img1 from "../../assets/images/bell1.svg";
import img3 from "../../assets/images/bell2.svg";
import img5 from "../../assets/images/bell3.svg";
import img6 from "../../assets/images/bell4.svg";
import img4 from "../../assets/images/bell5.svg";
import Frame1 from "../../assets/images/Frame1.png";
import downArrow from "../../assets/images/down-arrow.svg";
import aboutFrame1 from "../../assets/images/aboutFrame1.png";
import aboutFrame2 from "../../assets/images/aboutFrame2.png";
import CareerCarousel from "../../Components/CareerCarousel/CareerCarousel";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <section className="banner-style">
        <div className="container">
          <div className="row justify-content-center mask-group">
            <div className="property-data">
              <div className="col-lg-5 col-md-12 text" data-aos="fade-down" data-aos-easing="linear"
                 data-aos-duration="1500">
                <h1>About us</h1>
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
      <section className="about-padding" id="find-out-more" >
        <section
          className="about-bg-section heading-style"
          style={{ backgroundColor: "#F0F2FA" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" >
                <div className="img-style">
                  <img src={aboutFrame1} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <h1>We Develop DigitalStrategies, Products &Services.</h1>
                <p>
                  Adwat IT, founded in 2000, offers web design and app
                  development services with 20+ years of combined experience. We
                  have a successful track record in Saudi Arabia and are now
                  merging with the Egyptian market to develop affordable
                  software for medium-scale projects using modern tools and
                  technologies.
                </p>
              </div>
              <div className="col-lg-3" data-aos="fade-down" data-aos-easing="linear"
                 data-aos-duration="2000">
                <div className="img-style">
                  <img src={aboutFrame2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="heading-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
              <h1>Unstoppable Service Excellence</h1>
              <p>
                Passionate, Trustworthy, and Humble - Empowering Clients and
                Teams to Flourish with a Positive Mindset.
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
                <h4>Pursuing Service Excellence</h4>
                <p>
                  Fuelled by passion and unwavering dedication, we tirelessly
                  strive to conquer our clients' future challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img2} alt="" />
                </div>
                <h4>Trust-Fueled Collaboration</h4>
                <p>
                  Guided by unwavering trust, our collaboration defies limits,
                  propelling us forward as an unstoppable force.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img3} alt="" />
                </div>
                <h4>Scaling New Heights, Staying Humble</h4>
                <p>
                  As we soar to new heights, humility remains our compass,
                  driving continuous improvement and honoring our origins.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img5} alt="" />
                </div>
                <h4>Relentlessly Hungry</h4>
                <p>
                  With insatiable hunger, we relentlessly surge ahead, refusing
                  to settle for anything but extraordinary.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img6} alt="" />
                </div>
                <h4>Nurturing Flourishing Lives</h4>
                <p>
                  Our mission is to empower individuals, fostering their growth
                  and enabling them to flourish in every facet of life.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-1" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
              <div className="card-style">
                <div className="img-service-style">
                  <img src={img4} alt="" />
                </div>
                <h4>Cultivating a Positive Mindset</h4>
                <p>
                  {" "}
                  In the face of challenges, we embrace positivity, creating a
                  supportive environment that fuels collaboration and
                  strengthens our team's unity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="heading-style" style={{ backgroundColor: "#F0F2FA" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
              <h1>How about The Elite Squad?</h1>
              <p>
                A Synergistic Collaboration of Creative Designers and Innovative
                Developers, Working Together to Bring Your Ideas to Life.
              </p>
            </div>
            <CareerCarousel />
          </div>
        </div>
      </section>
      <section className="partnership">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
              <h1>The Power of Partnership</h1>
              <p>
                Exploring the Synergies and Collaborative Efforts between Our
                Partners and Our Organization to Foster Innovation, Drive
                Growth, and Deliver Value to Our Customers.
              </p>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
              <div>
                <img style={{ width: "100%" }} src={Frame1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="col-img">
        <div className="container">
          <div className="row">
            <div className="bg-img col-lg-12 col-md-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <h2>Get in Touch with Us</h2>
              <p>We're Here to Help with Any Questions or Concerns</p>
              <div className="btn-style-2">Have a Questions? </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
