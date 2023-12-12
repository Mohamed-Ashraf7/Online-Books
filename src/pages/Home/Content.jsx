import React, {useEffect,useCallback,Fragment,useMemo,useState} from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/BookSlice";
import { handleTab, LoadMore } from "../../store/BookSlice";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import debounce from "lodash/debounce";
import Landing from "./Landing";
import Search from "./Search";
import Tabs from "./TabBtn";
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

  const debouncedFetchBooks = useMemo(
    () =>
      debounce((query) => {
        if (!query) {
          dispatch(fetchBooks("History"));
        } else {
          dispatch(fetchBooks(query));
        }
      }, 1200),
    [dispatch]
  );
  useEffect(() => {
    debouncedFetchBooks();
  }, [debouncedFetchBooks]);

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
        <Search handleChange={handleChange} searchQuery={searchQuery} />
        {loading === "pending" && <Loader />}
        <div className="lg:gap-x-6 self-stretch gap-x-2 gap-y-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-between">
          {loading === "fulfilled"
            ? displayBooks.map((Book) => (
                <span key={Book.id}>
                  <Card book={Book} />
                </span>))
            : loading === "rejected" && (
                <p className="text-red-500">
                  [ Failed to load Data ] : {error}
                </p>)}
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