import React from 'react'
import { MdOutlineFolderShared } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiHandHeartLight } from "react-icons/pi";
const State = ({icon,num,word}) => {
  return (
     <div className="flex p-2 md:p-4 space-x-2">
         <div className="centerd p-2 rounded-lg sm:p-4 ">
                {icon}
          </div>
          <div className="flex flex-col justify-center">
             <p className="text-3xl font-semibold">{num}</p>
             <p className="capitalize">{word}</p>
          </div>
     </div>
  )
}
const Stats = () => {
  return (
     <section className="px-6 my-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-6 mx-auto">
            <State
              icon={<MdOutlineFolderShared size={47} />}
              num={"200"} word={"Orders"}/>
            <State
              icon={<FaRegFaceSmileBeam size={45} />}
              num={"7500"} word={"New customers"}/>
            <State
              icon={<IoSpeedometerOutline size={50} />}
              num={"172%"} word={"Growth"}/>
            <State
              icon={<PiHandHeartLight size={50} />}
              num={"17%"} word={"Bounce rate"}/>
          </div>
        </section>
  )
}

export default Stats
