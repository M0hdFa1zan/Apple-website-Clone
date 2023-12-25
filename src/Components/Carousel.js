import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import "./Carousel.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide1 from "../Components/Assets/slide1.jpg"
import Slide2 from "../Components/Assets/slide2.jpg"
import Slide3 from "../Components/Assets/slide3.jpg"
import Slide4 from "../Components/Assets/slide4.jpg"
import Slide5 from "../Components/Assets/slide5.jpg"
import Slide6 from "../Components/Assets/slide6.jpg"


function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={Slide1} /></SwiperSlide>
                <SwiperSlide><img src={Slide2} /></SwiperSlide>
                <SwiperSlide><img src={Slide3} /></SwiperSlide>
                <SwiperSlide><img src={Slide4} /></SwiperSlide>
                <SwiperSlide><img src={Slide5} /></SwiperSlide>
                <SwiperSlide><img src={Slide6} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel