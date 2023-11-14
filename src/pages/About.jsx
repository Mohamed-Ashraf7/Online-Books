import React from "react";
import img1 from "../assets/22.webp";
import img2 from "../assets/15.webp";
import img3 from "../assets/landing.webp";
import img4 from "../assets/vectors/book-glasses.avif";
import {
  BsBook,
  BsJournalBookmarkFill,
  BsBookmarks,
  BsBookmarkHeart,
} from "react-icons/bs";
const About = () => {
  return (
    <>
      <section className="flex flex-col text-center font-second">
        <img
          src={img3}
          alt="aboutCover"
          className="object-cover  w-full h-[40vh] "
        />

        <div className="centerd lg:gap-x-8 mobile:flex-col w-full px-6 rounded-md sm:p-16 mobile:mt-4">
          <div>
            <span className="block mb-2 ">Uniquely Portable Magic</span>
            <h1 className="text-5xl font-extrabold ">
              Books Cultivate Empathy
            </h1>
            <p className="my-8 capitalize">
              <span className="font-exrabold text-lg text-primary pr-[2px]">
                Either write something worth reading
              </span>
              or do something worth writing.”
            </p>
          </div>
          <img
            src={img4}
            alt="about"
            className="object-cover w-[450px] h-[300px]"
          />
          <div className=" space-y-3 ">
            <span className="block mb-2 text-lg ">Books Give's Us Magic</span>
            <p className="w-full rounded-md ">
              “Books can be dangerous. The best ones should be labeled “This
              could change your life.”
            </p>

            <button className="w-full bg-white text-black shadow-lg btn py-2 font-semibold">
              Join the waitlist
            </button>
          </div>
        </div>
      </section>
      <div className="mobile:mt-5 rounded-3xl mobile:h-[65vh] h-[90vh] bg-[#1f3f74] font-second relative p-20 mb-5 w-[60%] mx-auto">
        <div className="flex gap-x-8 mobile:gap-x-3 absolute -left-[10%] mobile:w-[90vw] mobile:-left-[25%]">
          <div className="Box">
            <span className="icons">
              <BsBook size={40} />
            </span>
            <span className="text-lg text-primary "> Ernest Hemingway</span>
            <p className="text-xl mobile:text-base font-medium">
              {" "}
              Many Gifts That Books Give Readers
            </p>
          </div>
          <div className="Box">
            <span className="icons">
              <BsBookmarkHeart size={40} />
            </span>
            <span className="text-lg text-primary "> John Locke</span>
            <p className="text-xl font-medium mobile:text-base">
              {" "}
              Reading Furnishes The Mind
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-x-8 absolute -left-[10%] top-[55%]">
          <div className="px-6 Box">
            <span className="icons">
              {" "}
              <BsBookmarks size={40} />
            </span>
            <span className="text-lg text-primary "> Ernest Hemingway</span>
            <p className="text-xl font-medium">
              {" "}
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
      </div>
      <div className="md:px-20 p-2 font-second centerd lg:flex-row flex-col">
        <div className="centerd lg:flex-row flex-col p-4 shadow-2xl shadow-zinc-300">
          <img
            src={img2}
            alt="leftSide"
            className="md:p-4 w-[300px] h-[420px]"
          />
          <div className="flex p-4 lg:gap-y-10 gap-y-2 flex-col items-start justify-center">
            <h6 className="text-[#767676] text-xl  lg:mb-4">
              01 . SMART PAYMENTS
            </h6>
            <p className="text-3xl md:text-5xl hover:text-primary font-bold">
              Don't Limit Yourself To Shopping
            </p>
            <span className="text-lg text-primary border-b-2 border-primary">
              Go Online{" "}
            </span>
          </div>
        </div>
        <div className="centerd lg:flex-row flex-col p-4 shadow-2xl  shadow-zinc-400">
          <img
            src={img1}
            alt="RightSide"
            className="md:p-4 w-[300px] h-[420px]"
          />
          <div className="flex p-4 lg:gap-y-10 gap-y-2 flex-col items-start justify-center">
            <h6 className="text-[#767676] text-xl ">02. INTERIOR DETAILS</h6>
            <p className="text-3xl md:text-5xl hover:text-primary font-bold">
              Choose Your Own Unique Style
            </p>
            <span className="text-lg text-primary border-b-2 border-primary  ">
              Go Online{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
