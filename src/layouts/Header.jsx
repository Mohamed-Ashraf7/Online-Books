import logo from "../assets/images.png";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modalSlice";
import { BiHomeAlt } from "react-icons/bi";
import { useState } from "react";
import { PiBookOpenTextThin } from "react-icons/pi";
import { BsMenuUp } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fff] backdrop-blur-lg bg-opacity-[.4]  mobile:px-10 xl:px-14 rounded-[20px] w-[95%] lg:w-[70%]  fixed top-[2%] left-1/2 transform -translate-x-1/2 z-50  shadow-md shadow-black ">
      <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
        <span className="flex items-center">
          <img
            src={logo}
            className="h-10 mr-3 rounded-md bg-primary p-1"
            alt="Books Logo"
          />
          <span className="self-center text-3xl text-black font-second font-semibold whitespace-nowrap">
            Book <span className="text-primary">Store</span>{" "}
          </span>
        </span>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span
            className={`text-black transition-transform transform ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <BsMenuUp size={30} />
          </span>
        </button>
        <div
          className={`w-full md:block md:w-auto  transition-max-h ease-in-out duration-500 mobile:overflow-hidden ${
            isMenuOpen ? "mobile:h-[330px]" : "mobile:h-0 "
          }`}
          id="navbar-default"
        >
          <ul className="flex justify-between  flex-col  mt-5 mobile:gap-y-4 rounded-lg md:flex-row lg:gap-x-20 md:mt-0 md:border-0 ">
            <div className="centerd mobile:flex-col gap-y-2  mobile:shadow-2xl  mobile:shadow-neutral-300 lg:gap-x-4 ">
              <div className="group relative px-2 cursor-pointer">
                <Link to="/" className="icons mobile:shadow-none">
                  <BiHomeAlt size={27} />
                </Link>
                <span className="Span">Home</span>
              </div>
              <div className="group relative px-2 cursor-pointer">
                <Link to="/about" className="icons mobile:shadow-none">
                  <PiBookOpenTextThin size={27} />
                </Link>
                <span className="Span">About</span>
              </div>
              <div className="group relative px-2 cursor-pointer">
                <Link to="/FavList" className="icons mobile:shadow-none">
                  <CiBoxList size={27} />
                </Link>
                <span className="Span">Favourite</span>
              </div>
            </div>
            <div className="centerd mobile:flex-col gap-y-3 ">
              <button
                type="button"
                onClick={() => dispatch(openModal({ name: "Register" }))}
                className="btn mr-2 mobile:w-[98%] mx-auto "
              >
                Sign up
              </button>
              <button
                type="button"
                onClick={() => dispatch(openModal({ name: "Login" }))}
                className="text-base btn bg-[#3a3a3a] mobile:w-[90%] mx-auto"
              >
                Log in
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
