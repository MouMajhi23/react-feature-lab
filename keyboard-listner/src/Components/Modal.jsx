import { React, useEffect, useState } from "react";
import ModalOverlay from "./ModalOverlay";
const Modal = () => {
  const [modal, setModal] = useState(false);

  console.log("Modal", modal);
  const handleClose = () => {
    setModal(false);
  };
  useEffect(() => {
    if (!modal) return;
    const escapeKey = (event) => {
      if (event.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keydown", escapeKey);
    return () => {
      window.removeEventListener("keydown", escapeKey);
    };
  }, [modal]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-sky-100 gap-0.5 backdrop">
      <h2 className="text-2xl">Modal Overlay Example</h2>
      <p className="text-lg">
        Once you click on the Delete button, a modal will open.
      </p>
      <p className="text-lg">
        If you click on escape key from keyboard the modal will close!
      </p>
      <button
        className="border-solid border-amber-50 bg-blue-400 px-4 py-2 rounded-lg text-amber-50 my-2"
        onClick={() => setModal((prev) => !prev)}
      >
        Delete
      </button>
      {modal && <div className="fixed inset-0 bg-black/20"></div>}
      {modal && <ModalOverlay handleClose={handleClose} />}
    </div>
  );
};
export default Modal;
