import career1 from "../../assets/images/career1.png";
import career2 from "../../assets/images/career2.png";
import career3 from "../../assets/images/career3.png";
import career4 from "../../assets/images/career4.png";
import career5 from "../../assets/images/career5.png";
import career6 from "../../assets/images/career6.png";
import career7 from "../../assets/images/career7.png";
import career8 from "../../assets/images/career8.png";
import career9 from "../../assets/images/career9.png";
import career10 from "../../assets/images/career10.png";
import career11 from "../../assets/images/career11.png";
import career12 from "../../assets/images/career12.png";
import career13 from "../../assets/images/career13.png";
import career14 from "../../assets/images/career14.png";
import career15 from "../../assets/images/career15.png";
import career16 from "../../assets/images/career16.png";
import career17 from "../../assets/images/career17.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./CareerCarousel.css";
const CareerCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="careerSwiper"
      >
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career1} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career2} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career3} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career4} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career5} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career6} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career7} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career8} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career9} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career10} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career11} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career12} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career13} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career14} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career15} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career16} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-career-style">
            <div className="img-card-career-style">
              <img src={career17} alt="" />
            </div>
            <p>
              Name <span className="float-right">Job title</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CareerCarousel;
