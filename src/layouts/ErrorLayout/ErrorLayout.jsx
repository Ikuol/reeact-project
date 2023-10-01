import { useNavigate } from "react-router-dom";

import logo from "assets/logoblue.png";
import eebleu from "assets/ee-bleu.png";

const ErrorLayout = ({ code }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center
    bg-gray100 flex-col relative min-h-screen"
    >
      <div
        className="flex justify-center items-center lg:ml-10
      ml-8 -mt-32"
      >
        <img src={logo} alt="react-blue" className="lg:w-[20rem] w-64 h-fit" />
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-y-8 items-center lg:mt-8">
        <p
          className="font-bold text-main lg:text-[13rem]
        leading-[200px] text-[10rem]"
        >
          {code}
        </p>
        <p
          className="text-main lg:text-4xl text-2xl
        font-semibold"
        >
          Service indisponible
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-main text-white rounded-[48px]
          font-medium h-14 w-72 max-lg:mt-6"
        >
          Retour à l'acceuil
        </button>
      </div>
      <div
        className="absolute bottom-0 hidden
         lg:block left-0"
      >
        <img src={eebleu} alt="ee-logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ErrorLayout;
