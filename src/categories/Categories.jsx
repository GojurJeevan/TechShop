import { Link } from "react-router-dom";
import { categoryMenu } from "./categoryMenu";

export const Categories = () => {

  return (
    <>
      <div className="text-5xl font-light text-center mt-25 opacity-80">
        Top Products
      </div>

      <div className="flex justify-evenly mt-20 text-xl">
        {categoryMenu.map((item) => (
          <Link key={item.id} to={item.path} className={`${item.checked ? "bg-red-600 hover:bg-red-700" : "bg-transparent opacity-60"} rounded`}>
                    {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};
