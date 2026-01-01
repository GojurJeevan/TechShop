import { useState } from "react";
import { ProductType } from "./ProductType";
import { Overview } from "./Overview";
import { Review } from "../review/Review";

export const Details = () => {

    const [activeTab,setActiveTab] = useState("specifications")

  return (
    <>
      <div className="flex justify-evenly mt-30">
        <button className=" hover:bg-red-600 rounded w-30 h-8 cursor-pointer" onClick={()=>setActiveTab("specifications")}>Specifications</button>
        <button className=" hover:bg-red-600 rounded w-30 h-8 cursor-pointer" onClick={()=>setActiveTab("overview")}>Overview</button>
        <button className=" hover:bg-red-600 rounded w-30 h-8 cursor-pointer" onClick={()=>setActiveTab("review")}>Reviews</button>
      </div>

      {activeTab == "specifications" && <ProductType />}
      {activeTab == "overview" && <Overview/>}
      {activeTab == "review" && <Review/>}

    </>
  );
};
