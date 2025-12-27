import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/products/banner1.png"

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
        <div>
            <img src={banner1} alt="Banner 1" className="h-200" />
        </div>
        <div>
            <img src={banner1} alt="Banner 1" className="h-200" />
        </div>
    </Slider>
  );
}