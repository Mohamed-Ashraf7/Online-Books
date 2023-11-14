import React from "react";
import { closeModal } from "../store/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
import Card from "../components/Card";
import LoginRegister from "../components/TwoSide";
import Detail from "../components/Detail";

const ModalManger = () => {
  const { isOpen, componentName, Props } = useSelector(
    (state) => state.modalSlice
  );
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());
  const Data = { Login, Register, Card, LoginRegister, Detail };
  let Renderd;
  if (componentName) {
    const Selected = Data[componentName];
    if (Selected) {
      Renderd = <Selected {...Props} />;
    }
  }
  return (
    <Modal handle={handleClose} isOpen={isOpen}>
      {Renderd}
    </Modal>
  );
};

export default ModalManger;
