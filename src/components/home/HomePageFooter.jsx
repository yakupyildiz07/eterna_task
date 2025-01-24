const HomePageFooter = () => {
  return (
    <div className="w-full absolute bottom-7 z-10">
      <div className="grid grid-cols-5 px-4">
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="/home/location.svg"
            alt="location"
            color="#BDBDBD"
            width={24}
            height={24}
          />
          <p className="text-[#BDBDBD] text-[10px] font-medium">Lokasyonlar</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="/home/chart.svg"
            alt="chart"
            color="#BDBDBD"
            width={24}
            height={24}
          />
          <p className="text-[#BDBDBD] text-[10px] font-medium">Sektörler</p>
        </div>
        <div className="flex flex-col items-center relative">
          <img
            src="/home/reward.gif"
            alt="reward"
            color="#BDBDBD"
            width={58}
            height={58}
            className="absolute bottom-4 cursor-pointer"
          />
          <p className="text-[#BDBDBD] text-[10px] font-medium mt-auto">
            Ödül Kazan
          </p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="/home/bagPlus.svg"
            alt="bagPlus"
            color="#BDBDBD"
            width={24}
            height={24}
          />
          <p className="text-[#BDBDBD] text-[10px] font-medium">İşlerim</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="/home/profile.svg"
            alt="profile"
            color="#BDBDBD"
            width={24}
            height={24}
          />
          <p className="text-[#BDBDBD] text-[10px] font-medium">Profilim</p>
        </div>
      </div>
    </div>
  );
};
export default HomePageFooter;
