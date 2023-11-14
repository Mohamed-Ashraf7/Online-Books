import { useSelector } from "react-redux";
import Section from "../components/Section";
import Card from "../components/Card";
import Favimg from "../assets/6.webp";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { Fragment } from "react";
const FavList = () => {
  let { list } = useSelector((state) => state.BookSlice);

  return (
    <Fragment>
      <section className="grid gap-6 text-center  font-second lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={Favimg}
          alt="Favimg"
          className="object-cover w-full h-[80vh] xl:col-span-3"
        />
        <div className="w-full p-6 mt-12 mobile:mt-0 rounded-md sm:p-16 xl:col-span-2 ">
          <span className="block mb-2 ">Uniquely Portable Magic</span>
          <h1 className="text-5xl font-extrabold ">Literature is my Utopia</h1>
          <p className="my-8 capitalize ">
            <span className="font-exrabold text-lg text-primary pr-[2px]">
              ” Either write something worth reading
            </span>
            OR do something worth writing.”
          </p>
          <div className="self-stretch space-y-3 ">
            <p className="w-full rounded-md p-3 pt-0  ">
              I can feel infinitely alive curled up on the sofa reading a book.
            </p>
            <button className="w-full  bg-white text-black shadow-lg text-xl py-2 font-semibold  ">
              Join the wait list
            </button>
          </div>
        </div>
      </section>
      <Section>
        <h2 className="px-5 w-full text-3xl font-second textShadow py-2 mb-10 border-b-2 border-black">
          <span className="inline-flex align-middle icons bg-primary text-white rounded-md shadow-sm shadow-gray-500">
            <BsJournalBookmarkFill size={35} />
          </span>{" "}
          The best ones should be labeled “
        </h2>
        <div className="gap-y-14 mt-10 grid lg:grid-cols-4 mobile:grid-cols-2 items-center justify-center">
          {list ? (
            list.map((Book) => (
              <span key={Book.id}>
                <Card book={Book} />
              </span>
            ))
          ) : (
            <p className="text-black text-3xl">there is no books found</p>
          )}
        </div>
      </Section>
    </Fragment>
  );
};

export default FavList;
