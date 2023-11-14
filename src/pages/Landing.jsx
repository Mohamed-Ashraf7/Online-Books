import landingRight from "../assets/01.jpg";
import landingLetf from "../assets/vectors/history3.avif";

const Landing = () => {
  return (
    <section className="grid capitalize gap-6 text-center font-second lg:grid-cols-2 xl:grid-cols-5">
      <div className="w-full p-6 mt-10 mobile:mt-20 sm:p-16 xl:col-span-2 ">
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
              alt="landlleft"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="w-full p-2  ">
              I can feel infinitely alive curled up on the sofa reading a book.
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
        className="object-cover hidden  lg:block w-full h-[115vh] xl:col-span-3"
      />
    </section>
  );
};

export default Landing;
