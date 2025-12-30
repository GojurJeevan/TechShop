import { useState } from "react";
import { AllCards } from "../cards/AllCards";

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <div className="text-5xl font-light text-center mt-25 opacity-80">
        Top Products
      </div>

      <div className="flex justify-evenly mt-20 mb-20 text-2xl opacity-75">
        <button onClick={() => setActiveCategory("All")}>All</button>
        <button onClick={() => setActiveCategory("Headphones")}>Headphones</button>
        <button onClick={() => setActiveCategory("Earbuds")}>Earbuds</button>
        <button onClick={() => setActiveCategory("Earphones")}>Earphones</button>
        <button onClick={() => setActiveCategory("Neckbands")}>Neckbands</button>
      </div>

      <AllCards category={activeCategory} />
    </>
  );
};
