import imgstar from "../../assets/images/imgstar.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CoverFlowSlider.css";

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

export default function CoverFlowSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
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
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 750,
          },
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-flow-style">
            <p>Product Manager</p>
            <h4>Mr. John Jack</h4>
            <div className="img-card-flow-style">
              <img src={imgstar} alt="" />
            </div>
            <p>
              Probably the Best Company That provides Infrastructure services
              With A wide Verity of Cameras and Professional Team of experts and
              the Best Customer Services.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
