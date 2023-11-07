// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "./HomeCarousel.css";
import img1 from "../../assets/images/software.png";
import img2 from "../../assets/images/develop.png";
import img3 from "../../assets/images/design.png";
import img4 from "../../assets/images/erp.png";
import img5 from "../../assets/images/marketing.png";
import img6 from "../../assets/images/web-development 1.png";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
const HomeCarousel = () => {
  return (
    <>
      <div className="row">
        <Swiper
          pagination={pagination}
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          loop={true}
          centeredSlides={false}
          slidesPerView={3}
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
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <div className="img-carousel-style">
                <img src={img1} alt="" />
              </div>
              <h4>Software Development</h4>
              <p>
                How we drive your product to success: Mobile Apps, Desktop, Web
                Applications, Software as a Service
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="2000">
              <div className="img-carousel-style">
                <img src={img2} alt="" />
              </div>
              <h4>App Development</h4>
              <p>
                provide clients with world class software technology that
                optimizes business processes.
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <div className="img-carousel-style">
                <img src={img3} alt="" />
              </div>
              <h4>Design & Branding</h4>
              <p>
                Increase web traffic with pay-per click and retargeting
                advertising for your web pages.
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="2000">
              <div className="img-carousel-style">
                <img src={img4} alt="" />
              </div>
              <h4>ERP System</h4>
              <p>
                Adwat ERP helps you engage with leads and customers, get
                insights about your business, build a scalable sales process,
                and grow your business faster.
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <div className="img-carousel-style">
                <img src={img5} alt="" />
              </div>
              <h4>Marketing Support</h4>
              <p>
                Comprehensives SEO involves keywords research and ranking
                racking, on-site optimizations, backlink analysis.
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-style" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="2000">
              <div className="img-carousel-style">
                <img src={img6} alt="" />
              </div>
              <h4>Web Development</h4>
              <p>
                Startup Owner's Manual guides you through Steve Blank's proven
                Customer Development process, step-by-step.
              </p>
              <div className="btn-style-1">Read More</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel;
