import { lazy } from "react";
import { Toast } from "./utils/Toast";
import ModalManger from "./utils/ModalManger";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/Footer" ;
const Routing = lazy(() => import("./layouts/Routing"));

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Header />
      <ModalManger />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
