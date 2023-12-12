import { FavBooks, DeleteBook } from "../store/BookSlice";
import { useDispatch, useSelector } from "react-redux";
import FavBtn from "./Favbtn";
import { sucess, failed } from "../utils/Toast";
import { openModal } from "../store/modalSlice";
const Detail = (Book) => {
  const { book } = Book;
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.BookSlice);
  const isBookInList = list.some((favBook) => favBook.id === book.id);
  const { user } = useSelector((state) => state.userSlice);
  const handleFav = () => {
    if (!user) {
      dispatch(openModal({ name: "LoginRegister" }));
    } else {
      dispatch(FavBooks(book));
      sucess("Book added to your Favorite List");
    }};

  const handleDelete = () => {
    dispatch(DeleteBook(book.id));
    failed("Book removed From Favorite List ");
  };
  const thumbnail =
    book?.volumeInfo?.imageLinks?.thumbnail ||
    book?.volumeInfo?.imageLinks?.smallThumbnail ||
    "fallback-image-url";
 
  return (
    <div
      className="lg:mx-10 lg:pt-4 flex flex-col rounded-xl bg-white shadow-xl 
      ">
      <div className=" mx-auto lg:grid lg:grid-col-1 lg:grid-cols-4 flex flex-col-reverse gap-x-10 w-full p-6 lg:mb-5">
        <div className="flex flex-col col-span-3 pt-2">
          <p className="mb-2 text-2xl font-medium  tracking-widest ">
            <span className="border-b-2 font-semibold">Title : </span>
            {book.volumeInfo.title.slice(0, 30)}
          </p>
          <div className="text-[#888] text-xl flex items-center justify-between mobile:text-base">
            {book.volumeInfo.authors && (
              <span>{book.volumeInfo.authors[0]}</span>)}
            <span className="shadow-lg mobile:shadow-none shadow-gray-100 rounded-md px-7 py-2   ">
              {book.volumeInfo.publishedDate}
            </span>
          </div>
          <div className="flex items-start flex-col text-black gap-y-4 mt-1">
            <div className="text-base">
              <span className="text-xl font-bold p-[2px]"> Description :</span>
                 {book
                ? book.volumeInfo.description.slice(0, 300)
                : book.searchInfo.textSnippet.slice(0, 300)}
            </div>
            <p className="text-base">
              <span className="text-xl font-bold p-[2px]"> publisher :</span>
              {book.volumeInfo.publisher}
            </p>
            <p className="text-lg">
              <span className="text-xl font-bold p-[2px]"> Page Count : </span>
              {book.volumeInfo.pageCount}
            </p>
            <span className="centerd gap-x-4">
              <span className="bg-[#5a5a5a] text-white rounded-md p-2 shadow-md shadow-gray-400">
                {book.saleInfo.country}
              </span>
              <span className="bg-[#5a5a5a] text-white rounded-md p-2 shadow-md shadow-gray-400">
                PDF
              </span>
              <span className="bg-[#5a5a5a] text-white rounded-md p-2 shadow-md shadow-gray-400">
                Available
              </span>
            </span>
          </div>
        </div>
        <div className="h-[250px] w-[200px] col-span-1 overflow-hidden rounded-md shadow-lg shadow-zinc-500">
          <img src={thumbnail}
            alt={`Cover for ${book.volumeInfo.title}`}
            className="rounded-md w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
        <a className="shadow-md shadow-gray-500 btn"
          href={book.volumeInfo.previewLink}
          target="_blank"
          rel="noopener noreferrer">
          Book Link
        </a>
        <FavBtn isBookInList={isBookInList}
          handleDelete={handleDelete}
          handleFav={handleFav}
        />
      </div>
    </div>
  );
};

export default Detail;
