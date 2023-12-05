import Img from "../../assets/AuthorYear.webp";
import Section from "../../components/Section";
import author from "../../assets/author.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaGithub, FaDribbble, FaTwitter, FaEnvelope } from "react-icons/fa";
const Quote = () => {
  return (
    <Section className="px-6 py-2 mx-auto space-y-4 ">
      <div className="p-5 mx-auto">
        <div className="flex flex-col w-full mx-auto overflow-hidden">
          <LazyLoadImage
            src={Img}
            alt="QuoteBanner"
            className="object-cover pb-20 w-full md:h-[350px]  "
          />
          <div className="p-6 m-1 mx-auto -mt-20 space-y-2 bg-white ">
            <div className="space-y-2">
              <span className="inline-block text-2xl font-semibold sm:text-3xl">
                The Best Barnes & Nobel author from the Nordstrom Anniversary
              </span>
              <p className="text-xs ">
                By
                <span className="text-xs ">David Grann</span>
              </p>
            </div>
            <div>
              <p>History Simply Dosen't Get More Riveting...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t px-14 ">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <LazyLoadImage
            src={author}
            alt="author"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start "
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">David Grann</h4>
            <p>
              Sed non nibh iaculis, posuere diam vitae, consectetur neque.
              Integer velit ligula, semper sed nisl in, cursus commodo elit.
              Pellentesque sit amet mi luctus ligula euismod lobortis ultricies
              et nibh.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-4 space-x-4 align-center">
          <span className="p-2 rounded-md">
            <FaGithub className="w-4 h-4" />
          </span>
          <span className="p-2 rounded-md ">
            <FaDribbble className="w-4 h-4" />
          </span>
          <span className="p-2 rounded-md ">
            <FaTwitter className="w-4 h-4" />
          </span>
          <span className="p-2 rounded-md ">
            <FaEnvelope className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Quote;
