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
        {productsData.map((item) => (
          <div className="mt-20">
            <p className="opacity-60">{item.title}</p>
            <img src={item.heroImage} alt="Hello" className="w-50" />
            <div className="flex gap-3 mt-5">
              <p className="text-xl">₹{item.finalPrice}</p>
              <p className="line-through text-xl opacity-50">
                ₹{item.originalPrice}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
