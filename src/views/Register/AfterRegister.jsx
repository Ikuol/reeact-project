import RegisterSteps from "components/forms/RegisterSteps/RegisterSteps";

import logo from "assets/logoblue.png";
import eebleu from "assets/ee-bleu.png";

const AfterRegister = () => {
  return (
    <div
      className="flex relative min-h-screen
    max-sm:justify-center bg-gray100 flex-col"
    >
      <div className="flex m-auto md:mt-12 mt-6">
        <img
          src={logo}
          alt="reeact-blue"
          className="md:w-1/3 w-1/2 h-fit m-auto"
        />
      </div>
      <div
        className="flex m-auto justify-center md:px-48
      md:w-3/4 mt-12"
      >
        <RegisterSteps />
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

export default AfterRegister;
