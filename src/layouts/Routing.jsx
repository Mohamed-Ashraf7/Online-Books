import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../components/Spinner";
import Content from "../pages/Home/Content";
const About = lazy(() => import("../pages/about/About"));
const FavList = lazy(() => import("../pages/FavList/FavList"));
const Routing = () => {
  return (
    <Suspense
      fallback={<Spinner/>}>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
