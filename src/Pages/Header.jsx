import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const Header = () =>{

    let name = "Tech-Shop";

    return(
        <>
            <div className="flex justify-between bg-black text-white h-17">
                <div className="font-bold text-2xl mt-3.5">
                    {name}
                </div>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-5 mt-4 text-xl cursor-pointer"/>
                    <FontAwesomeIcon icon={faCartShopping} className="mr-5 mt-4 text-xl cursor-pointer"/>
                    <FontAwesomeIcon icon={faUser} className="mr-5 mt-4 text-xl cursor-pointer"/>
                </div>
            </div>
        </>
    )
}