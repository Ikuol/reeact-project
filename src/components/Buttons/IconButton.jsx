const IconButton = ({ icon, className }) => {
  return (
    <button className="shadow-md rounded-full h-[40px] w-[40px] bg-primary/5 flex items-center justify-center mb-4 active:scale-95">
      <div className={`rounded-full p-2 ${className}`}>{icon}</div>
    </button>
  );
};

export default IconButton;
