import Card from "components/Card/Card";
import Input from "components/Input/Input";
import InputLabel from "components/InputLabel/InputLabel";
import Radio from "components/Radio/Radio";
import HorizontalInputLayout from "components/forms/Parametres/HorizontalInputLayout";
import { memo } from "react";
import { useForm } from "react-hook-form";

const UserInfo = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      type: "Société",
      firstname: "",
      lastname: "",
      email: "",
      codePostal: "",
      raisonSocial: "",
      siteInternet: "",
      username: "",
      adresse: "",
      ville: "",
      pays: "",
      activite: "",
      siret: "",
      numeroTVA: "",
      telephone: "",
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card extra="bg-white py-4 px-5 sm:py-5 sm:px-10 mt-8">
      <h2 className="text-main font-medium text-xl">Informations</h2>
      <form
        className="flex flex-col gap-y-3 mt-4"
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-x-12">
          <div className="flex gap-x-1 items-center">
            <Radio id="societe" {...register("type")} value="Société" />
            <label htmlFor="societe" className="cursor-pointer">
              Société
            </label>
          </div>
          <div className="flex gap-x-1 items-center">
            <Radio id="particulier" {...register("type")} value="Particulier" />
            <label htmlFor="particulier" className="cursor-pointer">
              Particulier
            </label>
          </div>
        </div>
        <HorizontalInputLayout>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="prenom">Prénom</InputLabel>
            <Input
              id="prenom"
              placeholder="Entrez votre prénom"
              autoComplete="given-name"
              {...register("firstname")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="nom">Nom</InputLabel>
            <Input
              id="nom"
              placeholder="Entrez votre nom"
              autoComplete="family-name"
              {...register("lastname")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <HorizontalInputLayout>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="activite">Activité</InputLabel>
            <Input
              id="activite"
              autoComplete="off"
              placeholder="Graphiste"
              {...register("activite")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="social">Raison sociale</InputLabel>
            <Input
              id="social"
              autoComplete="off"
              placeholder="Novaweb"
              {...register("raisonSociale")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="address">Adresse</InputLabel>
          <Input
            id="address"
            placeholder="Entrez votre adresse"
            autoComplete="off"
            {...register("adresse")}
            className="w-full"
          />
        </div>
        <HorizontalInputLayout>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="code-postal">Code postal</InputLabel>
            <Input
              id="code-postal"
              placeholder="69500"
              autoComplete="off"
              {...register("codePostal")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="ville">Ville</InputLabel>
            <Input
              id="ville"
              autoComplete="off"
              placeholder="Entrez votre ville"
              {...register("ville")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="pays">Pays</InputLabel>
          <Input
            id="pays"
            autoComplete="off"
            placeholder="Entrez votre pays"
            {...register("pays")}
            className="w-full"
          />
        </div>
        <HorizontalInputLayout>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="siret">Numéro de Siret</InputLabel>
            <Input
              id="siret"
              autoComplete="off"
              placeholder="XXXXXXXXXXXXXXX"
              {...register("siret")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="tva">Numéro de TVA</InputLabel>
            <Input
              id="tva"
              autoComplete="off"
              placeholder="XXXXXXXXXXXXXXX"
              {...register("numeroTVA")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <HorizontalInputLayout>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="telephone">Téléphone</InputLabel>
            <Input
              id="telephone"
              type="tel"
              placeholder="XXXXXXXXXXXXXXX"
              autoComplete="off"
              className="w-full"
              {...register("telephone")}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Entrez votre email"
              {...register("email")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <div>
          <InputLabel htmlFor="site">Site internet</InputLabel>
          <Input
            id="site"
            placeholder="XXXXXXXXXXXXXXX"
            autoComplete="url"
            {...register("siteInternet")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
          <Input
            id="username"
            placeholder="Entrez votre nom d'utilisateur"
            autoComplete="off"
            {...register("username")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="password">Nouveau de passe</InputLabel>
          <Input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="XXXXXXXXXXXXXXX"
            {...register("password")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="cpassword">Confirmer mot de passe</InputLabel>
          <Input
            id="cpassword"
            type="password"
            autoComplete="off"
            placeholder="XXXXXXXXXXXXXXX"
            {...register("confirm")}
            className="w-full"
          />
        </div>
        <div className="flex justify-center sm:justify-end">
          <button
            className="bg-main text-white rounded-[48px]
            active:scale-95 transition-all duration-200 h-14 w-64 my-4"
          >
            <p className="font-medium text-sm text-center">Modifier</p>
          </button>
        </div>
      </form>
    </Card>
  );
};

export default memo(UserInfo);
