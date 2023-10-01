import Navbar from "components/Navbar/Navbar";
import BackSidebar from "components/Sidebar/BackSidebar";
import useScrollToTop from "hooks/useScrollToTop";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const BackofficeLayout = () => {
  //Etat de la sidebar
  const [openSidebar, setOpensidebar] = useState(false);

  useScrollToTop();

  useEffect(() => {
    //Ecouteur d'évènement lorsque la dimension de l'écran change
    window.addEventListener("resize", () =>
      window.innerWidth < 1024 ? setOpensidebar(false) : setOpensidebar(true)
    );

    if (window.innerWidth >= 1024) {
      setOpensidebar(true);
    }
  }, []);

  //Fermerture de la sidebar
  const closeOnClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setOpensidebar(false);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col min-h-[inherit]">
      <Navbar admin={true} setOpensidebar={setOpensidebar} open={openSidebar} />
      <div className="flex mt-[64px] sm:mt-[71px] grow w-full">
        <BackSidebar open={openSidebar} closeOnClick={closeOnClick} />
        <div className="bg-gray200 w-full lg:ml-[276px] px-3 sm:pt-8 pt-6 md:px-8 relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BackofficeLayout;
