import { useNavigate } from "react-router-dom";

import Messagerie from "components/forms/Messagerie/Messagerie";
import RightButton from "components/Buttons/RightButton";
import Container from "components/Container/Container";
import Card from "components/Card/Card";

const NouveauMessageAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Messagerie</p>
          <p className="text-secondary hidden md:block text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <RightButton
          text="Boîte de réception"
          onClick={() => navigate("/admin/messagerie")}
        />
      </Container>
      <Card extra={"w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent"}>
        <div className="mx-auto w-full">
          {/* Formulaire pour envoyer un message */}
          <Messagerie />
        </div>
      </Card>
    </>
  );
};

export default NouveauMessageAdmin;
