import React from 'react';
import ChooseDistrict from "./ChooseDistrict";
import ChooseWorkDay from "./ChooseWorkDay";
import { useNavigate } from 'react-router-dom';

const MainContent = ({ page, setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-20 px-6 justify-center items-center">
      {/* logo */}
      <div className="rounded-3xl bg-white w-[120px] h-[120px]">
        <img src="/logo.png" alt="logo" className="scale-125 pt-5" />
      </div>
      {/* açıklama */}
      <div className="text-center text-white py-10 transition-all duration-500">
        {page === 1 ? (
          <p className="text-base ">
            Lütfen hizmet verdiğiniz ilçe veya ilçeleri seçiniz. Şehir
            merkezinde olmayan ilçelerin fiyatları %90'a kadar daha ucuz.
          </p>
        ) : (
          <p className="text-base">
            Lütfen çalışma saatlerinizi girin. Çalışma saatlerinizi hesap
            oluşturduktan sonra detaylı bir şekilde düzenleyebilirsiniz.
          </p>
        )}
      </div>
      {/* ilk sayfada ilçe seçimi diğer sayfalarda çalışma zamanı seçimi */}
      {page === 1 ? (
        <ChooseDistrict />
      ) : (
        <ChooseWorkDay page={page} setPage={setPage} />
      )}
      {/* ileri ve geri butonları */}
      <div className="fixed w-full bottom-14 flex justify-between px-6">
        <button
          onClick={() => setPage((i) => i - 1)}
          className="flex items-center"
        >
          <div className={`${page === 1 ? "hidden" : "block"} rotate-90 text-white`}>
            <img src="/getStarted/back.svg" alt="back" color="white" />
          </div>
          <span
            className={`${
              page === 1 ? "hidden" : "block"
            } ml-2 text-base font-normal text-white`}
          >
            Geri
          </span>
        </button>
          {/* seçim bitince anasayfaya yönlendirme */}
          <button
            onClick={() => {
              if (page === 3) {
                navigate("/home") ;
              } else {
                setPage((i) => i + 1);
              }
            }}
            className="w-[138px] h-[53] flex items-center justify-between rounded-md p-2 bg-[rgba(71,_115,_77,_0.85)]"
          >
            <div className="pl-3 text-2xl font-semibold text-white">
              {page === 3 ? "Bitti" : "İleri"}
            </div>
            <div className="border-2 border-[rgba(255,_255,_255,_0.1)] rounded-lg w-8 h-9 flex items-center justify-center -rotate-90" >
              <img src="/getStarted/back.svg" alt="next" color='white'/>
            </div>
          </button>
        
      </div>
    </div>
  );
};

export default MainContent; 