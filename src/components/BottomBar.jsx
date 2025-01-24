import React from "react";

//mevcut sayfa bilgisine göre barın rengini değiştiriyoruz
const BottomBar = ({ current }) => {
  const color = current === "getStarted" ? "#FFFFFF" : "#E0E0E0";
  return (
    <div className="w-full absolute bottom-0 flex justify-center py-3 z-50">
      <svg
        width="135"
        height="4"
        viewBox="0 0 135 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="134" height="4" rx="2" fill={color} />
      </svg>
    </div>
  );
};

export default BottomBar;
