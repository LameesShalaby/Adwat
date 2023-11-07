import ContactForm from "../../Components/ContactForm/ContactForm";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import downArrow from "../../assets/images/down-arrow.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <section className="banner-style" >
        <div className="container">
          <div className="row justify-content-center mask-group">
            <div className="property-data">
              <div className="col-lg-5 col-md-12 text" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <h1 >Contact us</h1>
                <div className="row justify-content-end">
                  <div className="hook">
                    <a href="#find-out-more">
                      {" "}
                      <img src={downArrow} alt="" />
                    </a>
                  </div>
                  <a href="#find-out-more">
                    <p data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">Find out more</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="heading-style"
        id="find-out-more"
        style={{ backgroundColor: "#F0F2FA" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <h1>Let's make your brand brilliant!</h1>
              <p>
                Our full-service digital agency specializes in custom UX/UI
                design, development, and branding. With experience working on
                large-scale projects for clients of all sizes, we have the
                expertise to bring your vision to life. Contact us to elevate
                your digital presence.
              </p>
              <div className="buttons">
                <a href="#send-us-a-message">
                  <div className="btn-style-1">Send Us a message</div>
                </a>
                <a href="#our-contacts">
                  <div className="btn-style-1">Our Contacts </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
        <GoogleMap/>
      </section>
      <section className="contact heading-style"
        id="send-us-a-message"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row ">
            <div className=" col-lg-2"></div>
            <div className="col-lg-7 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <h1 className="pb-lg-5">Contact with us</h1>
              <ContactForm />
            </div>
            <div className=" col-lg-2"></div>
          </div>
        </div>
      </section>
      <section className="info" id="our-contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h1 >Offices</h1>
              <p style={{ color: "#100F2F" }}>Two Offices on Two Continents.</p>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h5> Saudi Arabia</h5>
              <p>
                Riyadh / Al-Nakheel District / Al-Takhassusi <br />
                Street Office No. 1/ ground floor
              </p>
              <p>
                <a href="mailto:Office@email.com">Office@email.com</a>
              </p>
              <p>
                <a href="tel:(414) 687 - 5892">(414) 687 - 5892</a>
              </p>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h5> Egypt</h5>
              <p>
                716 Abokir Sreet, Alexandria <br />
                Governorate 21500
              </p>
              <p>
                <a href="mailto:Office@email.com">Office@email.com</a>
              </p>
              <p>
                <a href="tel:(+2) 0101-1266-300">(+2) 0101-1266-300</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
