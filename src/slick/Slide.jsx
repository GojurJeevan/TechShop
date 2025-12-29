import Slider from "react-slick";

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
          <div className="flex justify-between mt-40">
            <div className="text-white text-5xl font-bold">
              Keep The Noise <br />Out, Or In. You Choose.
            </div>
            <div className="hidden lg:block">
              <img src={banner1} alt="Banner 1" className="h-100" />
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
