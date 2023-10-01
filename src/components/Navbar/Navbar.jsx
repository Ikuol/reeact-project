import { useCallback, useRef, useState } from "react";

import logo from "assets/logo.png";
import avatar from "assets/avatars/men.png";
import {
  MdOutlineChat,
  MdOutlineNotifications,
  MdOutlineSettings,
} from "react-icons/md";
import { CgMenuRight, CgArrowLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import NotificationBadge from "components/Badges/NotificationBadge/NotificationBadge";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
import useOutsideAlerter from "hooks/useOutsideAlerter";
import SearchForm from "components/forms/Navbar/SearchForm";
import Temperature from "./Temperature";
import { dataAlertes } from "constants/alertes";

const Navbar = ({ open, setOpensidebar, admin = false }) => {
  //Etat du dropdown de notification
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Fermerture du dropdown
  const handleClose = useCallback(() => {
    setNotificationDropdown(false);
  }, []);

  useOutsideAlerter(wrapperRef, handleClose);

  // Ouverture du dropdown
  const openNotificationDropdown = useCallback(() => {
    setNotificationDropdown(!notificationDropdown);
  }, [notificationDropdown]);

  //Ouverture ou fermeture de la Sidebar
  const toggleSidebar = useCallback(() => {
    setOpensidebar((state) => !state);
  }, [setOpensidebar]);

  return (
    <header className="fixed w-full top-0 flex justify-between items-center py-3 sm:py-2 z-30 bg-white px-1 sm:pl-10 sm:pr-6">
      <div className="flex items-center gap-x-2">
        <Link to={admin ? "/admin" : "/"}>
          <img src={logo} alt="Reeact logo" className="w-28 sm:w-full" />
        </Link>
        <div
          onClick={toggleSidebar}
          className={`text-primary lg:hidden transition-all duration-300 ease-in-out ${
            open ? "rotate--90" : ""
          }`}
        >
          {open ? <CgArrowLeft size={25} /> : <CgMenuRight size={25} />}
        </div>
      </div>
      <div className="hidden lg:block transition-all ease-linear duration-300">
        {/* Formulaire de recherche */}
        <SearchForm />
      </div>
      <div className="flex justify-end items-center">
        <Temperature temperature={21} localisation="Medan,IDN" />

        {/* Alertes  */}
        <div ref={wrapperRef}>
          <NotificationBadge
            icon={
              <MdOutlineNotifications
                onClick={openNotificationDropdown}
                size={20}
              />
            }
            value="12"
          />
          <NotificationDropdown
            avatar={avatar}
            open={notificationDropdown}
            setOpen={setNotificationDropdown}
            data={dataAlertes.slice(0, 3)}
            admin={admin}
          />
        </div>

        {/* Messagerie  */}
        <Link to={admin ? "/admin/messagerie" : "/messagerie"}>
          <NotificationBadge icon={<MdOutlineChat size={20} />} value="5" />
        </Link>

        {/* Paramètres */}
        <Link to={admin ? "/admin/parametres" : "/parametres"}>
          <NotificationBadge icon={<MdOutlineSettings size={20} />} value="!" />
        </Link>

        <div className="flex items-center">
          <div className="hidden sm:flex flex-col text-primary mr-3">
            <span className="text-[12px]">
              Hello, <span className="font-bold">Franklin</span>
            </span>
            <span className="text-[9px]">Super Admin</span>
          </div>
          <img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
