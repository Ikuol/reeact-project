const Toggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-11 h-6 bg-gray-300 peer-focus:outline-none
      rounded-full peer peer-checked:after:translate-x-full
      after:content-[''] after:absolute after:top-[2px]
      after:left-[2px] after:bg-white after:border-gray-300
      after:border after:rounded-full after:h-5 after:w-5
      after:transition-all peer-checked:bg-gray-600"
      ></div>
    </label>
  );
};

export default Toggle;
