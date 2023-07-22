import image1 from '../../assets/graduate1.jpg'
import image2 from '../../assets/graduate2.jpg'
import image3 from '../../assets/graduate3.jpg'
import image4 from '../../assets/graduate4.jpg'
import image5 from '../../assets/graduate5.jpg'
import image6 from '../../assets/graduate6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";

import 'swiper/css';
// import "swiper/css/pagination"

const GraduateGallery = () => {
    return (
        <div className='my-20'>
            <h2 className="text-3xl font-semibold text-center my-5">Graduate Gallery</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={image1} alt="" className='lg:h-[200px] lg:w-[350px]'/></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" className='lg:h-[200px] lg:w-[350px]' /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" className='lg:h-[200px] lg:w-[350px]'/></SwiperSlide>
                <SwiperSlide><img src={image4} alt="" className='lg:h-[200px] lg:w-[350px]'/></SwiperSlide>
                <SwiperSlide><img src={image5} alt="" className='lg:h-[200px] lg:w-[350px]'/></SwiperSlide>
                <SwiperSlide><img src={image6} alt="" className='lg:h-[200px] lg:w-[350px]'/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GraduateGallery;