import React from "react";
import WriterCard from "./WriterCard";
import img1 from "../../assets/vectors/userProfile.avif";
import img2 from "../../assets/vectors/userProfile2.avif";
import img3 from "../../assets/vectors/userProfile3.avif";

const Writers = () => {
  return (
    <section className="py-2 md:px-12">
      <div className="px-4 mx-auto">
          <h3 className="text-4xl font-bold text-center mb-5">
            Top Writers Of The Year
          </h3>
         <div className="grid gap-x-5 md:grid-cols-3">
          <WriterCard
            name="Millie Florence"
            role="Writer / Scientist"
            imageSrc={img1}
            description="You can get lost in any library, no matter the size. But the more lost you are, the more things you’ll find."
            taskCount={40}
            reviews="4,7 (750 Reviews)"
          />
          <WriterCard
            name="Ben Okri"
            role="Writer"
            imageSrc={img2}
            description="Reading of civilization; it’s one of the greatest acts of civilization it takes the free raw material of the mind"
            taskCount={40}
            reviews="4,3 (350 Reviews)"
          />
          <WriterCard
            name="George R.R. Martin"
            role="Novelist / Writer"
            imageSrc={img3}
            description="A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one."
            taskCount={40}
            reviews="4,9 (1050 Reviews)"
          />
        </div>
      </div>
    </section>
  );
};

export default Writers;
