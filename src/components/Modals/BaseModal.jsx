import { useEffect, useRef } from "react";

import useOutsideAlerter from "hooks/useOutsideAlerter";

import { HiOutlineX } from "react-icons/hi";

// Composant de base des modals
const BaseModal = ({ purpose, closeModal, children }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full
      p-4 overflow-x-hidden justify-center h-full flex items-center
      overflow-y-auto md:inset-0 bg-gray-900/60"
    >
      <div
        ref={wrapperRef}
        className="flex flex-col w-full h-auto
        max-w-[55rem] "
      >
        <div
          className="bg-gray200 text-main justify-between
        px-6 h-16 max-sm:p-3 flex items-center rounded-t-2xl"
        >
          <p className="font-semibold md:text-2xl text-xl">{purpose}</p>
          <HiOutlineX
            onClick={closeModal}
            className="font-semibold cursor-pointer"
            size="1.5rem"
          />
        </div>
        <div className="w-full h-[2px] bg-linecolor" />
        <div
          className="flex px-6 sm:px-16 py-5 sm:py-8 bg-white
        rounded-b-2xl"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
