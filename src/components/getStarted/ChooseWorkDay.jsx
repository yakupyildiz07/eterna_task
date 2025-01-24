import React, { useState, useEffect } from "react";
const Dropdown = ({ label, options, selected, onSelect, hasSearch }) => {
  //dropdownda kullanmak üzere proplar tanımlıyoruz
  const [isOpen, setIsOpen] = useState(true); //seçeneklerin açık veya kapalı olmasını tutan state
  const [searchTerm, setSearchTerm] = useState(""); //aramada yazdığımız metni tutan state

  //arama kısmına yazdıklarımızı harf harf saklıyoruz
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //mevcut günler bizim yazdığımızı içeriyosa eşliyoruz
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-sm"
      >
        {/* seçili olanları gösteriyoruz */}
        {selected}
        {!isOpen ? (
          <img
            src="/getStarted/sharpUp.svg"
            alt="down"
            color="#484848"
            className="rotate-180"
          />
        ) : (
          <img src="/getStarted/sharpUp.svg" alt="up" color="#484848" />
        )}
      </button>
      {/* seçenekleri listelemek için  */}
      {isOpen && (
        <div className="bg-white border rounded mt-1 w-full h-72 short:h-40 z-10 text-[#262527] overflow-auto p-1 shortDays">
          {/* sadece gün kısmında arama olması için */}
          {hasSearch && (
            <input
              type="text"
              placeholder="Ara"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full text-[#262527] placeholder-[#5A5D6C] outline-none text-sm rounded-md p-2 border "
            />
          )}
          
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={`flex justify-between items-center rounded-md p-2 mt-1 hover:bg-gray-100 cursor-pointer ${
                selected === option
                  ? "bg-green-100 font-bold border border-[#07B464]"
                  : ""
              }`}
            >
              {option}
              {selected === option && (
                <img src="/getStarted/check.svg" alt="check" color="#07B464" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ChooseWorkDay = ({ page, setPage }) => {
  const [selectedDay, setSelectedDay] = useState("Gün"); //seçili günü tuttuğumuz state
  const [selectedStart, setSelectedStart] = useState("Başlangıç"); //seçili başlangıç saatini tuttuğumuz state
  const [selectedEnd, setSelectedEnd] = useState("Bitiş"); //seçili btiş saatini tuttuğumuz state
  const [day, setDay] = useState([]); // tüm günleri tuttuğumuz state
  const [start, setStart] = useState([]); //tüm saatleri tuttuğumuz state
  const [end, setEnd] = useState([]); //tüm saatleri tuttuğumuz state
  const [choosedWork, setChoosedWork] = useState([]); //seçilen günü,başlangıç saatini ve bitiş saatini tuttuğumuz state
  const [animating, setAnimating] = useState(true); // animasyonun çalışmasını belirlediğimiz state

  //gün ve saat bilgilerini alma ve set etme
  useEffect(() => {
    const fetchData = async () => {
      try {
        const days = await import("../../services/days");
        setDay(days.days);
        setStart(days.startTime);
        setEnd(days.endTime);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //yeni çalışma günü ve saati seçimi aynı plandan daha önce eklendiyse seçim yapılmıyor farklıysa kaydediliyor
  useEffect(() => {
    if (
      selectedDay !== "Gün" &&
      selectedStart !== "Başlangıç" &&
      selectedEnd !== "Bitiş" &&
      page === 3
    ) {
      const newWorkDay = {
        day: selectedDay,
        start: selectedStart,
        end: selectedEnd,
      };
      const isDuplicate = choosedWork.some(
        (work) =>
          work.day === newWorkDay.day &&
          work.start === newWorkDay.start &&
          work.end === newWorkDay.end
      );

      if (!isDuplicate) {
        setChoosedWork((prev) => [...prev, newWorkDay]);
      }
    }
    setAnimating(!animating); //Her sayfa değişiminde sayfa animasyonu durumunu değiştir
  }, [page]);

  //seçili günü listeden silme fonksiyonu
  const handleRemoveWorkDay = (key) => {
    setChoosedWork((prev) => prev.filter((item, i) => i !== key));
  };

  return (
    <div className="w-full">
      {/* animating değerine göre animasyon çalışsın */}
      <div className={`${animating ? "shrink-and-fade absolute" : ""}`}>
        {/* Gün,başlangıç saati ve bitiş saati seçme alanları */}
        <div className="grid grid-cols-10 w-full gap-2">
          <div className="col-span-4 ">
            <Dropdown
              label="Gün"
              options={day}
              selected={selectedDay}
              onSelect={setSelectedDay}
              hasSearch={true}
            />
          </div>
          <div className="col-span-3">
            <Dropdown
              label="Başlangıç"
              options={start}
              selected={selectedStart}
              onSelect={setSelectedStart}
            />
          </div>
          <div className="col-span-3">
            <Dropdown
              label="Bitiş"
              options={end}
              selected={selectedEnd}
              onSelect={setSelectedEnd}
            />
          </div>
        </div>
      </div>
      {page === 3 && (
        <div className="w-full">
          {/* Sabit seçim yapılamayan Gün,başlangıç saati ve bitiş saati alanları */}
          <div className="grid grid-cols-10 w-full gap-2 ">
            <div className="col-span-4 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-base ">
              Gün
              <img src="/getStarted/sharpUp.svg" alt="up" color="#484848" />
            </div>
            <div className="col-span-3 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-sm">
              Başlangıç
              <img src="/getStarted/sharpUp.svg" alt="up" color="#484848" />
            </div>
            <div className="col-span-3 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-sm">
              Bitiş
              <img src="/getStarted/sharpUp.svg" alt="up" color="#484848" />
            </div>
          </div>
          {/* seçimleri ekrana döküyoruz */}
          <div className="shortPlan overflow-y-auto">
            {choosedWork.map((item, key) => (
              <div key={key} className="grid grid-cols-10 w-full gap-2 mt-2 ">
                <div
                  className={`${
                    animating ? "slide-in" : ""
                  } col-span-4 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-base `}
                >
                  <div className="flex items-center">
                    <img
                      src="/getStarted/delete.svg"
                      alt="delete"
                      className="cursor-pointer"
                      onClick={() => handleRemoveWorkDay(key)}
                    />
                    {item.day}
                  </div>
                  <img
                    src="/getStarted/sharpUp.svg"
                    alt="down"
                    color="#484848"
                    className="roatate-180"
                  />
                </div>
                <div className="col-span-3 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-sm ">
                  {item.start}
                  <img
                    src="/getStarted/sharpUp.svg"
                    alt="down"
                    color="#484848"
                    className="roatate-180"
                  />
                </div>
                <div className="col-span-3 w-full flex justify-between items-center bg-white border rounded p-2 text-left text-[#737373] text-sm ">
                  {item.end}
                  <img
                    src="/getStarted/sharpUp.svg"
                    alt="down"
                    color="#484848"
                    className="roatate-180"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Bir önceki sayfaya dönüp yeni plan ekleme butonu */}
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-7"></div>
            <button
              onClick={() => setPage((i) => i - 1)}
              className="col-span-3 p-2 mt-2 text-[#4CD080] bg-[rgba(76,_208,_128,_0.12)] font-medium text-xs rounded-md"
            >
              Yeni Ekle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseWorkDay;
