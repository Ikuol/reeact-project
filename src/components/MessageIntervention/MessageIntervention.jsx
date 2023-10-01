const MessageIntervention = ({ message, origin }) => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <p className="font-semibold text-sm">{origin}</p>
      <p className="font-normal text-sm">{message}</p>
    </div>
  );
};

export default MessageIntervention;
