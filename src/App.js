import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Toaster } from "react-hot-toast";
import Routing from "./layouts/Routing";
import ModalManger from "./utils/ModalManger";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
function App() {
  const { isOpen } = useSelector((state) => state.modalSlice);
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <ModalManger />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
