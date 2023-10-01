import React, { useState, useEffect } from "react";

const ProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < percentage) {
        setProgress(progress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress, percentage]);

  return (
    <div className="w-full bg-white60 rounded-full h-1.5 mb-4">
      <div
        className="bg-white h-1.5 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
