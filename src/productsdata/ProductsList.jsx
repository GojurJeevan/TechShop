import { Link } from "react-router-dom";
import productsData from "./ProductsData";
import FilterCanvas from "../filtercanvas/FilterCanvas";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../cart/CartSlice";

export const ProductsList = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  let dispatch = useDispatch();

  const filteredProducts = selectedBrand
    ? productsData.filter(
        (item) => item.brand.toLowerCase() === selectedBrand.toLowerCase()
      )
    : productsData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-end px-6 pt-4">
        <button
          onClick={() => setOpenFilter(true)}
          className="border w-20 py-2 bg-gray-900 text-white rounded hover:bg-red-600"
        >
          Filter
        </button>
      </div>

      <FilterCanvas
        open={openFilter}
        setOpen={setOpenFilter}
        setSelectedBrand={setSelectedBrand}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between hover:border-red-600 transition"
          >
            <Link to={`/product/${item.id}`} onClick={scrollToTop}>
              <div className="flex justify-center">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="h-36 object-contain"
                />
              </div>

              <div className="flex items-center gap-1 mt-3">
                {Array(item.rateCount)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-red-500 text-sm">
                      ★
                    </span>
                  ))}
              </div>

              <h2 className="text-white font-semibold mt-2">{item.title}</h2>

              <p className="text-gray-400 text-sm mt-1">{item.info}</p>

              <div className="flex items-center gap-3 mt-3">
                <span className="text-white font-bold text-lg">
                  ₹{item.finalPrice}
                </span>
                <span className="text-gray-500 line-through text-sm">
                  ₹{item.originalPrice}
                </span>
              </div>
            </Link>

            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium"
              onClick={() =>
                dispatch(ADDTOCART({ ...item, price: item.finalPrice }))
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
