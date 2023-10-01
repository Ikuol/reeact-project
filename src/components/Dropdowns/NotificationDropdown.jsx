import DisplayNotifications from "components/Notifications/DisplayNotifications";
import { memo } from "react";
import { Link } from "react-router-dom";

const NotificationDropdown = ({ avatar, open, setOpen, data, admin }) => {
  return (
    <div
      className={`absolute w-full bg-white h-auto p-6 pb-2
    right-[17%] md:top-16 rounded-[15px] max-w-[280px] shadow-xl
    top-20 ${open ? "scale-100" : "scale-0"} transition-all
    duration-300 ease-in-out origin-top`}
    >
      {data.length > 0 ? (
        <>
          {data.map((alerte) => {
            return (
              <DisplayNotifications
                key={alerte.id}
                imgUrl={avatar}
                sujet={alerte.title}
                date={alerte.date}
              />
            );
          })}
          <div className="flex justify-end ">
            <Link
              to={admin ? "/admin/demande-dinterventions" : "/alertes"}
              onClick={() => setOpen(false)}
              className="md:hover:bg-gray400 hover:text-primary
              cursor-pointer text-main text-xs font-medium
              px-2 py-2 rounded-md max-md:bg-gray400"
            >
              Voir plus
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center text-xs text-gray800">Pas d'alertes</div>
      )}
    </div>
  );
};

export default memo(NotificationDropdown);
