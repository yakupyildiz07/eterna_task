import React from "react";

const HomePageContent = () => {
  return (
    <div className="px-4 relative flex flex-col gap-2 z-10">
      <div className="bg-[#4CD080] flex justify-between items-center mt-4 py-8 px-4 text-white h-[10vh] rounded-md">
        <div className="flex flex-col items-center space-x-2">
          <img src="/home/plus.svg" alt="Lider Tablosu" className="w-8 h-8 cursor-pointer" />
          <p className="text-sm font-medium mt-2">Bakiye Yükle</p>
        </div>

        <div
          className="w-[1px] h-[57px] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div className="flex flex-col items-center space-x-2">
          <img src="/home/rocket.svg" alt="Lider Tablosu" className="w-7 h-7 cursor-pointer" />
          <p className="text-sm font-medium mt-2">Beni Öne Çıkar</p>
        </div>

        <div
          className="w-[1px] h-[57px] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div className="flex flex-col items-center space-x-2">
          <img
            src="/home/bag.svg"
            alt="Lider Tablosu"
            className="w-[33.75px] h-[30px] cursor-pointer"
          />
          <p className="text-sm font-medium mt-2">Acil İş Ver</p>
        </div>
      </div>
      <div className="bg-[#105D38] p-4 rounded-md">
        <div>
          <div className="flex justify-between items-start">
            <p className="text-sm font-semibold text-[#E0E0E0]">
              Referans Gelirleri
            </p>
            <img
              src="/home/calendar.svg"
              alt="calendar"
              width={60}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <div className="text-2xl font-bold">0,00 TL</div>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-sm font-light text-[#E0E0E0] pr-10">
            Hemen referans vererek ömür boyu düzenli gelir kazan!
          </p>
          <button className="flex items-center border border-[#4CD080] rounded p-1 min-w-max bg-[rgba(76,_208,_128,_0.08)]">
            <p className="text-[#4CD080] text-xs font-medium pr-2">
              Referans Ver
            </p>
            <img src="/home/letter.svg" alt="letter" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-10 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] rounded-l-md">
        <div className="col-span-2 bg-[#0F5332] rounded-l-md text-sm font-medium text-white py-3 px-4">
          Aktif
        </div>
        <div className="col-span-8 text-[#0F5332] text-[10px] py-3 px-2">
          Her şey yolunda, aktif durumdasınız ve iş almaya hazırsınız!
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 ">
        <div className="col-span-3 bg-[rgba(255,_188,_68,_0.12)] rounded-md">
          <div className="flex items-center justify-between p-2 ">
            <p className="text-[#FFBC44] text-xs font-medium">İşe Ara Ver</p>
            <img src="/home/pause.svg" alt="pause" color="#FFBC44" className="cursor-pointer"/>
          </div>
        </div>
        <div className="col-span-7 bg-[rgba(76,_208,_128,_0.12)] rounded-md">
          <div className="flex items-center justify-evenly mt-2">
            <p className="text-xs font-medium text-[#4CD080]">
              Toplam Kazancım
            </p>
            <img src="/home/money.svg" alt="money" color="#4CD080" />
            <p className="text-[10px] font-semibold text-[#0F5332]">
              10.500 TL
            </p>
          </div>
        </div>
      </div>
      <div className=" slide-in bg-[rgba(76,_208,_128,_0.12)] flex p-2 rounded-md items-center justify-between transform transition-transform duration-500 ease-in translate-x-full opacity-0">
        <p className="text-xs font-medium text-[#4CD080]">
          Bizi Onlardan Dinleyin
        </p>
        <div className="flex gap-2">
          <img
            src="/home/ref1.jpeg"
            alt="ref1"
            className="border border-white rounded-full w-[33px] h-[33px]"
          />
          <img
            src="/home/ref2.jpeg"
            alt="ref2"
            className="border border-white rounded-full w-[33px] h-[33px]"
          />
          <img
            src="/home/ref3.jpeg"
            alt="ref3"
            className="border border-white rounded-full w-[33px] h-[33px]"
          />
          <img
            src="/home/ref4.jpeg"
            alt="ref4"
            className="border border-white rounded-full w-[33px] h-[33px]"
          />
        </div>
        <img src="/home/next.svg" alt="next" />
      </div>
    </div>
  );
};
export default HomePageContent;
