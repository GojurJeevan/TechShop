import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/products/banner1.png";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="flex justify-between">
            <p className="text-5xl">Hello</p>
            <div>
              <img src={banner1} alt="Banner 1" className="h-100" />
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
