import React, { Fragment } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import img0 from "../../assets/vectors/world-book.avif";
import img1 from "../../assets/vectors/war5.avif";
import img2 from "../../assets/vectors/book-mockup.avif";
import img3 from "../../assets/vectors/adventure4.avif";
import img4 from "../../assets/vectors/crime4.avif";

import { BsBookmarkStar, BsBook, BsStar, BsCompass } from "react-icons/bs";

export const TabBtn = ({ handle, title, icon, activeTab, img }) => {
  return (
    <div
      className="bg-center overflow-hidden bg-cover rounded-md shadow-sm shadow-black centerd w-full h-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      {" "}
      <button
        className={`tabs  mobile:py-3 ${activeTab === title ? "active" : ""}`}
        onClick={() => handle(title)}
      >
        {icon}
        <span className="mobile:text-sm">{title}</span>
      </button>
    </div>
  );
};
const Tabs = ({ handle, activeTab }) => {
  return (
    <div className="grid w-full gap-y-1 min-h-[400px] lg:grid-cols-3 md:grid-col-2 mobile:px-4 lg:space-x-3 my-6 mb-4">
      <div className="w-full h-full ">
        <TabBtn
          handle={handle}
          title={"History"}
          activeTab={activeTab}
          icon={<BsBook />}
          img={img0}
        />
      </div>
      <div className="centerd flex-col gap-y-2">
        <TabBtn
          handle={handle}
          title={"War"}
          activeTab={activeTab}
          icon={<BsBookmarkStar />}
          img={img1}
        />
        <TabBtn
          handle={handle}
          title={"Sciences"}
          activeTab={activeTab}
          icon={<BsStar />}
          img={img2}
        />
      </div>
      <div className="centerd flex-col gap-y-2">
        <TabBtn
          handle={handle}
          title={"Litreture"}
          activeTab={activeTab}
          icon={<BsCompass />}
          img={img3}
        />

        <TabBtn
          handle={handle}
          title={"Crime"}
          activeTab={activeTab}
          icon={<BsBookmarkStar />}
          img={img4}
        />
      </div>
    </div>
  );
};

export const FavBtn = ({ isBookInList, handleDelete, handleFav }) => {
  return (
    <Fragment>
      {isBookInList ? (
        <button
          type="button"
          onClick={() => handleDelete()}
          className="shadow-md shadow-gray-400 rounded-md px-2 py-2 bg-[#b91616] text-white hover:bg-red-900"
        >
          <AiOutlineHeart className="w-12 h-6 mobile:w-6" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleFav()}
          className=" text-[#b91616] shadow-md shadow-gray-400 rounded-md px-2 centerd gap-x-1 py-2 hover:bg-[#b91616] hover:text-white"
        >
          <AiOutlineHeart className="w-12 h-6 mobile:w-6 " />
        </button>
      )}
    </Fragment>
  );
};
export default Tabs;
