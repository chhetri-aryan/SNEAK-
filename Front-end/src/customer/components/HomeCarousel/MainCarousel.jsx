import React from 'react';
import "../../../App.css"
import './mc.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    };
    

    const items = mainCarouselData.map((item) => <img className='carousel mc1' role='presentation' src={item.image} alt='hello' />)
    return (
        <Carousel 
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={false}
        dotListClass="custom-dot-list-style scale-150 h-20 gap-1"
        keyBoardControl={true}
        //minimumTouchDrag={10}
        rewindWithAnimation={true}
        >
            {items}
        </Carousel>
    )
}
export default MainCarousel