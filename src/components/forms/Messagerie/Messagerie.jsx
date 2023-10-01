import UploadFile from "components/UploadFile/UploadFile";

const Messagerie = () => {
  return (
    <div
      className="w-full flex flex-col rounded-[20px] h-auto
      p-8 bg-white gap-y-4"
    >
      <h2 className="text-main font-semibold md:text-2xl text-xl">
        Nouveau message
      </h2>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="analyse" className="text-main text-sm font-normal">
            Sélection analyse
          </label>
          <select
            className="block h-12 w-full p-2.5 rounded-[100px] text-main
          border border-gray-300 focus:ring-0 focus:border-gray-400
          text-sm font-normal"
          >
            <option>Support client inexistant chez Nike</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="analyse" className="text-main text-sm font-normal">
            Objet du message
          </label>
          <select
            className="block h-12 w-full p-2.5 rounded-[100px] text-main
          border border-gray-300 focus:ring-0 focus:border-gray-400
          text-sm font-normal"
          >
            <option>Problème technique</option>
          </select>
        </div>
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
        <div className="flex flex-col gap-y-2">
          <label htmlFor="analyse" className="text-main text-sm">
            Pièce jointe
          </label>
          <UploadFile />
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="flex items-center justify-center
            bg-main text-white w-52 h-11 rounded-[100px]"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Messagerie;
