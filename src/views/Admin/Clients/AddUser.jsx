import Container from "components/Container/Container";
import NewClient from "components/forms/Clients/NewClient";

const AddUser = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Ajouter un utilisateur
          </p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>

      <NewClient />
    </>
  );
};

export default AddUser;
