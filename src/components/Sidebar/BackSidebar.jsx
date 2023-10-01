import SidebarLinks from "components/SidebarLink/SidebarLinks";
import routes from "constants/routes";

const BackSidebar = ({ open, closeOnClick }) => {
  return (
    <div
      className={`flex min-h-full fixed bg-white border-t border-t-gray200 z-30 transition-all duration-300 ease-linear ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <ul className="pt-4 px-2">
        <SidebarLinks
          routes={routes.back}
          closeOnClick={closeOnClick}
          admin={true}
        />
      </ul>
    </div>
  );
};
export default BackSidebar;
