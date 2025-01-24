import React from 'react';

// Burda gelen page bilgisine göre pozisyonlarını değiştiriyoruz
const Ellipses = ({ page }) => {
  return (
    <div className="fixed -z-20">
      <div
        className={`absolute transition-all duration-500 ${
          page === 1 ? "-left-24 top-28" : "left-60 top-24"
        } w-56 h-56  blur-2xl bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(64,_123,_255,_0.4)_0%,_rgba(64,_221,_255,_0.4)_100%)]`}
      ></div>
      <div
        className={`absolute w-52 h-52 transition-all duration-500 ${
          page === 1 ? "left-48 top-72" : "left-52 top-[686px]"
        } blur-2xl bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(167,_233,_84,_0.4)_0%,_rgba(255,_213,_64,_0.4)_100%)]`}
      ></div>
      <div
        className={`fixed w-60 h-60 transition-all duration-500 ${
          page === 1 ? "-left-16 top-[630px]" : "-left-28 top-52"
        } blur-2xl bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(214,_255,_250,_0.4)_0%,_rgba(167,_233,_84,_0.4)_100%)]`}
      ></div>
    </div>
  );
};

export default Ellipses; 