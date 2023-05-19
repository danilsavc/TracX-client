import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.scss";
import { closeModal } from "../../Redux/slices/modal";

const modalRootElement = document.getElementById("modal");

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.modal);
  const isActive = state ? `${style.modal} ${style.active}` : `${style.modal}`;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={isActive} onClick={() => dispatch(closeModal())}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        modalRootElement
      )}
    </>
  );
};

export default Modal;
