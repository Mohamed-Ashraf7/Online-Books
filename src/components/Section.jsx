import React from "react";

const Section = ({ children }) => {
  return (
    <div className="flex items-center flex-col xl:px-[70px] px-2 md:px-4  my-8 mt-0">
      {children}
    </div>
  );
};

export default Section;
