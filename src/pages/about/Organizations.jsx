import React from "react";
import {
  FaAmazon,
  FaApple,
  FaGoogle,
  FaInternetExplorer,
} from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbBrandYahoo } from "react-icons/tb";
import { FaFirefox, FaYoutube } from "react-icons/fa6";
const Organizations = () => {
  return (
    <section className="p-2 md:pb-10">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Trusted by the Worlds Engines </h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto ">
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaAmazon size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaApple size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaGoogle size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <TfiMicrosoftAlt size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <TbBrandYahoo size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaInternetExplorer size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaFirefox size={55} />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaYoutube size={55} />
        </div>
      </div>
    </section>
  );
};

export default Organizations;
