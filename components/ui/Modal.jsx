"use client";

import { useEffect } from "react";
import "./Modal.css";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div className={open ? "modal active-modal" : "modal"}>
      <div className="modal__content">
        <i onClick={onClose} className="uil uil-times modal__close"></i>
        {children}
      </div>
    </div>
  );
}
