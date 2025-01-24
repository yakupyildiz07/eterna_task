import React from "react";

const StatusBar = () => {
  return (
    <div className="relative top-0 flex items-center justify-between pl-10 pr-3 py-4 w-full z-50">
      <div>
        <img src="/clock.svg" alt="clock" />
      </div>
      <div>
        <img src="/status.svg" alt="status" />
      </div>
    </div>
  );
};

export default StatusBar;
