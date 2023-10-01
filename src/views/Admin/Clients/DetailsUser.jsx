import Container from "components/Container/Container";
import { FcGoogle } from "react-icons/fc";
import avatar from "assets/avatars/men.png";
import Card from "components/Card/Card";
import HorizontalInputLayout from "components/forms/Parametres/HorizontalInputLayout";

const DetailsUser = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Détails utilisateur
          </p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>
      <Card extra="w-full mt-8 mb-8">
        <div
          className="flex w-full bg-white rounded-[20px] pt-8 md:px-16
          justify-center pb-8 px-4"
        >
          <div className="flex w-full flex-col gap-y-10">
            <div className="flex justify-between">
              <div className="flex gap-x-4 items-center">
                <span className="flex">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </span>
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold text-sm text-main">
                    Nicolas Brissaud
                  </p>
                  <p className="font-normal text-main text-sm">Abonné</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 md:mr-14">
                <p className="text-green text-sm font-semibold">Actif</p>
                <p className="font-normal text-sm text-main">29€ + 15€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-2 md:ml-14">
                <p className="font-semibold text-sm text-main">Mots clés</p>
                <p className="font-normal text-main text-sm">
                  Novaweb, graphiste
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-semibold text-sm text-main">
                  Moteurs/Réseaux
                </p>
                <FcGoogle size={20} />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card extra="bg-white py-4 px-5 sm:py-5 sm:px-10 my-8 ">
        <h2 className="text-main font-medium text-xl">Informations</h2>
        <div className="flex flex-col gap-y-3 mt-3">
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="activite">
                Activité
              </span>
              <span className="text-sm font-normal">Graphiste</span>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="social">
                Raison sociale
              </span>
              <span className="text-sm font-normal">Novaweb</span>
            </div>
          </HorizontalInputLayout>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold text-sm" htmlFor="address">
              Adresse
            </span>
            <span className="text-sm font-normal">Rue Adresse</span>
          </div>
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="code-postal">
                Code postal
              </span>
              <span className="text-sm font-normal">4444</span>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="ville">
                Ville
              </span>
              <span className="text-sm font-normal">Ville</span>
            </div>
          </HorizontalInputLayout>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold text-sm" htmlFor="pays">
              Pays
            </span>
            <span className="text-sm font-normal">France</span>
          </div>
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="siret">
                Numéro de Siret
              </span>
              <span className="text-sm font-normal">xxxxxxxxxx</span>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="tva">
                Numéro de TVA
              </span>
              <span className="text-sm font-normal">xxxxxxxxxx</span>
            </div>
          </HorizontalInputLayout>
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="telephone">
                Téléphone
              </span>
              <span className="text-sm font-normal">33 254 885 4412 </span>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <span className="font-semibold text-sm" htmlFor="email">
                Email
              </span>
              <span className="text-sm font-normal">email@gmail.com</span>
            </div>
          </HorizontalInputLayout>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold text-sm" htmlFor="site">
              Site internet
            </span>
            <span className="text-sm font-normal">monsite.com</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold text-sm" htmlFor="username">
              Nom d'utilisateur
            </span>
            <span className="text-sm font-normal">user26</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DetailsUser;
