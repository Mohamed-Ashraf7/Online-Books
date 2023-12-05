import React, {
  useEffect,
  useCallback,
  Fragment,
  useMemo,
  useState,
  lazy,
} from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/BookSlice";
import { handleTab, LoadMore } from "../../store/BookSlice";
import { BiSearch } from "react-icons/bi";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Landing from "./Landing";
import debounce from "lodash/debounce";
import img from "../../assets/vectors/foot4.avif";

const Tabs = lazy(() => import("./TabBtn"));
const Content = () => {
  const dispatch = useDispatch();
  const { books, loading, error, activeTab, Count } = useSelector(
    (state) => state.BookSlice
  );
  const [searchQuery, setSearchQuery] = useState("");
  const handleClick = useCallback(
    (query) => {
      dispatch(handleTab(query));
      dispatch(fetchBooks(query));
      dispatch(LoadMore(12));
    },
    [dispatch]
  );
  const displayBooks = books.slice(0, Count);
  useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooks("History"));
    }
  }, [dispatch, books]);

  const debouncedFetchBooks = useMemo(
    () =>
      debounce((query) => {
        if (query.trim() === "") {
          dispatch(fetchBooks("History"));
        } else {
          dispatch(fetchBooks(query));
        }
      }, 1500),
    [dispatch]
  );

  const handleChange = useCallback(
    (e) => {
      setSearchQuery(e.target.value);
      debouncedFetchBooks(e.target.value);
    },
    [debouncedFetchBooks]
  );

  return (
    <Fragment>
      <Landing />
      <Section>
        <h2 className=" px-5 w-full text-3xl pb-2 mb-2 text-[#333]  font-bold border-b-2 border-black ">
          Every Syllable Is A Spark.”
        </h2>
        <Tabs handle={handleClick} activeTab={activeTab} />
        <div
          className="md:min-w-[600px] mb-14 w-[350px] bg-center h-[200px]  p-2 centerd"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flex w-full  shadow-md shadow-gray-700  ">
            <div className="text-gray-700 rounded-tl-xl rounded-bl-xl w-12 text-center  bg-white p-4">
              <BiSearch size={22} />
            </div>
            <input
              type="text"
              className="w-full pl-2 text-base font-semibold outline-0"
              placeholder=" S e a r c h . . ."
              id="search"
              onChange={handleChange}
              value={searchQuery}
            />
            <button className="bg-primary rounded-tr-lg rounded-br-lg py-1 px-5  text-white  cursor-pointer hover:bg-blue-800">
              {" "}
              Search
            </button>
          </div>
        </div>
        {loading === "pending" && <Loader />}
        <div className="lg:gap-x-6 self-stretch gap-x-2 gap-y-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-between">
          {loading === "fulfilled"
            ? displayBooks.map((Book) => (
                <span key={Book.id}>
                  <Card book={Book} />
                </span>
              ))
            : loading === "rejected" && (
                <p className="text-red-500">
                  {" "}
                  [ Failed to load Data ] : {error}
                </p>
              )}
        </div>
        <button
          className="btn w-[300px]  my-8"
          onClick={() => dispatch(LoadMore(Count + 8))}
        >
          Load More
        </button>
      </Section>
    </Fragment>
  );
};

export default Content;
