import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";
const MenuIcon = ({ toggleMenu }) => {
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleMenu();
  };
  return (
    <div className="centerd mobile:flex-col gap-y-2 mobile:pb-4 lg:gap-x-4">
      <div className="group relative px-2 cursor-pointer ">
        <Link
          to="/" aria-label="Home"
          className={`icons mobile:shadow-none ${
            activeLink === "/" && "ActiveLink"}`}
          onClick={() => handleLinkClick("/")}
        >
          <BiHomeAlt size={27} />
        </Link>
        <span className="Span">Home</span>
      </div>
      <div className="group relative px-2 cursor-pointer">
        <Link
          to="/about" aria-label="About"
          className={`icons mobile:shadow-none ${
            activeLink === "/about" && "ActiveLink"}`}
          onClick={() => handleLinkClick("/about")}
        >
          <PiBookOpenTextThin size={27} />
        </Link>
        <span className="Span">About</span>
      </div>
      <div className="group relative px-2 cursor-pointer">
        <Link
          to="/FavList"  aria-label="Favorite"
          className={`icons mobile:shadow-none ${
            activeLink === "/FavList" && "ActiveLink"}`}
          onClick={() => handleLinkClick("/FavList")}
        >
          <CiBoxList size={27} />
        </Link>
        <span className="Span">Favourite</span>
      </div>
    </div>
  );
};

export default MenuIcon;