import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Banner } from "../banner/Banner";
import { SmallSlick } from "../slick/SmallSlick";
import { Categories } from "../categories/Categories";

export const Header = () => {
  let name = "Tech-Shop";

  return (
    <>
      <div className="flex justify-between bg-black text-white h-17">
        <div className="font-bold text-2xl mt-3.5">{name}</div>
        <div className="flex">
          <div className="relative group inline-block">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mr-5 mt-4 text-xl cursor-pointer"
            />
            <span
              className=" absolute top-full left-1/2 -translate-x-1/2 mt-2
        scale-0 group-hover:scale-100
        bg-black text-white text-sm px-2 py-1 rounded
        transition"
            >
              Search
            </span>
          </div>
          <div className="relative group inline-block">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="mr-5 mt-4 text-xl cursor-pointer"
            />
            <span
              className=" absolute top-full left-1/2 -translate-x-1/2 mt-2
        opacity-0 group-hover:opacity-100
        bg-black text-white text-sm px-2 py-1 rounded
        transition"
            >
              Cart
            </span>
          </div>
          <div className="relative group inline-block">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-5 mt-4 text-xl cursor-pointer"
            />
            <span
              className=" absolute top-full left-1/2 -translate-x-1/2 mt-2
        scale-0 group-hover:scale-100
        bg-black text-white text-sm px-2 py-1 rounded
        transition"
            >
              User
            </span>
          </div>
        </div>
      </div>
      <Banner />
      <div className="hidden md:block">
        <SmallSlick />
      </div>
      <Categories />
    </>
  );
};
