import { useState } from "react";
import { AllCards } from "../cards/AllCards";

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const baseBtn =
    "px-3 py-1 rounded transition-all duration-200 hover:bg-red-700";

  const activeBtn = "bg-red-700 text-white";

  return (
    <>
      <div className="text-3xl sm:text-4xl md:text-5xl font-light text-center mt-10 sm:mt-20 opacity-80">
        Top Products
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16 text-sm sm:text-lg md:text-2xl opacity-80">
        <button
          onClick={() => setActiveCategory("All")}
          className={`${baseBtn} ${activeCategory === "All" ? activeBtn : ""}`}
        >
          All
        </button>

        <button
          onClick={() => setActiveCategory("Headphones")}
          className={`${baseBtn} ${
            activeCategory === "Headphones" ? activeBtn : ""
          }`}
        >
          <span className="sm:hidden">HP</span>
          <span className="hidden sm:inline">Headphones</span>
        </button>

        <button
          onClick={() => setActiveCategory("Earbuds")}
          className={`${baseBtn} ${
            activeCategory === "Earbuds" ? activeBtn : ""
          }`}
        >
          <span className="sm:hidden">EB</span>
          <span className="hidden sm:inline">Earbuds</span>
        </button>

        <button
          onClick={() => setActiveCategory("Earphones")}
          className={`${baseBtn} ${
            activeCategory === "Earphones" ? activeBtn : ""
          }`}
        >
          <span className="sm:hidden">EP</span>
          <span className="hidden sm:inline">Earphones</span>
        </button>

        <button
          onClick={() => setActiveCategory("Neckbands")}
          className={`${baseBtn} ${
            activeCategory === "Neckbands" ? activeBtn : ""
          }`}
        >
          <span className="sm:hidden">NB</span>
          <span className="hidden sm:inline">Neckbands</span>
        </button>
      </div>

      <AllCards category={activeCategory} />
    </>
  );
};
