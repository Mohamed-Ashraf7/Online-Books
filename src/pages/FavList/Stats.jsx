import React from 'react'

const Stats = ({icon,num,word}) => {
  return (
     <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                {icon}
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold ">{num}</p>
        <p className="capitalize">{word}</p>
              </div>
            </div>
  )
}

export default Stats
