import React from "react";

const BrandPartnersSection = () => {
  // First section partners (custom logos)
  const brandPartners = [
    { name: "ZIP", logo: "ZIP" },
    { name: "Fullview", logo: "fullview" },
    { name: "Digital Base", logo: "DIGITAL BASE" },
    { name: "Fintama", logo: "Fintama" },
    { name: "Subversive", logo: "Subversive" },
    { name: "Factory", logo: "FACTORY" },
    { name: "Pay", logo: "PAY))" },
    { name: "Prophius", logo: "PROPHIUS" },
    { name: "Bruno Guez", logo: "Bruno Guez" },
    { name: "Amplified", logo: "Amplified" },
  ];

  // Hotel partners (image logos)
  const hotelPartners = [
    {
      name: "W Hotels",
      src: "https://viralops.com/wp-content/uploads/2024/05/wHotels-img.png",
    },
    {
      name: "Westin",
      src: "https://viralops.com/wp-content/uploads/2024/05/westin-img.png",
    },
    {
      name: "St. Regis",
      src: "https://viralops.com/wp-content/uploads/2024/05/stRegis-img.png",
    },
    {
      name: "Fairfield",
      src: "https://viralops.com/wp-content/uploads/2024/05/fairfield-img.png",
    },
    {
      name: "Sheraton",
      src: "https://viralops.com/wp-content/uploads/2024/05/sheraton-img.png",
    },
    {
      name: "JW Marriott",
      src: "https://viralops.com/wp-content/uploads/2024/05/jwMarriot-img.png",
    },
    {
      name: "Rixos",
      src: "https://viralops.com/wp-content/uploads/2024/05/rixos-img.png",
    },
    {
      name: "Ritz Carlton",
      src: "https://viralops.com/wp-content/uploads/2024/05/ritzCarlton-img.png",
    },
    {
      name: "Renaissance",
      src: "https://viralops.com/wp-content/uploads/2024/05/renaissance-img.png",
    },
    {
      name: "New World",
      src: "https://viralops.com/wp-content/uploads/2024/05/newWorld-img.png",
    },
    {
      name: "MGallery",
      src: "https://viralops.com/wp-content/uploads/2024/05/mGallery-img.png",
    },
    {
      name: "Marriott",
      src: "https://viralops.com/wp-content/uploads/2024/05/marriot-img.png",
    },
    {
      name: "Marriott Executive",
      src: "https://viralops.com/wp-content/uploads/2024/05/marriotExecutive-img.png",
    },
    {
      name: "Le Meridien",
      src: "https://viralops.com/wp-content/uploads/2024/05/leMeridian-img.png",
    },
    {
      name: "InterContinental",
      src: "https://viralops.com/wp-content/uploads/2024/05/intercontinental-img.png",
    },
    {
      name: "Hyatt Place",
      src: "https://viralops.com/wp-content/uploads/2024/05/hyattPlace-img.png",
    },
    {
      name: "Holiday Inn",
      src: "https://viralops.com/wp-content/uploads/2024/05/holidayInn-img.png",
    },
    {
      name: "Indigo",
      src: "https://viralops.com/wp-content/uploads/2024/05/indigo-img.png",
    },
    {
      name: "Holiday Inn Express",
      src: "https://viralops.com/wp-content/uploads/2024/05/holidayInnExpress-img.png",
    },
    {
      name: "Hiive",
      src: "https://viralops.com/wp-content/uploads/2024/05/hiive-img.png",
    },
    {
      name: "Grand Hyatt",
      src: "https://viralops.com/wp-content/uploads/2024/05/grandHyatt-img.png",
    },
    {
      name: "Four Points",
      src: "https://viralops.com/wp-content/uploads/2024/05/fourPoints-img.png",
    },
    {
      name: "Crowne Plaza",
      src: "https://viralops.com/wp-content/uploads/2024/05/crownePlaza-img.png",
    },
    {
      name: "Courtyard",
      src: "https://viralops.com/wp-content/uploads/2024/05/courtyard-img.png",
    },
  ];

  const getLogoComponent = (partner) => {
    const baseClasses =
      "text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium";

    const logoComponents = {
      ZIP: (
        <span className={`${baseClasses} text-2xl font-bold tracking-wider`}>
          ZIP
        </span>
      ),

      Fullview: (
        <div className={`${baseClasses} flex items-center gap-1`}>
          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-lg font-medium">fullview</span>
        </div>
      ),

      "Digital Base": (
        <div className={`${baseClasses} text-center`}>
          <div className="text-lg font-bold tracking-wide">DIGITAL</div>
          <div className="text-lg font-bold tracking-wide -mt-1">BASE</div>
        </div>
      ),

      Fintama: (
        <span className={`${baseClasses} text-xl font-semibold`}>Fintama</span>
      ),

      Subversive: (
        <div className={`${baseClasses} flex items-center gap-1`}>
          <div className="text-blue-600 text-xl font-bold">⚡</div>
          <span className="text-lg font-bold">Subversive</span>
        </div>
      ),

      Factory: (
        <span className={`${baseClasses} text-xl font-bold tracking-widest`}>
          FACTORY
        </span>
      ),

      Pay: (
        <div className={`${baseClasses} text-xl font-bold`}>
          PAY<span className="text-gray-400">))</span>
          <div className="text-xs text-gray-400 -mt-1">CONTACTLESS</div>
        </div>
      ),

      Prophius: (
        <div className={`${baseClasses} flex items-center gap-1`}>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <span className="text-lg font-bold tracking-wide">PROPHIUS</span>
        </div>
      ),

      "Bruno Guez": (
        <span className={`${baseClasses} text-lg font-medium`}>Bruno Guez</span>
      ),

      Amplified: (
        <div className={`${baseClasses} flex items-center gap-1`}>
          <span className="text-lg font-bold">Amplified</span>
          <div className="text-blue-600 text-lg font-bold">🎯</div>
        </div>
      ),
    };

    return (
      logoComponents[partner.name] || (
        <span className={baseClasses}>{partner.logo}</span>
      )
    );
  };

  const GridContainer = ({
    children,
    cols = "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  }) => (
    <div className="border border-gray-400">
      <div className={`grid ${cols}`}>{children}</div>
    </div>
  );

  const GridItem = ({ children, index, totalItems, responsive = true }) => {
    const baseCols = responsive ? 2 : 6;
    const mdCols = responsive ? 3 : 6;
    const lgCols = responsive ? 5 : 6;

    const borderClasses = responsive
      ? `[&:not(:nth-child(${baseCols}n))]:border-r md:[&:not(:nth-child(${mdCols}n))]:border-r lg:[&:not(:nth-child(${lgCols}n))]:border-r [&:not(:nth-last-child(-n+${baseCols}))]:border-b md:[&:not(:nth-last-child(-n+${mdCols}))]:border-b lg:[&:not(:nth-last-child(-n+${lgCols}))]:border-b`
      : `[&:not(:nth-child(6n))]:border-r [&:not(:nth-last-child(-n+6))]:border-b`;

    return (
      <div
        className={`group bg-white p-4 md:p-6 lg:p-8 transition-all duration-300 hover:bg-gray-50 flex items-center justify-center min-h-[80px] md:min-h-[100px] lg:min-h-[120px] border-gray-400 ${borderClasses}`}
      >
        <div className="transform group-hover:scale-105 transition-transform duration-300">
          {children}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-[#fbfdff]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Brand Partners
          </h1>
          <p className="text-lg text-gray-900 max-w-2/3 ">
            We're proud to collaborate with these innovative companies to
            deliver exceptional solutions and drive mutual growth.
          </p>
        </div>

        {/* <div className="mb-8">
          <GridContainer>
            {brandPartners.map((partner, index) => (
              <GridItem key={`brand-${index}`} index={index} totalItems={brandPartners.length}>
                {getLogoComponent(partner)}
              </GridItem>
            ))}
          </GridContainer>
        </div> */}

        {/* Hotel Partners Grid */}
        <GridContainer cols="grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {hotelPartners.map((partner, index) => (
            <GridItem
              key={`hotel-${index}`}
              index={index}
              totalItems={hotelPartners.length}
              responsive={false}
            >
              <img
                src={partner.src}
                alt={partner.name}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="max-w-full h-auto object-contain max-h-16 md:max-h-20 transition-opacity duration-300 hover:opacity-80"
                width="120"
                height="80"
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
