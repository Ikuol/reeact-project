import { Link } from "react-router-dom";

const DisplayMessage = ({ date, senderName, message, pieceNumber }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 h-auto">
      <div className="flex flex-col gap-y-2">
        <p className="text-main text-sm font-semibold">{date}</p>
        <p className="text-main text-sm font-semibold">{senderName}</p>
      </div>
      <div
        className="bg-grayUpload rounded-xl p-4 
       w-full"
      >
        <p className="text-main text-sm font-normal">{message}</p>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <p className="text-main text-sm font-semibold">
          Pièces jointes {pieceNumber}
        </p>
        <div className="flex gap-x-2">
        
        {/* Les liens vers le fichiers dans la discussion */}
          <Link
            to="#"
            className="text-main md:text-sm text-xs
            font-normal"
          >
            My-photo.png
          </Link>
          <div className="w-px h-4 bg-main" />
          <Link
            to="#"
            className="text-main md:text-sm text-xs
            font-normal"
          >
            My-photo.png
          </Link>
          <div className="w-px h-4 bg-main" />
          <Link
            to="#"
            className="text-main md:text-sm text-xs
            font-normal"
          >
            My-photo.png
          </Link>
        </div>
      </div>
      <div
        className="w-full h-px bg-linecolor
        md:mt-4 md:mb-4 mt-2"
      />
    </div>
  );
};

export default DisplayMessage;
