import React from "react";

const HomePageHeader = () => {
  return (
    <div className="z-10 relative ">
      <div className="flex justify-between items-end px-4 ">
        <div className="rounded-md bg-white w-10 h-10">
          <img src="/logo.png" alt="logo" className="scale-125 pt-2 cursor-pointer" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 border-2 border-[rgba(255,_255,_255,_0.1)] rounded-xl">
            <img
              src="/home/support.svg"
              alt="support"
              className="m-auto pt-1 cursor-pointer"
            />
          </div>
          <div className="relative w-8 h-8 border-2 border-[rgba(255,_255,_255,_0.1)] rounded-xl">
            <img
              src="/home/notification.svg"
              alt="notification"
              className="m-auto pt-1 cursor-pointer"
            />
            <span className="absolute -top-[8px] -right-[6px] bg-[#FF9500] text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
              216
            </span>
          </div>
          <div className="w-8 h-8 border-2 border-[rgba(255,_255,_255,_0.1)] rounded-xl">
            <img
              src="/home/setting.svg"
              alt="setting"
              className="m-auto pt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="z-10 bg-[#4CD080] flex justify-between items-center mt-4 px-3 py-4 text-white h-[10vh]">
        <div className="flex flex-col items-center space-x-2">
          <span className="text-xs">Lider Tablosu</span>
          <img
            src="/home/leaderboard.svg"
            alt="Lider Tablosu"
            className="w-6 h-6 mt-1 cursor-pointer"
          />
        </div>

        <div
          className="w-[1.09px] h-[57px] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div className="text-center">
          <p className="text-xs">Puanım</p>
          <p className="text-sm font-semibold mt-1">47.953</p>
        </div>

        <div
          className="w-[1.09px] h-[57px] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div className="text-center">
          <p className="text-xs">İndirim Oranım</p>
          <p className="text-sm font-semibold mt-1">% 0</p>
        </div>

        <div
          className="w-[1.09px] h-[57px] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div className="text-center">
          <p className="text-xs">Bakiyem</p>
          <p className="text-sm font-semibold mt-1">₺ 49.579</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
