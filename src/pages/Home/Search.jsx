import React from "react";
import img from "../../assets/vectors/foot4.avif";
import { BiSearch } from "react-icons/bi";
const Search = ({handleChange,searchQuery}) => {
  return (
    <section className="md:min-w-[600px] mb-14 w-[350px] relative bg-center py-20 p-2 centerd"
          style={{backgroundImage: `url(${img})`}}>
          <div className="flex w-full shadow-md shadow-gray-700  ">
            <div className="text-gray-700 rounded-tl-xl rounded-bl-xl w-12 text-center bg-white p-4">
              <BiSearch size={22} />
            </div>
            <input type="text"
              className="w-full pl-2 text-base font-semibold outline-0"
              placeholder=" S e a r c h . . ."
              id="search"
              onChange={handleChange}
              value={searchQuery}/>
            <button type="button" className="bg-primary rounded-tr-lg rounded-br-lg py-1 px-5 text-white cursor-pointer hover:bg-blue-800">
              Search
            </button>
          </div>
        </section>)}
export default Search;
