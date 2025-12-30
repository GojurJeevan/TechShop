import Slider from "react-slick";
import productsData from "../productsdata/ProductsData";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {productsData.map(item =>
         
        
          <div>
            <img src={item.heroImage} alt="Image" />
            <p>{item.tagline}</p>
          </div>
          
        )}
      </Slider>
    </>
  );
}
