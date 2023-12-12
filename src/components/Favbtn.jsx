import { CiHeart } from "react-icons/ci";
import { Fragment } from "react";
const FavBtn = ({ isBookInList, handleDelete, handleFav }) => {
  return (
    <Fragment>
      {isBookInList ? (
        <button type="button"
           aria-label="Delete"
          onClick={() => handleDelete()}
          className="shadow-slate-400 shadow-lg rounded-md px-2 py-1 bg-[#b91616] text-white hover:bg-red-900"
        >
          <CiHeart className="w-8 h-5 mobile:w-6" />
        </button>
      ) : (
        <button
            type="button"
             aria-label="Like"
            onClick={() => handleFav()}
            className="shadow-slate-400 shadow-lg rounded-md px-2 py-1 text-[#b91616] hover:bg-[#b91616] hover:text-white"
          >
          <CiHeart className="w-8 h-5 mobile:w-6 " />
        </button>
      )}
    </Fragment>
  );
};
export default FavBtn;