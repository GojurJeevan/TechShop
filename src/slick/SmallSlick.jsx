import Slider from "react-slick";
import productsData from "../productsdata/ProductsData";

export const SmallSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10 mt-20 opacity-80">
        Featured Products
      </h2>

      <Slider {...settings}>
        {productsData.map(item => 
          <div>
            <img src={item.heroImage} alt="Hello" />
          </div>
        )}
      </Slider>
    </div>
  );
};
