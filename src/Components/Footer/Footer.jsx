import logo from "../../assets/images/AdwatLogo.png";
import email from "../../assets/images/Email.svg";
import phone from "../../assets/images/Phone.svg";
import mark from "../../assets/images/Mark.svg";
import facebook from "../../assets/images/Facebook.svg";
import twitter from "../../assets/images/Twitter.svg";
import youtube from "../../assets/images/YouTube.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/LinkedIn.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p className="logo-info">
              Adwat IT, founded in 2000, offers web design and app development
              services with 20+ years of combined experience.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/AdwatIT">
                <img src={facebook} alt="" />
              </a>
              <a href="https://twitter.com/TechnologyAdwat">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/adwat.info.tech/">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/adwat-info-tech/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.youtube.com/channel/UCgmTL_KXb9n8UgpQDMfFBlA">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 product">
            <h4>Product</h4>
            <a href="">
              <p>Features</p>
            </a>
            <a href="">
              <p>Pricing</p>
            </a>
            <a href="">
              <p>Case studies</p>
            </a>
            <a href="">
              <p>Reviews</p>
            </a>
            <a href="">
              <p>Updates</p>
            </a>
          </div>

          <div className="col-lg-2 company">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/contact">
              <p>Contact Us</p>
            </a>
            <a href="/careers">
              <p>Careers</p>
            </a>
            <a href="">
              <p>Culture</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
          </div>

          <div className="col-lg-2 support">
            <h4>Support</h4>
            <a href="">
              <p>Getting started</p>
            </a>
            <a href="">
              <p>Help center</p>
            </a>
            <a href="">
              <p>Server status</p>
            </a>
            <a href="">
              <p>Report a bug</p>
            </a>
            <a href="">
              <p>Chat support</p>
            </a>
            <a href="/privacy-policy">
              <p>privacy policy</p>
            </a>
          </div>

          <div className="col-lg-3">
            <h4>Contacts us</h4>
            <div className="icons">
              <div className="text-icon">
                <img src={email} alt="" />
                <a href="mailto:info@adwat.com">
                  <p>info@adwat.com</p>
                </a>
              </div>
              <div className="text-icon">
                <img src={phone} alt="" />
                <a href="tel:(414) 687 - 5892">
                  <p>(414) 687 - 5892</p>
                </a>
              </div>
              <div className="text-icon">
                <img src={mark} alt="" />
                <p>
                  Riyadh / Al-Nakheel District / Al-Takhassusi <br />
                  Street Office No. 1/ ground floor
                </p>
              </div>
              <div className="text-icon">
                <img src={mark} alt="" />
                <p>
                  716 Abokir Sreet, Alexandria <br />
                  Governorate 21500
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="copyright">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyright &copy; {currentYear} Adwat Information technology{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                All Rights Reserved |{" "}
                <span style={{ color: "#7BB981" }}>
                  Terms and Conditions | Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
