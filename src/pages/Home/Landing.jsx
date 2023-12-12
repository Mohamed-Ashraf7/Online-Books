import React from 'react';
import { Fragment } from 'react';
import landingRight from '../../assets/b29.webp';
import landingLeft from '../../assets/c3.webp';
import Helmet from '../../components/Helmet';
const Landing = () => {
  return (
    <Fragment>   
   <Helmet title="Home" imageUrls={[landingLeft , landingRight]} />     
      <section className="grid capitalize gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full p-6 mt-14 mobile:mt-20 md:p-16 xl:col-span-2">
          <span>Uniquely Portable Magic</span>
          <h2 className="text-5xl font-extrabold">Literature is my Utopia</h2>
          <p className="my-6">
            <span className="inline-block font-medium text-md text-primary pr-[2px]">
              “ To learn to read is to light a fire
            </span>
            ; every syllable that is spelled out is a spark.”
          </p>
          <div className="space-y-3">
            <div className="w-auto md:h-[310px] h-[65vh] relative overflow-hidden">
              <img src={landingLeft} alt="landingleft" loading="lazy"               
                className="w-full h-full object-cover absolute top-0 left-0"
                 />
            </div>
            <div>
              <p className="w-full p-2">
                I can feel infinitely alive curled up on the sofa reading a book.
              </p>
            </div>
            <button type="button" className="w-full bg-white text-black shadow-lg text-xl py-2 font-semibold">
              Join the waitlist
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block w-full h-[115vh] xl:col-span-3 overflow-hidden">
          <img alt="landingRight" src={landingRight} loading="lazy"
            className="object-cover object-bottom w-full h-full absolute top-0 left-0"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
