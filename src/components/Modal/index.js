import React, { useEffect } from "react";

import style from "./style.module.css";

const Modal = ({
  active,
  setActive,
  title,
  children,
  btn1,
  btn2,
  saveModal,
  closeModal,
  closeOverlayClick,
  ...props
}) => {
  useEffect(() => {
    active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [active]);

  return (
    <div
      className={`${style.wrapper} ${active && style.active}`}
      onClick={
        closeOverlayClick ? () => setActive(false) : () => setActive(true)
      }
    >
      <div
        className={`${style.modalContent} ${active && style.activeContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.nav}>
          <h3>{title}</h3>
        </div>

        <div className={style.main} {...props}>
          {children}
        </div>
        {(btn1 || btn2) && (
          <div className={style.footer}>
            <button attr="primary" onClick={saveModal}>
              {btn1}
            </button>
            <button attr="outline" onClick={closeModal}>
              {btn2}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
