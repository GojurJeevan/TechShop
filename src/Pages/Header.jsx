import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "../details/Search";
import { AllForms } from "../forms/AllForms";
import { Cart } from "../cart/Cart";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = "Tech-Shop";
  const [showSearch, setShowSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [cart, setCart] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.length;

  return (
    <>
      <div className="flex justify-between bg-black text-white h-17 px-4">
        <Link className="font-bold text-2xl mt-3.5" to={"/"}>
          {name}
        </Link>

        <div className="flex items-center">
          <div className="relative group">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mr-5 text-xl cursor-pointer"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2
              scale-0 group-hover:scale-100
              bg-black text-white text-sm px-2 py-1 rounded transition"
            >
              Search
            </span>
          </div>

          <div className="relative group">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="mr-5 text-xl cursor-pointer"
              onClick={() => setCart((prev) => !prev)}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-5 text-xl cursor-pointer"
              onClick={() => setShowForm((prev) => !prev)}
            />
            {showForm && (
              <div className="absolute right-0 mt-2 z-50">
                <AllForms />
              </div>
            )}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="flex justify-center mt-4">
          <Search />
        </div>
      )}
      {cart && <Cart />}
    </>
  );
};
