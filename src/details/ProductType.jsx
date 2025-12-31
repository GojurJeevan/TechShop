import { useParams } from "react-router-dom";
import productsData from "../productsdata/ProductsData";

export const ProductType = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === Number(id));

  return (
    <>
      <div>
        <p>Brand:{product.brand}</p>
        <p>Model:{product.title}</p>
        <p>Generic Type:{product.category}</p>
        <p>Headphones Type:{product.type}</p>
        <p>Connectivity:{product.connectivity}</p>
      </div>
    </>
  );
};
