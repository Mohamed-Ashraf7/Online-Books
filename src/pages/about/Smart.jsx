import React from "react";
import img1 from "../../assets/b36.webp";
import img2 from "../../assets/b40.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Smart = () => {
  return (
    <section className="md:px-20 p-2 centerd lg:flex-row flex-col">
      <div className="centerd lg:flex-row flex-col p-4 shadow-2xl shadow-zinc-300">
        <LazyLoadImage
          src={img2} alt="Smart_Payments"
          className="md:p-6 w-[300px] h-[420px] object-cover"/>
        <div className="flex p-4 lg:gap-y-10 gap-y-2 flex-col items-start justify-center">
          <p className="text-[#767676] text-xl lg:mb-4">
            01 . SMART PAYMENTS
          </p>
          <p className="text-3xl md:text-5xl hover:text-primary font-bold">
            Don't Limit Yourself To Shopping
          </p>
          <span className="text-lg text-primary border-b-2 border-primary">
            Go Online
          </span>
        </div>
      </div>
      <div className="centerd lg:flex-row flex-col p-4 shadow-2xl  shadow-zinc-400">
        <LazyLoadImage
           src={img1} alt="Interior_Details"
          className="md:p-6 w-[300px] h-[420px] object-cover"/>
        <div className="flex p-4 lg:gap-y-10 gap-y-2 flex-col items-start justify-center">
          <p className="text-[#767676] text-xl">02. INTERIOR DETAILS</p>
          <p className="text-3xl md:text-5xl hover:text-primary font-bold">
            Choose Your Own Unique Style
          </p>
          <span className="text-lg text-primary border-b-2 border-primary">
            Go Online
          </span>
        </div>
      </div>
    </section>
  );
};

export default Smart;
