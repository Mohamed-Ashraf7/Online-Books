import { Fragment } from "react";
import landingRight from "../../assets/b29.webp";
import landingLetf from "../../assets/c3.webp";
import Helmet from "../../components/Helmet";
const Landing = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <section className="grid capitalize gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full p-6 mt-12 mobile:mt-20 sm:p-16 xl:col-span-2 ">
          <span className="block mb-1">Uniquely Portable Magic</span>
          <h1 className="text-5xl font-extrabold ">Literature is my Utopia</h1>
          <p className="my-6 ">
            <span className="font-exrabold text-md text-primary pr-[2px]">
              “ To learn to read is to light a fire
            </span>
            ; every syllable that is spelled out is a spark.”
          </p>
          <div className="self-stretch space-y-3 ">
            <div className="lg:w-[400px] lg:h-[300px] ">
              <img
                src={landingLetf}
                alt="landingleft"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="w-full p-2  ">
                I can feel infinitely alive curled up on the sofa reading a
                book.
              </p>
            </div>
            <button className="w-full bg-white text-black shadow-lg text-xl py-2 font-semibold ">
              Join the waitlist
            </button>
          </div>
        </div>
        <img
          src={landingRight}
          alt="landingRight"
          className="object-cover hidden object-bottom lg:block w-full h-[115vh] xl:col-span-3"
        />
      </section>
    </Fragment>
  );
};

export default Landing;
