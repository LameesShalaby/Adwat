import Filtering from "../../Components/Filtering/Filtering";
import downArrow from "../../assets/images/down-arrow.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <section className="banner-style">
        <div className="container">
          <div className="row justify-content-center mask-group">
            <div className="property-data">
              <div className="col-lg-6 col-md-12 text" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <h1>Our Portfolio</h1>
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
      <section className="filter heading-style" id="find-out-more">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pb-5" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h1>Our Featured Projects</h1>
            </div>
          </div>
          <Filtering />
        </div>
      </section>
      <section className="col-img">
        <div className="container">
          <div className="row">
            <div className="bg-img col-lg-12 col-md-12" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h2>Get in Touch with Us</h2>
              <p>We're Here to Help with Any Questions or Concerns</p>
              <a href="/contact"><div className="btn-style-2">Have a Questions? </div></a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
