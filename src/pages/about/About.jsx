import { lazy } from "react";
import img0 from "../../assets/b42.webp";
import img4 from "../../assets/vectors/book-glasses.avif";
import Helmet from "../../components/Helmet";
const Quote = lazy(() => import("./Quote"));
const Writers = lazy(() => import("./Writers"));
const Blog = lazy(() => import("./Blog"));
const Smart = lazy(() => import("./Smart"));
const Organizations = lazy(() => import("./Organizations"));

const About = () => {
  return (
    <>
      <Helmet title="About" />
      <section className="flex flex-col text-center ">
        <img
          src={img0}
          alt="aboutCover"
          className="object-cover object-bottom w-full h-[43vh] "
        />
        <div className="centerd lg:gap-x-8 mobile:flex-col w-full px-6 rounded-md lg:p-12 sm:p-16 mobile:mt-4">
          <div>
            <span className="block mb-2 ">Uniquely Portable Magic</span>
            <h1 className="text-5xl font-extrabold ">
              Books Cultivate Empathy
            </h1>
            <p className="md:my-8 my-2 capitalize">
              <span className="font-exrabold text-lg text-primary pr-[2px]">
                Either write something worth reading
              </span>
              or do something worth writing.”
            </p>
          </div>
          <img
            src={img4}
            alt="about"
            className="object-cover w-[450px] md:h-[300px] "
          />
          <div className="space-y-7 mobile:space-y-2 ">
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
      <Blog />
      <Smart />
      <Quote />
      <Writers />
      <Organizations />
    </>
  );
};

export default About;
