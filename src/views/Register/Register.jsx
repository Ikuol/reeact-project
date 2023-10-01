import SignUp from "components/forms/Register/SignUp";

import logo from "assets/logoblue.png";
import eebleu from "assets/ee-bleu.png";

const Register = () => {
  return (
    <div
      className="flex relative min-h-screen
      max-sm:justify-center"
    >
      <div
        className="w-[50%] hidden
        bg-gray100 sm:block relative
        "
      >
        <img
          src={logo}
          alt="reeact-blue"
          className="w-1/2 h-fit m-auto
          mt-48"
        />
      </div>
      <div
        className="flex max-md:flex-col justify-center items-center
        lg:w-[50%]"
      >
        <span>
          <img
            src={logo}
            alt="logo"
            className="w-9/12 h-fit m-auto
            hidden max-sm:block"
          />
        </span>

        {/* Le composant qui contient le formulaire d'inscription  */}
        <SignUp />
      </div>
      <div
        className="absolute bottom-0 hidden
         sm:block"
      >
        <img src={eebleu} alt="ee-logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Register;
