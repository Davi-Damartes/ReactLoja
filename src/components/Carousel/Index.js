import Slider from "react-slick";
import "./Carousel.css";

function Carousel( {children} ){
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 5,
        slidesToScroll:1
      };

    return(
        <div className="slider-container">
            <Slider {...settings}>
                { children }
            </Slider>

            
        </div>



    )

}

export default Carousel;