import { categoryMenu } from "./categoryMenu";

export const Categories = () => {

  return (
    <>
      <div className="text-5xl font-light text-center mt-25 opacity-80">
        Top Products
      </div>

      <div className="flex justify-evenly mt-20 text-xl opacity-60">
        {categoryMenu.map((item) => (
          <div key={item.id} className={`${item.checked ? "bg-red-500" : "bg-transparent opacity-60"}`}>
            <button>{item.label}</button>
          </div>
        ))}
      </div>
    </>
  );
};
