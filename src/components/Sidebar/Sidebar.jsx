import IconButton from "components/Buttons/IconButton";
import SidebarLinks from "components/SidebarLink/SidebarLinks";
import routes from "constants/routes";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiPlus } from "react-icons/bi";

const Sidebar = ({ open, closeOnClick }) => {
  return (
    <div
      className={`flex min-h-full fixed bg-white border-t border-t-gray200 z-40 transition-all duration-300 ease-linear ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="border-r border-r-gray200 flex flex-col px-2 pt-7">
        <IconButton icon={<FcGoogle size={20} />} className="bg-white" />
        <IconButton
          icon={<FaFacebookF size={20} />}
          className="bg-[#3B5998] text-white opacity-20"
        />
        <IconButton
          icon={<FaInstagram size={20} />}
          className="bg-[#D43377] text-white opacity-20"
        />
        <IconButton
          icon={<FaTwitter size={20} />}
          className="bg-[#55ACEE] text-white opacity-20"
        />
        <IconButton icon={<BiPlus size={20} className="text-primary" />} />
      </div>

      <ul className="pt-4">
        <SidebarLinks routes={routes.front} closeOnClick={closeOnClick} />
      </ul>
    </div>
  );
};
export default Sidebar;
