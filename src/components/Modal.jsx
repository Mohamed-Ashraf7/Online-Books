import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ handle, children, isOpen }) => {
   
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  return (
    <Fragment>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full min-h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-neutral-900 bg-opacity-80 centerd">
          <div className="relative w-full max-w-5xl max-h-full bg-white rounded-lg shadow">
            <button
              onClick={handle}
               aria-label="close"
              type="button"
              className="absolute right-2 top-2 hover:bg-rose-700 bg-neutral-600 text-white rounded-lg w-8 h-8 ml-auto centerd"
            >
              <AiOutlineClose size={30} />
            </button>
            <div className="centerd py-12 md:pt-10">{children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
