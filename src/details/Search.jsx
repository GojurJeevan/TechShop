import { useState } from "react";
import productsData from "../productsdata/ProductsData";
import { Link } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const filterProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <form className="text-center">
          <input
            type="text"
            placeholder="Search Product"
            className="border rounded w-150 h-8 border-gray-500"
            name="name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setDropDown(true);
            }}
            onFocus={() => search && setDropDown(true)}
          />

          {dropDown && search && (
            <div className="border text-start rounded border-gray-700 font-light opacity-70">
              <ul>
                {filterProducts.length > 0 ? (
                  filterProducts.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        setSearch(item.title);
                        setDropDown(false);
                      }}
                    >
                      <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </li>
                  ))
                ) : (
                  <li>No Products Found</li>
                )}
              </ul>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
