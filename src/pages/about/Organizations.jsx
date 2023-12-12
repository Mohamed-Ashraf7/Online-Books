import React from "react";
import {FaAmazon, FaApple, FaGoogle,FaInternetExplorer} from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbBrandYahoo } from "react-icons/tb";
import { FaFirefox, FaYoutube } from "react-icons/fa6";
const Organizations = () => {
  return (
    <section className="p-2 md:pb-10">
       <h4 className="text-4xl font-semibold pb-4 mx-auto text-center">Trusted by the World's Engines </h4>
      <div className="my-4 grid grid-cols-4 gap-y-8">
        <TfiMicrosoftAlt size={45} className="place-self-center" />
        <FaAmazon size={55} className="place-self-center" />
        <FaApple size={60} className="place-self-center" />
        <FaGoogle size={55} className="place-self-center" />
        <TbBrandYahoo size={55} className="place-self-center" />
        <FaInternetExplorer size={55} className="place-self-center" />
        <FaFirefox size={55} className="place-self-center" />
        <FaYoutube size={55} className="place-self-center" />
      </div>
      <div className="py-6">
        <div className="container flex flex-col justify-around text-center px-10 md:flex-row shadow-md mobile:shadow-sm">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="text-sm font-medium uppercase">
              Books are like the Soul of the Body
            </p>
            <h4 className="py-2 text-3xl mobile:text-xl font-medium">
              Master Reading Every Where Any Time
            </h4>
          </div>
          <div className="centerd mt-3 gap-4 md:py-8">
            <div  className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7">
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 ">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold ">Google Play</span>
              </span>
            </div>
            <div className="flex items-center">
              <FaApple size={35} />
              <span className="flex flex-col items-start ml-4 ">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold">App Store</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
