import Container from "components/Container/Container";
import Card from "components/Card/Card";
import DisplayMessage from "components/DisplayMessage/DisplayMessage";
import ConversationContainer from "components/ConversationContainer/ConversationContainer";
import RightButton from "components/Buttons/RightButton";

import { conversations } from "constants/Conversations";
import { useNavigate } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";

const DetailsMessagesAdmin = () => {
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
          icon={<IoArrowBack />}
          text="Retour"
          onClick={() => navigate("/admin/messagerie")}
        />
      </Container>
      <Card extra={"w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent"}>
        <ConversationContainer sujet="Support client inexistant chez Nike">
          {conversations.map((conversation) => (
            <DisplayMessage key={conversation.id} {...conversation} />
          ))}
        </ConversationContainer>
      </Card>
    </>
  );
};

export default DetailsMessagesAdmin;
