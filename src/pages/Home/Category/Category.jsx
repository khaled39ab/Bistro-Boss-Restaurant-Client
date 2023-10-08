import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import slide6 from '../../../assets/home/slide6.jpg';
import slide7 from '../../../assets/home/slide7.jpg';
import slide8 from '../../../assets/home/slide8.jpg';

const Category = () => {
    return (
        <>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center uppercase">Order Online</div>
                <div className="divider"></div>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Soup</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Soup</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} alt="food-category" />
                    <h4 className='text-3xl text-white text-center -mt-14 uppercase'>Desserts</h4>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;