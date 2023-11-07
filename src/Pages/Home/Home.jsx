import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clock from "../../assets/images/text.svg";
import Frame1 from "../../assets/images/Frame1.png";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import CoverFlowSlider from "../../Components/CoverFlowSlider/CoverFlowSlider";
import Filtering from "../../Components/Filtering/Filtering";
import ContactForm from "../../Components/ContactForm/ContactForm";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import "./Home.css";

const Home = () => {
  const newTexts = ["Faster", "with ease", "efficiently"];
  const [text, setText] = useState("Faster");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    
    const changeText = () => {
      // Apply the "fadeDownText" class before changing the text
      setTextIndex((prevIndex) => (prevIndex + 1) % newTexts.length);
      setTimeout(() => {
        setText(newTexts[textIndex]);
      }, 500); // Adjust the timing as needed
    };

    const intervalId = setInterval(changeText, 1500);

    // Cleanup the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [textIndex, newTexts]);



  return (
    <>
      <div className="home">
        <section className="home-banner">
          <div className="container">

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h1 className="animation">
                Manage your Projects 
                <span className='fadeDownText' > {text} </span>
              </h1>

              <div className="buttons">
                <a href="contact">
                  <div className="btn-style-1"> Contact Us</div>
                </a>
                <div className="btn-style-2">Discover More </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clock">
          <div className="img">
            <img src={clock} alt="" />
          </div>
        </section>
        <section className="heading-style">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1>Features Digital Marketing</h1>
                <p>
                  Makes you fly away from your competitors, and we have an
                  experienced team that will reach us with new horizons.
                </p>
              </div>
              <HomeCarousel />
            </div>
          </div>
        </section>
        <section
          className="heading-style"
          style={{ backgroundColor: "#F0F2FA" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-7 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1>
                  The Power of Satisfied Customers in Driving Business Success
                </h1>
                <p>
                  Combining Strengths to Become One of KSA's Foremost Business
                  Organizations and Harnessing the Power of Satisfied Customers
                </p>
                <div className="d-flex justify-content-center">
                  <a href="about">
                    <div className="btn-style-2">About US</div>
                  </a>
                </div>
              </div>
              <HomeAbout />
            </div>
          </div>
        </section>
        <section className="filter heading-style">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-7 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1>Digital Product Showcases</h1>
                <p>
                  Satisfied customers drive business success - Get market
                  advantage.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="portfolio">
                    <div className="btn-style-1">View Our Portfolio</div>
                  </a>
                </div>
              </div>
            </div>
            <Filtering />
          </div>
        </section>
        <section className="partnership" style={{ backgroundColor: "#F0F2FA" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1>The Power of Partnership</h1>
                <p>
                  Exploring the Synergies and Collaborative Efforts between Our
                  Partners and Our Organization to Foster Innovation, Drive
                  Growth, and Deliver Value to Our Customers.
                </p>
              </div>
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <div>
                  <img style={{ width: "100%" }} src={Frame1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews heading-style">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1>Real Reviews, Real Results</h1>
                <p>
                  How Our Customers' Testimonials Help Us Improve and Excel in
                  Our Services
                </p>
                <div className="d-flex justify-content-center">
                  <div className="btn-style-2">View Our Testimonials</div>
                </div>
              </div>
              <CoverFlowSlider />
            </div>
          </div>
        </section>
        <section
          className="contact heading-style"
          style={{ backgroundColor: "#fff", paddingBottom: "38vh" }}
        >
          <div className="container">
            <div className="row ">
              <div className=" col-lg-2"></div>
              <div
                className="col-lg-7 col-md-12 pb-lg-5 pb-md-4"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h1 className="pb-lg-5">Contact with us</h1>
                <ContactForm />
              </div>
              <div className=" col-lg-2"></div>
            </div>
          </div>
        </section>
        <section className="newsletter" style={{ backgroundColor: "#100F2F" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="bg-img col-lg-12 col-md-12"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h2>Your Source for Industry News</h2>
                <p>
                  Get ahead of the competition with our expert news coverage
                </p>
                <div className="form-container">
                  <Form inline="">
                    <Row>
                      <Col>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="newsletter-email-style"
                        />
                      </Col>
                      <Col>
                        <Button type="submit" className="newsletter-btn-style">
                          Send
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
