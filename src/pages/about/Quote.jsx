import Img from "../../assets/AuthorYear.webp";
import Section from "../../components/Section";
import author from "../../assets/author.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Socials from "../../components/Socials";
const Quote = () => {
  return (
    <Section className="px-6 py-2 mx-auto space-y-4 ">
      <section className="p-5 mobile:pb-0 mx-auto">
        <div className="flex flex-col mx-auto overflow-hidden">
          <LazyLoadImage
            src={Img} alt="QuoteBanner"
            className="object-cover mobile:pb-20 md:h-[350px]"/>
          <div className="p-6 mobile:pb-2 mx-auto -mt-28 space-y-2 bg-white">
            <div className="space-y-1">
              <span className="inline-block text-2xl font-semibold sm:text-3xl">
                The Best Barnes & Nobel author from the Nordstrom Anniversary
              </span>
              <p className="text-xs">
                By <span> David Grann</span>
              </p>
            </div>
            <p>History Simply Dosen't Get More Riveting...</p>
          </div>
        </div>
      </section>
      <section className="pt-4 border-t px-10 text-justify md:px-28">
        <div className="flex flex-col gap-4 md:flex-row">
          <LazyLoadImage
            src={author} alt="author"
            className="self-center w-20 h-20 border rounded-3xl md:justify-self-start "
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">David Grann</h4>
            <p>
              Reading of civilization; it’s one of the greatest acts of civilization it takes the free raw material of the mind
            no matter the size. But the more lost you are, the more things you’ll find.
            </p>
          </div>
        </div>
        <Socials size={15}/>
      </section>
    </Section>
  );
};

export default Quote;
