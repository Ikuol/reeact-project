import HorizontalInputLayout from "../Parametres/HorizontalInputLayout";
import InputLabel from "components/InputLabel/InputLabel";
import Input from "components/Input/Input";
import Radio from "components/Radio/Radio";

const Step1 = ({ register, watch }) => {
  const selected = watch("type");

  return (
    <div className="flex flex-col gap-y-3">
      <form className="flex flex-col gap-y-6 mt-4">
        <h2 className="text-main font-medium text-xl">Informations</h2>
        <div className="flex gap-x-16">
          <label className="flex gap-x-6 cursor-pointer">
            <Radio id="societe" {...register("type")} value="Société" />
            <p className="text-sm text-main font-medium">Société</p>
          </label>
          <label className="flex gap-x-6 cursor-pointer">
            <Radio id="particulier" {...register("type")} value="Particulier" />
            <p className="text-sm text-main font-medium">Particulier</p>
          </label>
        </div>
        <HorizontalInputLayout>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="prenom">Prénom</InputLabel>
            <Input
              id="prenom"
              placeholder="Gui"
              autoComplete="given-name"
              {...register("firstname")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="nom">Nom</InputLabel>
            <Input
              id="nom"
              placeholder="Martin"
              autoComplete="family-name"
              {...register("lastname")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        {selected === "Société" && (
          <>
            <HorizontalInputLayout>
              <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
                <InputLabel htmlFor="social">Raison sociale</InputLabel>
                <Input
                  id="social"
                  autoComplete="off"
                  {...register("raisonSociale")}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
                <InputLabel htmlFor="activite">Activité</InputLabel>
                <Input
                  id="activite"
                  autoComplete="off"
                  {...register("activite")}
                  className="w-full"
                />
              </div>
            </HorizontalInputLayout>
            <HorizontalInputLayout>
              <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
                <InputLabel htmlFor="siret">Numéro de Siret</InputLabel>
                <Input
                  id="siret"
                  autoComplete="off"
                  {...register("siret")}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
                <InputLabel htmlFor="tva">Numéro de TVA</InputLabel>
                <Input
                  id="tva"
                  autoComplete="off"
                  {...register("numeroTVA")}
                  className="w-full"
                />
              </div>
            </HorizontalInputLayout>
          </>
        )}
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="address">Adresse</InputLabel>
          <Input
            id="address"
            autoComplete="off"
            {...register("adresse")}
            className="w-full"
          />
        </div>
        <HorizontalInputLayout>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="code-postal">Code postal</InputLabel>
            <Input
              id="code-postal"
              type="text"
              autoComplete="off"
              {...register("codePostal")}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="ville">Ville</InputLabel>
            <Input
              id="ville"
              autoComplete="off"
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
            {...register("pays")}
            className="w-full"
          />
        </div>

        <HorizontalInputLayout>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="telephone">Téléphone</InputLabel>
            <Input
              id="telephone"
              type="tel"
              autoComplete="off"
              className="w-full"
              {...register("telephone")}
            />
          </div>
          <div className="flex flex-col w-full sm:w-[45%] gap-y-2">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="email@email.com"
              {...register("email")}
              className="w-full"
            />
          </div>
        </HorizontalInputLayout>
        <div>
          <InputLabel htmlFor="site">{`Site internet ${
            selected === "Particulier" ? "(facultatif)" : ""
          }`}</InputLabel>
          <Input
            id="site"
            autoComplete="url"
            {...register("siteInternet")}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-main font-medium text-xl">
            Votre mot clé/url pour analyse
          </h2>
          <div>
            <InputLabel htmlFor="mot">Mot clé/url</InputLabel>
            <Input
              id="mot"
              autoComplete="url"
              {...register("url")}
              className="w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
