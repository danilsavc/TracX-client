import React from "react";
import ReactDOM from "react-dom";

import style from "./Modal.module.scss";

const modalRootElement = document.getElementById("modal");

const Modal = ({ active, setActive, children }) => {
  const isActive = active ? `${style.modal} ${style.active}` : `${style.modal}`;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={isActive} onClick={() => setActive(false)}>
          <div className={style.modalContent} onAuxClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        modalRootElement
      )}
    </>
  );
};

export default Modal;
