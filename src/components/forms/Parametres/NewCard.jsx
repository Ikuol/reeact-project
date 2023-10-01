import Input from "components/Input/Input";
import HorizontalInputLayout from "./HorizontalInputLayout";
import { memo } from "react";
import { useForm } from "react-hook-form";
import InputLabel from "components/InputLabel/InputLabel";

const NewCard = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-y-3 mt-4"
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HorizontalInputLayout>
        <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
          <InputLabel htmlFor="carte">Numéro de carte</InputLabel>
          <Input
            id="carte"
            autoComplete="off"
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
          <InputLabel htmlFor="titulaire">Nom du titulaire</InputLabel>
          <Input
            id="titulaire"
            autoComplete="off"
            placeholder="Nom du titulaire"
            {...register("name")}
            className="w-full"
          />
        </div>
      </HorizontalInputLayout>
      <HorizontalInputLayout>
        <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
          <InputLabel htmlFor="expiration">Date d'expiration</InputLabel>
          <Input
            id="expiration"
            autoComplete="off"
            placeholder="MM/AA"
            {...register("expired_at")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
          <InputLabel htmlFor="cvc">CVC</InputLabel>
          <Input
            id="cvc"
            autoComplete="off"
            placeholder="xxx"
            extra="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            maxLength={3}
            {...register("cvc")}
            className="w-full"
          />
        </div>
      </HorizontalInputLayout>
      <div className="flex justify-center sm:justify-end mt-4">
        <button
          className="bg-main text-white rounded-[48px]
            active:scale-95 transition-all duration-200 h-14 w-64"
        >
          <p className="font-medium text-sm text-center">Valider</p>
        </button>
      </div>
    </form>
  );
};

export default memo(NewCard);
