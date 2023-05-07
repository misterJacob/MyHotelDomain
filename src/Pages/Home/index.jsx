import React from "react";
import { landingImages } from "../../assets/context/landingSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

const Home = () => {
  console.log(landingImages);
  return (
    <div className="home-wrapper">
      <section className="section-one">
        <div className="image-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            // effect={"cube"}
            // cubeEffect={{
            //   shadow: true,
            //   slideShadows: true,
            //   shadowOffset: 20,
            //   shadowScale: 0.94,
            // }}
            speed={900}
            loop
            scrollbar={{ draggable: true }}
          >
            {landingImages.map((image) => (
              <SwiperSlide className="image-wrapper" key={image.id}>
                <img
                  className="img-slider"
                  src={`src/assets/images_front_slider/${image.image}`}
                  alt="Norcopia"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="section-two"></section>
    </div>
  );
};

export default Home;
