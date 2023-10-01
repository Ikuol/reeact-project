import { NavLink } from "react-router-dom";

const SidebarLinks = ({ routes, closeOnClick, admin = false }) => {
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      return (
        <NavLink
          key={route.id}
          to={admin ? "/admin" + route.path : route.path}
          className={({ isActive }) => {
            return `hover:text-primary hover:font-semibold ${
              isActive
                ? "text-primary font-semibold"
                : "text-inactive font-medium"
            }`;
          }}
          onClick={() => {
            closeOnClick();
          }}
        >
          {({ isActive }) => {
            return (
              <div className="px-3 my-3">
                <li className="flex items-center">
                  <div
                    className={`rounded-full p-2 shadow-sm ${
                      isActive
                        ? "bg-primary text-white shadow-primary"
                        : "bg-white"
                    }  `}
                  >
                    {route.icon}
                  </div>
                  <div className="text-[14px] ml-3">{route.name}</div>
                </li>
              </div>
            );
          }}
        </NavLink>
      );
    });
  };
  return createLinks(routes);
};

export default SidebarLinks;
