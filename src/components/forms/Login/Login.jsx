import { useCallback } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import InputError from "components/InputError/InputError";
import InputLabel from "components/InputLabel/InputLabel";
import Button from "components/Buttons/Button";
import Input from "components/Input/Input";

import google from "assets/socials/logo-google.svg";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Connexion avec google
  const onGoogleConnexion = useCallback(() => {}, []);

  // Soumission du formulaire de connexion
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-y-2 max-sm:pt-8">
      <div className="flex flex-col gap-y-2">
        <h2
          className="font-bold text-main
          sm:text-3xl text-2xl"
        >
          Welcome to Reeact!
        </h2>
        <p
          className="font-medium sm:text-xl
        text-gray800"
        >
          Connectez vous à votre compte
        </p>
      </div>
      <button
        onClick={onGoogleConnexion}
        className="flex sm:w-[452px] h-12 border
        rounded-[48px] items-center justify-center
        gap-x-4 w-full border-gray-300"
      >
        <img src={google} alt="google-logo" className="w-6 h-8" />
        <p className="text-main text-[14px]">Se connecter avec Google</p>
      </button>
      <p className="text-gray600 text-[14px]">
        or use your email for registration
      </p>

      {/* Formulaire de connexion */}
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Enter Email"
            autoComplete="email"
            className="sm:w-[452px] h-12 pl-4
            outline-none w-full"
          />
          {errors.email && <InputError message="Email is required" />}
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Enter password"
            autoComplete="new-password"
            className="sm:w-[452px] h-12 pl-4
            outline-none w-full"
          />
          {errors.password && <InputError message="Password is required" />}
        </div>
        <Button
          type="submit"
          className="sm:w-[452px] h-12 rounded-[48px]
          text-white bg-main mb-4 mt-4 w-full"
        >
          Login
        </Button>
        <Link
          to="#"
          className="text-gray800 text-center
        text-[14px] font-medium"
        >
          Mot de passe oublié ?
        </Link>
      </form>
      <span
        className="flex justify-center gap-x-2
        font-medium text-gray800 text-[14px]"
      >
        <p>Vous n'avez pas encore de compte ?</p>
        <Link to="/register" className="hover:underline">
          S'inscrire
        </Link>
      </span>
    </div>
  );
};

export default SignIn;
