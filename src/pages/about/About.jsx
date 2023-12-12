import { Fragment, lazy } from "react";
import img0 from "../../assets/b42.webp";
import img4 from "../../assets/vectors/book-glasses.avif";
import Helmet from "../../components/Helmet";
const Blog = lazy(() => import("./Blog"));
const Smart = lazy(() => import("./Smart"));
const Quote = lazy(() => import("./Quote"));
const Writers = lazy(() => import("./Writers"));
const Organizations = lazy(() => import("./Organizations"));

const About = () => {
  return (
    <Fragment>
      <Helmet title="About" />
      <section className="flex flex-col text-center">
        <img src={img0} alt="aboutCover"
          className="object-cover object-bottom w-full h-[43vh] "
        />
        <div className="centerd lg:gap-x-10 mobile:flex-col px-6 lg:p-12 mobile:mt-4">
          <div>
            <span className="block mb-2">Uniquely Portable Magic</span>
            <h3 className="text-5xl font-extrabold ">
              Books Cultivate Empathy
            </h3>
            <p className="md:my-8 my-2 capitalize">
              <span className="text-lg text-primary pr-[2px]">
                Either write something worth reading
              </span>
              or do something worth writing.”
            </p>
          </div>
          <img src={img4} alt="aboutMiddle"
            className="object-cover w-[450px] md:h-[300px]"
          />
          <div className="space-y-7 mobile:space-y-2">
            <span className="block mb-2 text-lg">Books Give's Us Magic</span>
            <p>
              “Books can be dangerous. The best ones should be labeled “This
              could change your life.”
            </p>
            <button type="button" className="w-full text-xl bg-white text-black shadow-lg py-2 font-semibold">
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
    </Fragment>
  );
};
export default About;
