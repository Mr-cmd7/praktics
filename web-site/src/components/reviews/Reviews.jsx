import './Reviews.css';
import { reviewItems } from "../../assets/data.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="container">
                <div className="common-title">
                    <p>Отзывы о нашей работе</p>
                </div>
                <div className="swiper-container">
                    <Swiper
                        className="swiper"
                        pagination={{
                            type: 'fraction',
                            el: '.custom-fraction',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.custom-button-next',
                            prevEl: '.custom-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        slidesPerView={3}
                        mousewheel={true}
                        spaceBetween={24}
                    >
                        {reviewItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slider-item">
                                    <img className="i-logo" src={item.logo} alt=""/>
                                    <p className="i-title">{item.title}</p>
                                    <p className="i-text">{item.text}</p>
                                    <p className="i-author">{item.author}</p>
                                    <p className="i-position">{item.position}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="custom-pagination">
                    <button className="custom-button-prev">←</button>
                    <span className="custom-fraction"></span>
                    <button className="custom-button-next">→</button>
                </div>
            </div>
        </div>
    );
}
