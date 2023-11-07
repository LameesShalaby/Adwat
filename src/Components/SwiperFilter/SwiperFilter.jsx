import "./SwiperFilter.css";
import logo from "../../assets/images/career.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Component } from "react";
const allCats = [
  {
    category: "Frontend Developers",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Quality Intern",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Backend Developers",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "UX/UI Designers",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Graphic Designers",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Human Resource",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Fluter Developer",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Graphic Designers",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  {
    category: "Quality Intern",
    src:logo,
    alt:"logo",
    location:"Alexandria- Egypt",
    yearsOfExperiencec:"1 Year",
    vacancies:3,
  },
  
];

class SwiperFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: "All",
    };
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  filterCat = () => {
    if (this.state.selectedFilter === "All") {
      return allCats;
    }
    return allCats.filter((cat) => cat.category === this.state.selectedFilter);
  };

  render() {
    return (
      <>
        <div className="swiper-filter-tabs">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            centeredSlides={false}
            slidesPerView={3}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="myFilterSwiper"
          >
            <SwiperSlide>
              <button
                className="all-btn"
                onClick={() => this.handleFilterChange("All")}
              >
                All
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("Frontend Developers")}
              >
                Frontend Developers
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button onClick={() => this.handleFilterChange("Quality Intern")}>
                Quality Intern
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("Backend Developers")}
              >
                Backend Developers
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("UX/UI Designers")}
              >
                UX/UI Designers
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("Graphic Designers")}
              >
                Graphic Designers
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("Human Resource")}
              >
                Human Resource
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => this.handleFilterChange("Fluter Developer")}
              >
                Fluter Developer
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="row cat-container">
          {this.filterCat().map((cat, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
              <div className="job-card">
                <div className="row">
                  <div className="col-lg-8">
                    <h5>{cat.category}</h5>
                    <p className="color-dark">{cat.location}</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="img-logo">
                      <img src={cat.src} alt={cat.alt} />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <p>
                    Years of Experience:<span> {cat.yearsOfExperiencec} </span>
                  </p>
                  <p>
                  No. of open vacancies:<span> {cat.vacancies} </span>
                  </p>
                </div>
                <a href="/career">
                  <div className="btn-style-1">View Details</div>
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SwiperFilter;
