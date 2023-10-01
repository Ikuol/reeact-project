import AdminInfo from "components/forms/Parametres Admin/AdminInfo";
import Container from "components/Container/Container";
import Card from "components/Card/Card";

const BackParametres = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Paramètres</p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>
      <Card extra="w-full p-3 mt-6 mb-8">
        <AdminInfo />
      </Card>
    </>
  );
};

export default BackParametres;
