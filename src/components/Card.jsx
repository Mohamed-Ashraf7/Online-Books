import React, { useCallback } from "react";
import { openModal } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { FavBooks, DeleteBook } from "../store/BookSlice";
import { FavBtn } from "../components/TabBtn";
const Card = (Book) => {
  const { book } = Book;

  const { list } = useSelector((state) => state.BookSlice);
  const dispatch = useDispatch();
  const handleMore = useCallback(() => {
    dispatch(openModal({ name: "Detail", Props: Book }));
  }, [dispatch, Book]);
  const isBookInList = list.some((favBook) => favBook.id === book.id);
  const handleFav = () => {
    dispatch(FavBooks(book));
    toast.success("Book added to Favorite List!");
  };
  const handleDelete = () => {
    dispatch(DeleteBook(book.id));
    toast.error("Book Removed From Favorite List !");
  };
  const thumbnail =
    book?.volumeInfo?.imageLinks?.thumbnail ||
    book?.volumeInfo?.imageLinks?.smallThumbnail ||
    "fallback-image-url";
  if (!book || !book.volumeInfo) {
    return null;
  }

  console.log("card");
  return (
    <div className="relative w-full flex flex-col rounded-xl bg-white  shadow-2xl shadow-neutral-300 hover:shadow-neutral-700 ">
      <div className="relative mx-auto -mt-10 h-[200px] w-[150px] overflow-hidden rounded-md text-white shadow-xl shadow-blue-gray-500/40 ">
        <img
          src={thumbnail}
          alt={`Cover for ${book.volumeInfo.title}`}
          className=" rounded-md shadow-md w-full h-full"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2  text-black text-base font-semibold leading-snug tracking-wide  ">
          {book.volumeInfo.title.slice(0, 23)}
        </h5>
        <div className="flex items-center justify-between ">
          <p className="  text-[14px] ">
            {book.volumeInfo.authors && (
              <span>{book.volumeInfo.authors[0]}</span>
            )}
          </p>
          <p className=" text-[10px] font-bold ">
            {book.volumeInfo.publishedDate}
          </p>
        </div>
      </div>
      <div className="p-4 pt-2 flex items-center justify-between">
        <button
          onClick={() => handleMore()}
          type="button"
          className="hover:bg-[#555] hover:text-white mobile:px-2 text-base btn  hover:shadow-lg hover:shadow-black
           "
        >
          Read More
        </button>
        <FavBtn
          isBookInList={isBookInList}
          handleDelete={handleDelete}
          handleFav={handleFav}
        />
      </div>
    </div>
  );
};

export default Card;
