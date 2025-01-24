import React from 'react';
import HomePageContent from "./HomePageContent";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#105D38] w-full h-[29vh] fixed top-0 "></div>
      {/* logo,destek,bildirim,ayarlarını ve puan,bakiye alanlarını burda tutuyoruz */}
      <HomePageHeader /> 
      {/* Geri kalan ve muhtemelen sayfaya göre değişecek sahaları burda tutuyoruz */}
      <HomePageContent />
      {/* lokasyon,sektör,ödül kazan,işlerim ve profil kısayollarını burda tutuyoruz */}
      <HomePageFooter />
    </div>
  );
};

export default HomePage; 