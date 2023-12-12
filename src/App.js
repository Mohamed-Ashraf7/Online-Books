import { lazy, useEffect } from "react";
import { Toast } from "./utils/Toast";
import ModalManger from "./utils/ModalManger";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/Footer";
const Routing = lazy(() => import("./layouts/Routing"));

const ScrollToTop = () => {
  const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toast />
      <Header />
      <ModalManger />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
