import "./Events.css"
import CardEvent from "../Elements/CardEvent"
import Titulo from "./../Elements/Titulo"
 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Events(){
    return(
        <div className="Events" >
            <Titulo text={"EVENTOS"}></Titulo>
            <Swiper spaceBetween={1} pagination={{ clickable: true }}modules={[Navigation, Pagination, Scrollbar, A11y]} className="carroseu"  slidesPerView={3} >
                    <SwiperSlide className="Item fist">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                   <SwiperSlide className="Item">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                   <SwiperSlide className="Item">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                   <SwiperSlide className="Item">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                   <SwiperSlide className="Item">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                   <SwiperSlide className="Item">
                        <CardEvent className="slide_item"></CardEvent>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}
export default Events