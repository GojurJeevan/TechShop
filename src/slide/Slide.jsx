import Slider from "react-slick";
import productsData from "../productsdata/ProductsData";
import { useCallback, useMemo } from "react";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const taglineFilter = useCallback(()=>{
    return productsData.filter(item => item.tagline)
  },[]);

  const finalTagline = useMemo(()=> taglineFilter(),[taglineFilter])

  return (
    <>
      <Slider {...settings}>
        {finalTagline.map(item =>
         <div key={item.id}>
            <div className="flex justify-evenly mt-20">
              <div>
                <p className="text-2xl opacity-60">{item.title}</p>
                <p className="text-4xl font-bold">{item.tagline}</p>
                <div className="flex gap-3 mt-5">
                  <p className="text-xl">₹{item.finalPrice}</p>
                  <p className="line-through text-xl opacity-50">₹{item.originalPrice}</p>
                </div>
                <button className="mt-5 border border-red-700 bg-red-700 rounded h-10 w-30">Shop Now</button>
              </div>
              <div>
                <img src={item.heroImage} alt="" className="h-100"/>
              </div>
            </div>
         </div> 
        )}
      </Slider>
      
    </>
  );
}
