import React from "react";
import img0 from "../../assets/vectors/world-book.avif";
import img1 from "../../assets/vectors/war5.avif";
import img2 from "../../assets/vectors/book-mockup.avif";
import img3 from "../../assets/vectors/adventure4.avif";
import img4 from "../../assets/vectors/crime4.avif";
import { BsBookmarkStar, BsBook, BsStar, BsCompass } from "react-icons/bs";

const TabBtn = ({ handle, title, icon, activeTab, img }) => {
  return (
    <div
      className="centerd bg-center overflow-hidden bg-cover rounded-md shadow-sm shadow-black w-full h-full"
      style={{backgroundImage: `url(${img})`}}>
      <button
        className={`tabs mobile:py-3 ${activeTab === title ? "active" : ""}`}
        onClick={() => handle(title)}>
        {icon}
        <span className="mobile:text-sm">{title}</span>
      </button>
    </div>
  );
};
const Tabs = ({ handle, activeTab }) => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 w-full  relative gap-2 min-h-[400px] mobile:h-full mobile:px-4 my-6 mb-4">
      <TabBtn handle={handle}
        title={"History"} activeTab={activeTab}
        icon={<BsBook />} img={img0}
      />
      <div className="flex flex-col gap-y-2">
        <TabBtn handle={handle}
          title={"War"} activeTab={activeTab}
          icon={<BsBookmarkStar />} img={img1}
        />
        <TabBtn handle={handle}
          title={"Sciences"}  activeTab={activeTab}
          icon={<BsStar />} img={img2}/>
      </div>
      <div className="flex lg:flex-col col-span-2 lg:col-span-1 gap-2">
        <TabBtn
          handle={handle} title={"Litreture"}
          activeTab={activeTab}
          icon={<BsCompass />}
          img={img3}/>
        <TabBtn
          handle={handle}  title={"Crime"}
          activeTab={activeTab}
          icon={<BsBookmarkStar />}
          img={img4}/>
      </div>
    </section>
  );
};

export default Tabs;
