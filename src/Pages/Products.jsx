import productsData from "../productsdata/ProductsData";

export const Products = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {productsData.map((item) => (
          <div key={item.id}>
            <div className="border">
              <img src={item.heroImage} alt="" className="h-20" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
