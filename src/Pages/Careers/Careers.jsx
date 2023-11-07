import downArrow from "../../assets/images/down-arrow.svg";
// import career from "../../assets/images/career.png";
import SwiperFilter from "../../Components/SwiperFilter/SwiperFilter";
import "./Careers.css";

const Career = () => {
  return (
    <section className="career">
      <section className="banner-style">
        <div className="container">
          <div className="row justify-content-center mask-group">
            <div className="property-data">
              <div className="col-lg-5 col-md-12 text" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
                <h1>Our Careers</h1>
                <div className="row justify-content-end">
                  <div className="hook">
                    <a href="/apply-now">
                      <img src={downArrow} alt="" />
                    </a>
                  </div>
                  <a href="/apply-now">
                  <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div className="btn-style-2">Submit your C.V</div>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="heading-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pb-lg-5 pb-md-4" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
              <h1>
                Join Our Team: <br />
                Explore Your Career Opportunity With Us.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="cat-filter">
        <div className="container">
          <SwiperFilter />
        </div>
      </section>
      <section className="jobs-cards">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="btn-style-2">Load More</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Career;
