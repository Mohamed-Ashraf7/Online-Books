import React from "react";

const Section = ({ children }) => {
  return (
    <section className="flex items-center flex-col xl:px-[70px] px-2 md:px-4  my-8 mt-0">
      {children}
    </section>
  );
};

export default Section;
