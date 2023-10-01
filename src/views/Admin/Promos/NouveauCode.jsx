import { useNavigate } from "react-router-dom";

import AddCodePromo from "components/forms/Code Promo/AddCodePromo";
import RightButton from "components/Buttons/RightButton";
import Container from "components/Container/Container";
import Card from "components/Card/Card";

import { IoArrowBack } from "react-icons/io5";

const NouveauCode = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/admin/codes-promos");
  };

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Codes Promos</p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <RightButton icon={<IoArrowBack />} text="Retour" onClick={goBack} />
      </Container>
      <Card extra="w-full pb-6 mt-8 mb-4 !bg-transparent">
        <AddCodePromo />
      </Card>
    </>
  );
};

export default NouveauCode;
