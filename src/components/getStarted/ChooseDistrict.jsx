import React, { useEffect, useState } from "react";

const ChooseDistrict = () => {
  const [isOpen, setIsOpen] = useState(false); //seçeneklerin açık veya kapalı olmasını tutan state
  const [searchTerm, setSearchTerm] = useState(""); //aramada yazdığımız metni tutan state
  const [selectedOptions, setSelectedOptions] = useState([]); //seçili ilçeleri tutatn state
  const [options, setOptions] = useState([]); //tüm ilçeleri tutan state

  //tüm ilçe bilgilerini çekiyoruz ve saklıyoruz
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await import("../../services/districts");
        setOptions(response.districts);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchDistricts();
  }, []);

  //arama kısmına yazdıklarımızı harf harf saklıyoruz
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //seçili olan ilçeleri saklama fonksiyonu
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  //mevcut ilçeler bizim yazdığımızı içeriyosa eşliyoruz
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen
            ? "border-[#8F49DE80]"
            : "border-transparent hover:cursor-pointer hover:border-[#722e79ef]"
        } border-4  bg-white flex items-center justify-between rounded-xl px-6 py-2 w-full text-[#5A5D6C]`}
      >
        {/* ekranda seçilenleri gösteriyoruz */}
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : "İlçeler"} 
        {!isOpen ? (
          <img src="/getStarted/down.svg" alt="down" />
        ) : (
          <img src="/getStarted/down.svg" alt="down" className="rotate-180" />
        )}
      </button>

      {isOpen && 
      // arama alanı
      (
        <div className=" bg-white border rounded mt-1 w-full z-10 text-[#262527]">
          <div className="px-4 py-2 flex gap-2 border-b-2">
            <img src="/getStarted/search.svg" alt="search" color="#5A5D6C" />
            <input
              type="text"
              placeholder="ARA"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full text-[#262527] placeholder-[#5A5D6C] outline-none text-sm"
            />
          </div>
          {/* seçenekleri listelemek için  */}
          <div className="h-60 overflow-y-auto shortDistrict">
            {filteredOptions.map((option) => (
              <div
                key={option}
                className="flex items-center hover:bg-slate-50  gap-2 px-4 py-2 accent-purple-700"
              >
                <input
                  className="w-5 h-5 rounded-xl font-medium text-sm hover:cursor-pointer"
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseDistrict; 