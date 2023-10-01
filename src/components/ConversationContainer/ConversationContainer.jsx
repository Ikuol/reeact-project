const ConversationContainer = ({ sujet, children }) => {
  return (
    <div
      className="w-full flex flex-col rounded-[20px] h-auto
      p-8 bg-white gap-y-8"
    >
      <h2
        className="text-main font-semibold md:text-2xl
      text-xl"
      >
        {sujet}
      </h2>
      {children}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="analyse" className="text-main text-sm font-normal">
          Message
        </label>
        <textarea
          rows={5}
          className="block p-2.5 w-full text-sm rounded-[20px] text-main
            border border-gray-300 focus:ring-0 focus:border-gray-400"
          placeholder="Enter message"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="flex items-center justify-center
            bg-main text-white w-52 h-11 rounded-[100px]"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ConversationContainer;
