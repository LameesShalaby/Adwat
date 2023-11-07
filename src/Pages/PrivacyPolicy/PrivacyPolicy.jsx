import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="privacy-policy">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-2" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <div className="left-arrow">
                  <Link to="/">
                    <FaLongArrowAltLeft />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
                <p>Read Our</p>
                <h1>privacypolicy</h1>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <div className="policy-card">
                <p>Last Updated: [Date]</p>
                <p>
                  [Your Company Name], ("we," "us," or "our") is committed to
                  protecting the privacy of individuals who use our website,
                  mobile applications, and other online services (collectively,
                  the "Services"). This Privacy Policy outlines the types of
                  personal information we collect, how we use it, and your
                  rights regarding your data. By using our Services, you consent
                  to the practices described in this policy.
                </p>
                <div className="">
                  <h4>Information We Collect</h4>
                  <p>We may collect the following types of information:</p>
                  <ul>
                    <li>
                      <span className="color-change">
                        1- Personal Information:
                      </span>{" "}
                      This includes information that can identify you, such as
                      your name, email address, postal address, or phone number.
                    </li>
                    <li>
                      <span className="color-change">
                        2- Usage Information:
                      </span>{" "}
                      We collect data on how you interact with our Services,
                      including your IP address, device information, and
                      browsing history.
                    </li>
                    <li>
                      <span className="color-change">
                        3- Cookies and Tracking Technologies:
                      </span>{" "}
                      We use cookies and similar technologies to improve your
                      experience and collect data about your preferences and
                      activities.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4>How We Use Your Information</h4>
                  <p>
                    We do not sell or rent your personal information to third
                    parties. However, we may share your information in the
                    following ways:
                  </p>
                  <ul>
                    <li>
                      <span className="color-change">
                        1- With Service Providers:
                      </span>{" "}
                      We may share your data with third-party service providers
                      who assist us in providing our Services.
                    </li>
                    <li>
                      <span className="color-change">2- Legal Compliance:</span>{" "}
                      We may share your information in response to a legal
                      request or to protect our rights, privacy, safety, or
                      property.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4>Security</h4>
                  <p>
                    We take reasonable steps to protect your data, but no method
                    of transmission over the internet is entirely secure. We
                    cannot guarantee the security of your information.
                  </p>
                </div>
                <div className="">
                  <h4>Changes to this Privacy Policy</h4>
                  <p>
                    We may update this Privacy Policy as our Services evolve or
                    as required by law. The most recent version will be posted
                    on our website.
                  </p>
                </div>
                <div className="">
                  <h4>Contact Us</h4>
                  <p>
                    If you have questions about this Privacy Policy or your
                    data, please contact us at:
                  </p>
                  <p>[Your Contact Information]</p>
                  <p>
                    Please note that this is a sample privacy policy, and you
                    should adapt it to your specific needs and legal
                    requirements. Always consult with legal counsel to ensure
                    your privacy policy is compliant with applicable laws and
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
