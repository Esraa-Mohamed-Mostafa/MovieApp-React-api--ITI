import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import movie2 from '../Components/movie2.jpg';
import movie3 from '../Components/movie3.jpg';
import './Movie/Movie.css';


const SwiperSlider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={movie2} alt="" className="m-auto services_slider_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie3} alt="" className="m-auto services_slider_img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
