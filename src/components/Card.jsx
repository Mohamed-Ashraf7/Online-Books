import React, { useCallback } from "react";
import { openModal } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { FavBooks, DeleteBook } from "../store/BookSlice";
import FavBtn from "./Favbtn";
import { sucess, failed } from "../utils/Toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = (Book) => {
  const { book } = Book;
  const { list } = useSelector((state) => state.BookSlice);
  const dispatch = useDispatch();
  const handleMore = useCallback(() => {
    dispatch(openModal({ name: "Detail", Props: Book }));
  }, [dispatch, Book]);
  const isBookInList = list.some((favBook) => favBook.id === book.id);
  const { user } = useSelector((state) => state.userSlice);

  const handleFav = () => {
    if (!user) {
      dispatch(openModal({ name: "LoginRegister" }));
    } else {
      dispatch(FavBooks(book));
      sucess("Book added to your Favorite List");
    }
  };
  const handleDelete = () => {
    dispatch(DeleteBook(book.id));
    failed("Book removed From Favorite List ");
  };
  const thumbnail =
    book?.volumeInfo?.imageLinks?.thumbnail ||
    book?.volumeInfo?.imageLinks?.smallThumbnail ||
    "fallback-image-url";
  if (!book || !book.volumeInfo) {
    return null;
  }
 
  return (
    <div className="w-full rounded-xl flex flex-col hover:shadow-2xl cardShadow ">
      <div className="mx-auto shadow-lg shadow-gray-400 -mt-10 h-[194px] w-[128px] overflow-hidden">
        <LazyLoadImage  src={thumbnail}
          alt={`Cover for ${book.volumeInfo.title}`}
          className="w-full h-full"/>
      </div>
      <div className="px-4 mobile:p-1 mt-[.5px]">
        <div className="p-6 mobile:p-2 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="bg-primary text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="ml-2 text-gray-600 text-xs tracking-wider">
              Books &bull; 3 store
            </div>
          </div>
          <p className="mt-1 text-lg mobile:text-base uppercase leading-tight truncate">
            {book.volumeInfo.title.slice(0, 23)}
          </p>
          <div className="mt-4 mb-1 mobile:mt-2 mobile:text-sm flex mobile:flex-col items-center justify-between">
            <span className="text-base text-gray-600 ps-2">              
              {book.volumeInfo.authors && (
                <span>{book.volumeInfo.authors[0].slice(0, 15)}</span>
              )}
            </span>
            <span className="text-gray-600 text-xs">
              {book.volumeInfo.publishedDate}
            </span>
          </div>
          <div className="border-t-2 pt-3 flex items-center justify-between">
            <button onClick={() => handleMore()}  type="button"
              className="mobile:shadow-slate-300 mobile:px-2 mobile:text-sm  CardBtn 
             ">
              Read More
            </button>
            <FavBtn
              isBookInList={isBookInList} handleDelete={handleDelete}
              handleFav={handleFav}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Card);
