import { Link } from "react-router-dom";

import logo from "assets/logoblue.png";
import eebleu from "assets/ee-bleu.png";

const Success = () => {
  return (
    <div
      className="flex relative min-h-screen
    max-sm:justify-center bg-gray100 flex-col"
    >
      <div>
        <div className="flex m-auto md:mt-12 -mt-12">
          <img
            src={logo}
            alt="reeact-blue"
            className="w-1/2 md:w-1/4 h-fit m-auto"
          />
        </div>

        <div className="flex flex-col m-auto w-full justify-center md:px-48 md:mt-8">
          <h1 className="text-[66px] font-semibold text-primary text-center my-2">
            Merci !
          </h1>
          <div className="text-primary md:text-[26px] text-xl font-medium">
            <p className="text-center hidden md:block">
              Votre commande à bien été validée, vous pouvez dès à présent
              <br />
              profiter de toutes les fonctionnalités logicielles
            </p>
            <p className="text-center md:hidden">
              Votre commande à bien été validée, vous pouvez dès à présent
              profiter de toutes les fonctionnalités logicielles
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/">
              <button
                className="active:scale-[.98] bg-primary text-white
            text-sm rounded-[48px] py-2 px-10 mt-4 h-14"
              >
                Accéder à l'accueil
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0
         sm:block"
      >
        <img src={eebleu} alt="ee-logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Success;
