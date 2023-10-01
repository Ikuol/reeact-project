import { memo } from "react";

//Ajouter un Link ou un navigate pour faire amener l'utilisateur vers
//l'alerte ou l'intervention précise
const DisplayNotifications = ({ imgUrl, sujet, date }) => {
  return (
    <div
      className="flex flex-col gap-y-2 cursor-pointer
    items-center"
    >
      <div className="flex gap-x-4 items-center">
        <span>
          <img src={imgUrl} alt="profil-pic" className="h-10 w-10 rounded-md" />
        </span>
        <div className="flex flex-col">
          <p className="text-sm font-medium w-[170px] truncate">{sujet}</p>
          <p className="text-xs font-medium text-main">{date}</p>
        </div>
      </div>
      <div className="h-px w-full my-3 bg-gray-300" />
    </div>
  );
};

export default memo(DisplayNotifications);
