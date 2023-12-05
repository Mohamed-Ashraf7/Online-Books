import Footer from "./layouts/Footer";
import Header from "./layouts/header/Header";
import { Toast } from "./utils/Toast";
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
      <Toast />
      <Header />
      <ModalManger />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
