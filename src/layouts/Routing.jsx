import { lazy, Suspense } from "react";
import Content from "../pages/Home/Content";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader";
const About = lazy(() => import("../pages/about/About"));
const FavList = lazy(() => import("../pages/FavList/FavList"));

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
