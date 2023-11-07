import "./ApplyNow.css";
import career from "../../assets/images/career.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ApplyForm from "../../Components/ApplyForm/ApplyForm";
const ApplyNow = () => {
  return (
    <section className="apply-career">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-2" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">
            <div className="left-arrow">
              <Link to="/career">
                <FaLongArrowAltLeft />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 mb-5" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="2000">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src={career} alt="" />
            </div>
            <h1 className="text-center">UX/UI Designer</h1>
            <p className="color-dark text-center">Alexandria- Egypt</p>
          </div>
          <div className="col-lg-4 col-md-2"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-easing="ease-in-sine"
                 data-aos-duration="3000">
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
