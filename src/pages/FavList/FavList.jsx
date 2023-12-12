import { Fragment } from "react";
import Favimg from "../../assets/a3.webp";
import Helmet from "../../components/Helmet";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { BsJournalBookmarkFill } from "react-icons/bs";
import Stats from "./Stats";
const FavList = () => {
  let { list } = useSelector((state) => state.BookSlice);
  return (
    <Fragment>
      <Helmet title="Favourite" />
      <section className="grid lg:grid-cols-2 xl:grid-cols-5 gap-4 text-center ">
        <img
          src={Favimg} alt="Favimg"
          className="object-cover object-center w-full h-[85vh] mobile:h-[70vh] xl:col-span-3"
        />
        <div className="w-full p-6 mobile:py-2 lg:mt-[115px] mt-0 rounded-md xl:col-span-2">
          <span className="block mb-2 ">Uniquely Portable Magic</span>
          <h1 className="text-5xl font-extrabold my-1">Literature is my Utopia</h1>
          <p className="my-3 md:my-6 capitalize ">
            <span className="text-lg text-primary pr-[2px]">
              ” Either write something worth reading
            </span>
            OR do something worth writing.”
          </p>
          <div className="space-y-3">
            <p className="rounded-md p-3 pt-0">
              I can feel infinitely alive curled up on the sofa reading a book.
            </p>
            <button type="button" className="w-full bg-white text-black shadow-lg text-xl py-2 font-semibold">
              Join the wait list
            </button>
          </div>
        </div>
      </section>
      <Section>
        <Stats />
        <div className="self-start mobile:mx-auto text-xl px-3 mt-1 border-b-2  font-medium">
          <span className="inline-flex align-middle p-1 m-1 bg-primary text-white rounded-md shadow-sm shadow-gray-500">
            <BsJournalBookmarkFill size={25} />
          </span>
          The best one's should be labeled “
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 mt-20 items-center justify-center">
          {list.length > 0 ? (
            list.map((Book) => (
              <span key={Book.id}>
                <Card book={Book} />
              </span>))
          ) : (
            <p className="text-red-700 text-2xl px-2">
              There is No Books Found
            </p>
          )}
        </div>
      </Section>
    </Fragment>
  );
};
export default FavList;
