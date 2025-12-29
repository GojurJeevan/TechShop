import Slider from "react-slick";
import banner2 from "../assets/products/banner2.png";
import banner4 from "../assets/products/banner4.png";
import banner5 from "../assets/products/banner5.png";
import banner6 from "../assets/products/banner6.png";
import banner7 from "../assets/products/banner7.png";

const products = [
  {
    id: 1,
    name: "boAt Rockerz 255",
    price: "₹899",
    oldPrice: "₹1,599",
    img: banner2,
  },
  {
    id: 2,
    name: "JBL Endurance Run",
    price: "₹1,299",
    oldPrice: "₹3,990",
    img: banner7,
  },
  {
    id: 3,
    name: "boAt Airdopes 203",
    price: "₹1,074",
    oldPrice: "₹3,999",
    img: banner4,
  },
  {
    id: 4,
    name: "boAt Rockerz 518",
    price: "₹1,299",
    oldPrice: "₹3,999",
    img: banner5,
  },
  {
    id: 5,
    name: "JBL Tune 760NC",
    price: "₹5,999",
    oldPrice: "₹7,999",
    img: banner6,
  },
];

export const SmallSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10 mt-20 opacity-80">
        Featured Products
      </h2>

      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="px-3">
            <div className="p-4 text-center hover:scale-105 transition duration-300">

              <h3 className="text-sm mb-2 font-thin">
                {item.name}
              </h3>

              <img
                src={item.img}
                alt={item.name}
                className="mx-auto h-60 object-contain mb-4"
              />

              <div className="flex justify-center gap-2 mb-3">
                <span className="text-white font-semibold">
                  {item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {item.oldPrice}
                </span>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
