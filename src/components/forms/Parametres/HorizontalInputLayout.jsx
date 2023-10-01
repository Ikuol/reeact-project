const HorizontalInputLayout = ({ children }) => {
  return (
    <div
      className="flex gap-y-3 sm:flex-wrap gap-x-2
      flex-col justify-start sm:flex-row
      sm:justify-between"
    >
      {children}
    </div>
  );
};

export default HorizontalInputLayout;
