const StepsButton = ({ extra, onClick, textColor, children }) => {
  return (
    <button
      onClick={onClick}
      className={`md:w-[250px] w-[120px] h-14 rounded-[100px] active:scale-95
      transition-all duration-200 ${extra ?? ""} border-none shadow-md`}
    >
      <p className={`${textColor ?? ""} text-xs font-medium`}>{children}</p>
    </button>
  );
};

export default StepsButton;
