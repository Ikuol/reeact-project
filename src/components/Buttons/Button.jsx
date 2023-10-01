const Button = ({ text, children, className = "", ...props }) => {
  return (
    <button
      className={`active:scale-[.98] transition-all duration-200 ${className}`}
      {...props}
    >
      {text || children}
    </button>
  );
};

export default Button;
