import logo from "../assets/images.png";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="lg:px-32 px-2 py-8 md:py-10 rounded-t-3xl bg-[#111] flex-col text-white">
        <div className="centerd flex-wrap mx-auto gap-y-3 lg:justify-between">
        <div className="centerd pr-3 space-x-5 ">
         <div className="h-10 w-12 rounded-md bg-white p-1">
          <img src={logo}
            className="object-cover w-full h-full "
              alt="Books_Logo" />
          </div>
          <ul className="centerd space-x-4 sm:space-x-8">
            <li className="text-2xl mobile:text-base">Terms of Use</li>
            <li className="text-2xl mobile:text-base">Privacy</li>
          </ul>
        </div>
        <div className=" centerd flex-wrap flex-col">
         <Socials size={40} />
          <ul className="centerd space-x-5">
             <li>Instagram</li>    
             <li>Facebook</li>    
             <li>Pinterest</li>    
             <li>Google</li>    
          </ul>
        </div>
      </div>
      <p className="text-center mt-2 text-white text-xl mobile:text-sm">
        {" "}
        All Copy Right Reserved @ 2023
      </p>
    </footer>
  );
};

export default Footer;
