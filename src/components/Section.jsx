import React from "react";

const Section = ({ children }) => {
  return (
    <div className="centerd flex-col xl:px-28 px-2 md:px-6 font-second my-8 mt-0">
      {children}
    </div>
  );
};

export default Section;
