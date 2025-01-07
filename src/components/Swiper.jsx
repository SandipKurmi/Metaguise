import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Swipper.css";

export const Swipper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      style={{ height: "80vh" }} // Full-height slider
    >
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: `url('../assets/banner1.png')` }}
        >
          <div className="slide-content">
            <h1>Experience Timeless Architecture</h1>
            <p>that Redefine Sophistication</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: `url('../assets/banner2.png')` }}
        >
          <div className="slide-content">
            <h1>Illuminating Architectural Brilliance</h1>
            <p>Facades that Captivate</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: `url('../assets/banner3.png')` }}
        >
          <div className="slide-content">
            <h1>Reimagining Interiors</h1>
            <p>with Distinct Aesthetics</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
