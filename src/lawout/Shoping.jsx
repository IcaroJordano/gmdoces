import "./Shoping.css"
import CardShoping from "./../Elements/CardShoping"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Shoping(){
    return(
        <div className="Shoping" >
            <h1>-------- SHOPPING --------</h1>
            <a href="">See  All</a>
                <Swiper className="carroseu" spaceBetween={10} slidesPerView={2} 
      scrollbar={{ draggable: true }} pagination={{clickable:true}} >
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