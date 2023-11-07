import career from "../../assets/images/career.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SingleCareer.css";
const SingleCareer = () => {
  return (
    <section className="single-career">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-2">
            <div className="left-arrow">
              <Link to="/careers">
                <FaLongArrowAltLeft />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 mb-5">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src={career} alt="" />
            </div>
            <h1>UX/UI Designer</h1>
            <p className="color-dark text-center">Alexandria- Egypt</p>
            <div>
              <Link to="/apply-now">
                <div className="btn-style-2">Apply Now</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-2"></div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="job-details-card">
              <h6>Job Details</h6>
              <hr />
              <div className="row w-100">
                <div className="col-5">
                  <p>Experience Needed:</p>
                </div>
                <div className="col-7">
                  <p className="color-dark">3 To 5 Years</p>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-5">
                  <p>Career Level:</p>
                </div>
                <div className="col-7">
                  <p className="color-dark">Experienced</p>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-5">
                  <p> Education Level:</p>
                </div>
                <div className="col-7">
                  <p className="color-dark">Bachelor's Degree</p>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-5">
                  <p> Salary:</p>
                </div>
                <div className="col-7">
                  <p className="color-dark">Confidential</p>
                </div>
              </div>
              {/* <p>Experience Needed: <span className='color-dark'>3 To 5 Years</span></p>
                        <p>Career Level: <span className='color-dark'>Experienced</span></p>
                        <p>Education Level: <span className='color-dark'>Bachelor's Degree</span></p>
                        <p>Salary: <span className='color-dark'>Confidential</span></p> */}
            </div>
            <div className="job-desc-card">
              <h6>Job Description</h6>
              <hr />
              <p>
                As a UI/UX designer you’re expected to have outstanding artistic
                sense to create distinctive user experience through establishing
                user-friendly, smoothing, functional, and responsive interface
                as well as owning necessary web technologies.
              </p>
            </div>
            <div className="job-Key-card">
              <h6>Your Key Responsibilities will be:</h6>
              <hr />
              <ul>
                <li>Design user interface for web and mobile applications.</li>
                <li>Rapid prototyping of design concept and user interface.</li>
                <li>
                  Translate concepts into wire-frames and mock-ups that lead to
                  intuitive and friendly user experiences.
                </li>
                <li>
                  Identify UI/UX problems and recommend effective solutions.
                </li>
              </ul>
            </div>
            <div className="job-require-card">
              <h6>Job Requirements</h6>
              <hr />
              <ul>
                <li>
                  {" "}
                  Extensive experience in UI design, ideally for desktop web
                  applications and mobile apps (tablets and phones).
                </li>
                <li>
                  Excellent experience in Adobe Creative Products preferably
                  Photoshop and Illustrator.
                </li>
                <li>Dealing with (Balsamiq, axure RP or similar) is a plus.</li>
                <li>Strong UI/UX design skills and understanding.</li>
                <li>
                  Solid understanding of current trends and UI design patterns.
                </li>
                <li>Hands-on Experience in Responsive Design.</li>
                <li>Basic knowledge of web technologies (HTML/CSS).</li>
              </ul>
            </div>
            <div className="mt-5">
              <a href="/apply-now">
                <div className="btn-style-2">Apply Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCareer;
