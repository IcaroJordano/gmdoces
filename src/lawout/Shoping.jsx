import { useMediaQuery } from "@uidotdev/usehooks";

import Titulo from "./../Elements/Titulo"
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
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return(
        <div className="Shoping" >
            <Titulo text='SHOPPING'></Titulo>            
            <a href="">See  All</a>
            <Swiper spaceBetween={10} pagination={{ clickable: true }} modules={[Navigation, Pagination, Scrollbar, A11y]} className="carroseu"  slidesPerView={isSmallDevice ? "2" : "3"} >
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
            {/* <CardShoping></CardShoping> */}
        </div>
    )
}
export default Shoping