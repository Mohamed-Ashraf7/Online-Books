import logo from "../../assets/images.png";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalSlice";
import {useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import Profile from "./UserProfile";

function Header() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#fff] backdrop-blur-lg bg-opacity-[.4] px-10 mobile:px-6 rounded-[25px] w-[95%] xl:w-[70%] fixed top-[2%]  left-1/2 transform  -translate-x-1/2 z-50 shadow-md shadow-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-12 mr-3 rounded-md bg-primary p-1">
          <img src={logo}
            className="object-cover w-full h-full "
              alt="Books_Logo" />
          </div>  
          <h1 className="self-center text-3xl font-semibold whitespace-nowrap">
            Book <span className="inline-block text-primary">Store</span>{" "}
          </h1>
        </Link>
        <button
          type="button"
          aria-label="menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}>
          <span
            className={`transition-transform transform ${
              isMenuOpen ? "rotate-90 text-primary" : "text-black rotate-0"
            }`}>
            <CiMenuFries size={30} />
          </span>
        </button>
        <div
          className={`w-full md:inline-flex md:w-auto  transition-max-h ease-in-out duration-500 mobile:overflow-hidden ${
            isMenuOpen ? "mobile:h-[360px] z-50" : "mobile:h-[0] "
          }`}
          id="navbar-default" >
          <div className="flex justify-between  flex-col  mt-5 mobile:gap-y-4 rounded-lg md:flex-row lg:gap-x-14 md:mt-0 md:border-0 ">
            <MenuIcon toggleMenu={toggleMenu} />
          
            <div className="centerd mobile:flex-col gap-y-3 gap-x-2">
              {user ? ( <Profile />) : (
                <>
                  {" "}
                  <button
                    type="button"
                    onClick={() => dispatch(openModal({ name: "Register" }))}
                    className="btn  mobile:w-[60%] mx-auto">
                    Sign up
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(openModal({ name: "Login" }))}
                    className="text-base btn bg-[#3a3a3a] mobile:w-[50%] mx-auto" >
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
