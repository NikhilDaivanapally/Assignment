import img from "../assets/slide_image.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative h-56 overflow-hidden rounded-lg md:h-85"
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="w-full h-full bg-amber-100 relative">
            <img
              src={img}
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-[#C79A85] text-white flex flex-col items-center justify-center relative">
            <h1 className="text-xl md:text-3xl font-semibold">
              Featured Profiles
            </h1>
            <span className="md:text-xl text-center">
              Curated with Care to Spark meaningful connections
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full text-white text-start flex justify-center pl-16 flex-col relative bg-red-100 bg-[url(./assets/slide_image.jpg)] bg-no-repeat bg-cover">
            <h1 className="text-xl md:text-3xl">Featured Profiles</h1>
            <span className="md:text-xl">
              Curated with Care to Spark meaningful connections
            </span>
          </div>
        </SwiperSlide>

        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 z-10 text-white hover:scale-110 transition-transform"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          ref={nextRef}
          className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 z-10 text-white hover:scale-110 transition-transform"
        >
          <ChevronRight size={32} />
        </button>
      </Swiper>
    </div>
  );
};

export default Carousel;
