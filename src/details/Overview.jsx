import { useParams } from "react-router-dom";
import productsData from "../productsdata/ProductsData";

export const Overview = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === Number(id));

  return (
    <>
      <div>
        <p>
          The {product.title} {product.info} provides with fabulous sound quality
        </p>
        <li>
          <ul>Sound Tuned to Perfection</ul>
          <ul>Comfortable to Wear</ul>
          <ul>Long Hours Playback Time</ul>
        </li>
        <p>
          Buy the {product.title} {product.info} which offers you with fabulous music
          experience by providing you with awesome sound quality.
        </p>
      </div>
    </>
  );
};
