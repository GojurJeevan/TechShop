import { useState } from "react";
import productsData from "../productsdata/ProductsData";

export const Search = () => {
  const [search, setSearch] = useState("");

  const filterProducts = productsData.filter((product) => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Product"
          className="border rounded"
          name="name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </>
  );
};
