export const Categories = () => {
  return (
    <>
      <div className="text-white text-5xl font-light text-center mt-25 opacity-80">
        Top Products
      </div>
      <div className="flex justify-between ml-40 mr-40 mt-20">
        <div>
          <button className="text-white text-xl font-light opacity-60 hover:bg-red-500 h-10 w-max rounded-xl">All</button>
        </div>
        <div>
          <button className="text-white text-xl font-light opacity-60 hover:bg-red-500 h-10 w-max rounded-xl">HeadPhones</button>
        </div>
        <div>
          <button className="text-white text-xl font-light opacity-60 hover:bg-red-500 h-10 w-max rounded-xl">Earbuds</button>
        </div>
        <div>
          <button className="text-white text-xl font-light opacity-60 hover:bg-red-500 h-10 w-max rounded-xl">Earphones</button>
        </div>
        <div>
          <button className="text-white text-xl font-light opacity-60 hover:bg-red-500 h-10 w-max rounded-xl">Neckbands</button>
        </div>
      </div>
    </>
  );
};
