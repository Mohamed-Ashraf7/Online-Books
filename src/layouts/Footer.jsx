import React from "react";
import { BsInstagram, BsFacebook, BsPinterest, BsGoogle } from "react-icons/bs";
import img from "../assets/images.png";

const Footer = () => {
  return (
    <footer className="md:px-32 px-4 relative bottom-0 py-8 md:py-10 rounded-t-3xl bg-[#111] flex-col text-white ">
      <div className="container  flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="centerd pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
            <img
              src={img}
              className="h-12 bg-white p-2 rounded-lg"
              alt="footer"
            />
          </div>
          <ul className="centerd space-x-4 sm:space-x-8">
            <li className="text-2xl mobile:text-base">Terms of Use</li>
            <li className="text-2xl mobile:text-base">Privacy</li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            Google
            <span className="centerd p-2">
              {" "}
              <BsGoogle size={40} />
            </span>
          </li>
          <li>
            Pinterest
            <span className="centerd p-2">
              {" "}
              <BsPinterest size={40} />
            </span>
          </li>
          <li>
            Facebook
            <span className="centerd p-2">
              {" "}
              <BsFacebook size={40} />
            </span>
          </li>
          <li>
            Instagram
            <span className="centerd p-2">
              {" "}
              <BsInstagram size={40} />
            </span>
          </li>
        </ul>
      </div>
      <p className="text-center text-white text-2xl mobile:text-sm">
        {" "}
        all copy right Reserved @ 2023
      </p>
    </footer>
  );
};

export default Footer;
