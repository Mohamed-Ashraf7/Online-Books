import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
export const Toast = () => {
  return (
    <Toaster
      position="top-right"
      style={{ zIndex: 9999999999 }}
      containerStyle={{
        top: 120,
        right: 20,
      }}
    />
  );
};
export const sucess = (message) => {
  toast(message, {
    style: {
      backgroundColor: "#00695c",
      color: "white",
      padding: ".8rem",
    },
    icon: <FcApproval size={30} />,
  });
};
export const failed = (message) => {
  toast(message, {
    style: {
      backgroundColor: "#b91616",
      padding: ".8rem",
      color: "white",
    },
    icon: <FcFullTrash size={30} />,
  });
};
