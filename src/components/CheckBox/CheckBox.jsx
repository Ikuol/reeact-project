const CheckBox = ({ onChange, checked, extra }) => {
  return (
    <>
      <input
        type="checkbox"
        className={`w-4 h-4 text-primary cursor-pointer
        focus:ring-0 rounded ${extra}`}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
};

export default CheckBox;
