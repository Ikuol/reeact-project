import React, { memo } from "react";

const Container = ({ children, extra }) => {
  return (
    <div
      className={`flex max-sm:flex-col max-sm:gap-y-2
      sm:items-center sm:justify-between ${extra ?? ""}`}
    >
      {children}
    </div>
  );
};

export default memo(Container);
