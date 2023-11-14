import React from "react";

const Loader = () => {
  const load = (
    <div
      className="relative w-full flex flex-col rounded-xl bg-[#fefefe] shadow-2xl shadow-neutral-300
        "
    >
      <div className="relative mx-auto bg-white -mt-10 h-[220px] w-[150px] overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 ">
        <span className=" rounded-md shadow-md w-full h-full" />
      </div>
      <div className="p-6 mt-4 flex items-center justify-between">
        <button type="button" className=" mobile:px-2 py-2 btn"></button>
        <button
          type="button"
          className="text-white bg-[#b91616] shadow-sm shadow-gray-400 rounded-md px-3 py-1  "
        ></button>
      </div>
    </div>
  );
  return (
    <div className="w-full gap-x-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-center">
      {load}
      {load}
      <span className="hidden lg:block">{load}</span>
      <span className="hidden md:block">{load}</span>
    </div>
  );
};

export default Loader;
