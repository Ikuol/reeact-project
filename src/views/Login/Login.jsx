import SignIn from "components/forms/Login/Login";

import logowhite from "assets/logowhite.png";
import logoblue from "assets/logoblue.png";
import ee from "assets/ee.png";

const Login = () => {
  return (
    <div
      className="flex relative min-h-screen
    max-sm:justify-center"
    >
      <div
        className="w-[50%] hidden
        bg-main sm:block relative"
      >
        <img
          src={logowhite}
          alt=""
          className="w-1/2 h-fit m-auto
          mt-48"
        />
      </div>
      <div
        className="flex max-md:flex-col justify-center
        items-center lg:w-[50%]"
      >
        <span>
          <img
            src={logoblue}
            alt="logo"
            className="w-9/12 h-fit m-auto
          hidden max-sm:block"
          />
        </span>
        <SignIn />
      </div>
      <div
        className="absolute bottom-0 hidden
        sm:block"
      >
        <img src={ee} alt="ee-logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
