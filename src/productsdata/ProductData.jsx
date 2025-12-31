import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import { Header } from "../Pages/Header";

export const ProductData = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === Number(id));

  return (
    <>
      <Header />
      <div className="flex">
        <div>
          {product.images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="product"
              className="w-40 h-40 m-5 border rounded opacity-60 hover:opacity-95"
            />
          ))}
        </div>
        <div>
          <img src={product.heroImage} alt="" className="h-190" />
        </div>
        <div>
          <div>
            <p className="text-3xl font-bold opacity-70">{product.title}</p>
            <p className="font-bold opacity-60 mt-2">{product.info}</p>
            <div className="flex mt-4">
              {Array(product.rateCount)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-red-500 text-sm">
                    ★
                  </span>
                ))}
                <div className="border ml-2 mr-2 opacity-60"></div>
                <p className="opacity-80 font-light">{product.ratings} Ratings</p>
            </div>
            <div className="border mt-8 opacity-20 w-xl font-extralight"></div>
            <div>
                <div className="flex">
                    <p>{product.finalPrice}</p>
                    <p>{product.originalPrice}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
