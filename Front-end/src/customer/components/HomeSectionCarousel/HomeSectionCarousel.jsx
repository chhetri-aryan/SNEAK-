import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import mens from '../../../Data/Mens/mens'
import './hsc.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1540 },
        items: 6,
        slidesToSlide: 1 
    },
    tablet: {
        breakpoint: { max: 1540, min: 1200 },
        items: 5,
        slidesToSlide: 1 
    },
    a: {
        breakpoint: { max: 1200, min: 1024 },
        items: 4,
        slidesToSlide: 1 
    },
    b: {
        breakpoint: { max: 1020, min: 800 },
        items: 3,
        slidesToSlide: 1 
    },
    fd: {
        breakpoint: { max: 800, min: 580 },
        items: 2,
        slidesToSlide: 1 
    },
    mobile: {
        breakpoint: { max: 580, min: 0 },
        items: 1,
        slidesToSlide: 1 
    }
};


const HomeSectionCarousel = (prop) => {

    const items = mens.map((item) => <HomeSectionCard product={item} />)
    return (
        <div className='relative px-4 lg:px-8 justify-center'>
            <div className="text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    {prop.sectionName}
                </span>
            </div>
            <div className='relative p-5'>
                <Carousel
                    responsive={responsive}
                    enterMode={true}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    autoPlaySpeed={300}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={300}
                    containerClass="carousel-container"
                    renderDotsOutside={true}
                    dotListClass="h-0"
                    // display: flex; justify-content: center; align-items: center
                    itemClass="Ic">
                    {items}
                </Carousel>


                {/* {<Button variant='contained' className='z-50' sx={{ position: 'absolute', top: '8rem', right: '0rem', bgcolor: "red" }} aria-label='next' onClick={""}>
                    {'>'}
                </Button>}

                {<Button variant='contained' className='z-50' sx={{ position: 'absolute', top: '8rem', left: '0rem', bgcolor: "red" }} aria-label='prev' onClick={""}>
                    {'<'}
                </Button>} */}

            </div>

        </div>

    )
}

export default HomeSectionCarousel
