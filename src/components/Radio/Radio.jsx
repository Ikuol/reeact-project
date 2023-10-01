import { forwardRef, memo, useRef } from "react";

const Radio = forwardRef(({ value, checked, onChange, ...rest }, ref) => {
  const innerRef = useRef();
  const input = ref ? ref : innerRef;

  return (
    <div className="flex items-center">
      <input
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
        className="w-4 h-4 bg-gray-100
        focus:bg-gray-500 focus:ring-0
        cursor-pointer text-gray-600 outline-none
        focus:border-gray-700 border"
        ref={input}
        {...rest}
      />
    </div>
  );
});

export default memo(Radio);
