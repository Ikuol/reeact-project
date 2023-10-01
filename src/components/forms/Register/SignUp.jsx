import { useCallback } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import InputError from "components/InputError/InputError";
import InputLabel from "components/InputLabel/InputLabel";
import Button from "components/Buttons/Button";
import Input from "components/Input/Input";

import google from "assets/socials/logo-google.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //Inscription avec google
  const onGoogleConnexion = useCallback(() => {}, []);

  // Soumission du formulaire d'inscription
  const onSubmit = (data) => {
    console.log(data);

    //Après soumissin du formulaire, aller sur la page pour les
    //étapes suivantes de l'inscription
    navigate("/register-steps");
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

      {/* Formulaire d'inscription */}
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="flex max-sm:flex-col justify-between
        max-sm:gap-y-4"
        >
          <div className="flex flex-col gap-y-2">
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input
              id="firstname"
              {...register("firstname", { required: true })}
              placeholder="Enter First Name"
              autoComplete="given-name"
              className="sm:w-[218px] h-12 pl-4 outline-none w-full"
            />
            {errors.firstname && <InputError message="Firstname is required" />}
          </div>
          <div className="flex flex-col gap-y-2">
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input
              id="lastname"
              {...register("lastname", { required: true })}
              placeholder="Enter Last Name"
              autoComplete="family-name"
              className="sm:w-[218px] h-12 pl-4 outline-none w-full"
            />
            {errors.lastname && <InputError message="Lastname is required" />}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            type="email"
            id="email"
            autoComplete="email"
            {...register("email", { required: true })}
            placeholder="Enter Email"
            className="sm:w-[452px] h-12 pl-4 outline-none w-full"
          />
          {errors.email && <InputError message="Email is required" />}
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            id="password"
            autoComplete="new-password"
            {...register("password", { required: true })}
            placeholder="Enter password"
            className="sm:w-[452px] h-12 pl-4 outline-none w-full"
          />
          {errors.password && <InputError message="Password is required" />}
        </div>
        <span className="flex items-center gap-x-4 mt-4">
          <input
            type="checkbox"
            id="checked"
            {...register("checked", { required: true })}
            className={`w-6 h-6 rounded-md form-checkbox cursor-pointer focus:ring-0 ${
              errors.checked ? "text-red border-red" : "text-primary"
            }`}
          />
          <InputLabel
            htmlFor="checked"
            className={`font-[400] text-[14px] cursor-pointer select-none ${
              errors.checked && "text-red"
            }`}
          >
            I agree to the Terms and Privacy Policy
          </InputLabel>
        </span>
        <Button
          type="submit"
          className="sm:w-[452px] h-12 rounded-[48px]
          text-white bg-main mb-4 mt-4 w-full"
        >
          Register
        </Button>
      </form>
      <span
        className="flex justify-center gap-x-2
         font-medium text-gray800 text-[14px]
         max-sm:mb-4"
      >
        <p>Already have an account ?</p>
        <Link to="/login" className="hover:underline">
          Log In
        </Link>
      </span>
    </div>
  );
};

export default SignUp;
