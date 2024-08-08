import "./Shoping.css"
import CardShoping from "./../Elements/CardShoping"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Shoping(){
    return(
        <div className="Shoping" >
            <h1>-------- SHOPPING --------</h1>
            <a href="">See  All</a>
            <Swiper 
      pagination={{ clickable: true }}
           modules={[Navigation, Pagination, Scrollbar, A11y]}
 className="carroseu"  slidesPerView={3} >
                    <SwiperSlide className="Item fist">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                    <SwiperSlide className="Item">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                    <SwiperSlide className="Item">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                    <SwiperSlide className="Item">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                    <SwiperSlide className="Item">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                    <SwiperSlide className="Item">
                        <CardShoping className="slide_item"></CardShoping>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}
export default Shoping