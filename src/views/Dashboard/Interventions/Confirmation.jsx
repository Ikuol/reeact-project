import { Link } from "react-router-dom";

import eebleu from "assets/ee-bleu.png";
import logo from "assets/logoblue.png";

const Confirmation = () => {
  return (
    <div
      className="flex items-center
    bg-gray100 flex-col relative min-h-screen"
    >
      <div className="bg-white rounded-xl p-5 mt-10 sm:mt-20 z-10 mx-1">
        <div className="flex justify-center">
          <img src={logo} alt="react-blue" className="lg:w-72 w-60 h-fit" />
        </div>
        <h1 className="text-[66px] font-semibold text-primary text-center my-2">
          Merci !
        </h1>
        <div className="text-primary text-[18px] font-normal">
          <p>Votre devis à bien été payé.</p>
          <p>Il est maintenant en cours de traitement par nos services.</p>
          <p>
            Nous ne manquerons pas de vous informer de l'évolution de votre
            demande.
          </p>
          <p>Cordialement</p>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button
              className="active:scale-[.98] bg-primary text-white
            text-sm rounded-[48px] py-2 px-10 mt-4"
            >
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={eebleu}
          alt="ee-logo"
          className="w-2/3 h-2/3 sm:w-full sm:h-full"
        />
      </div>
    </div>
  );
};

export default Confirmation;
