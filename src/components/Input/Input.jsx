import { forwardRef, memo, useRef } from "react";

const Input = forwardRef(function (
  { type = "text", className = "", ...rest },
  ref
) {
  const innerRef = useRef(null);

  const input = ref || innerRef;
  return (
    <div className="w-full">
      <input
        type={type}
        className={`rounded-[100px] h-10 border border-gray300
        focus:ring-0 bg-white focus:border-gray-400 ${className}`}
        {...rest}
        ref={input}
      />
    </div>
  );
});

export default memo(Input);
