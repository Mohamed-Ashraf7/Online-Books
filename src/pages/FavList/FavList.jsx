import { Fragment } from "react";
import Helmet from "../../components/Helmet";
import { useSelector } from "react-redux";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Favimg from "../../assets/a3.webp";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineFolderShared } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiHandHeartLight } from "react-icons/pi";
import Stats from "./Stats";
const FavList = () => {
  let { list } = useSelector((state) => state.BookSlice);
  return (
    <Fragment>
      <Helmet title="Favourite" />
      <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={Favimg}
          alt="Favimg"
          className="object-cover object-center w-full h-[85vh] xl:col-span-3"
        />
        <div className="w-full p-6 mobile:py-2 lg:mt-[100px] mt-0 rounded-md  xl:col-span-2 ">
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
        <section className="px-6">
          <div className="grid grid-cols-2 gap-6 mx-auto lg:grid-cols-4">
            <Stats
              icon={<MdOutlineFolderShared size={47} />}
              num={"200"}
              word={"Orders"}
            />
            <Stats
              icon={<FaRegFaceSmileBeam size={45} />}
              num={"7500"}
              word={"New customers"}
            />
            <Stats
              icon={<IoSpeedometerOutline size={50} />}
              num={"172%"}
              word={"Growth"}
            />
            <Stats
              icon={<PiHandHeartLight size={50} />}
              num={"17%"}
              word={"Bounce rate"}
            />
          </div>
        </section>
        <h3 className="px-3 self-start font-primary text-2xl mt-1 border-b-2 mb-8 pb-2 font-extrabold  border-black">
          <span className="inline-flex align-middle p-1 bg-primary text-white rounded-md shadow-sm shadow-gray-500">
            <BsJournalBookmarkFill size={25} />
          </span>{" "}
          The best ones should be labeled “
        </h3>

        <div className="grid gap-y-16 mt-10 lg:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 items-center justify-center">
          {list.length > 0 ? (
            list.map((Book) => (
              <span key={Book.id}>
                <Card book={Book} />
              </span>
            ))
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
