import React from "react";
import img3 from "../../assets/c10.webp";
import {BsBook,BsJournalBookmarkFill,BsBookmarks,
  BsBookmarkHeart} from "react-icons/bs";

const Blog = () => {
  return (
    <article
     className="mobile:mt-5 mobile:h-[60vh] bg-cover bg-center h-[90vh] relative p-20 mb-5 w-[60%] mx-auto"
     style={{ backgroundImage: `url(${img3})`}}>
      <div className="flex gap-x-8 mobile:gap-x-3 absolute -left-[12%] mobile:w-[90vw] mobile:-left-[25%]">
        <div className="mobile:p-4 Box">
          <span className="icons">
            <BsBook size={40} />
          </span>
          <span className="text-lg text-primary"> Ernest Hemingway</span>
          <p className="text-xl mobile:text-base font-medium">
            Many Gifts That Books Give Readers
          </p>
        </div>
        <div className="mobile:p-3 Box ">
          <span className="icons">
            <BsBookmarkHeart size={40} />
          </span>
          <span className="text-lg text-primary"> John Locke</span>
          <p className="text-xl font-medium mobile:text-base">
            Reading Furnishes The Mind
          </p>
        </div>
      </div>
      <div className="hidden lg:flex gap-x-8 absolute -left-[8%] top-[55%]">
        <div className="px-6 Box">
          <span className="icons">
            <BsBookmarks size={40} />
          </span>
          <span className="text-lg text-primary "> Ernest Hemingway</span>
          <p className="text-xl font-medium">
           Reading Is A Discount Ticket To Everywhere
          </p>
        </div>
        <div className="Box">
          <span className="icons">
            <BsJournalBookmarkFill size={40} />
          </span>
          <span className="text-lg text-primary "> Mortimer J. Adler</span>
          <p className="text-xl font-medium"> This Could Change Your Life</p>
        </div>
      </div>
    </article>
  );
};

export default Blog;
