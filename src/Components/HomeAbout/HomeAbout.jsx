import { FaArrowRight } from "react-icons/fa";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="home-about-section">
      <div className="row">
        <div className="col">
          <div className="card-bg-purple">
            <p>
              Our mission is to enhance the efficiency and flexibility of your
              team in order to achieve extraordinary outcomes.
            </p>
            <FaArrowRight />
          </div>
        </div>
        <div className="col">
          <div className="card-bg-gray">
            <h2>23 years</h2>
            <p>Of success</p>
          </div>
        </div>
        <div className="col">
          <div className="card-bg-img-text">
            <h3>We develop digital strategies</h3>
          </div>
        </div>
        <div className="col">
          <div className="card-bg-purply-obacity">
            <h2>500+</h2>
            <p>Branches managed by us</p>
          </div>
        </div>
        <div className="col col-width">
          <div className="card-bg-img"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
