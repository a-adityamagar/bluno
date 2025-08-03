// src/components/RegionProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useGeolocated } from "react-geolocated";

interface PricingConfig {
  base: number; // Multiplier for regional pricing adjustment
  currency: { global: string; india: string; nepal: string };
}

interface RegionContextType {
  region: "india" | "nepal" | "global";
  pricing: {
    website: PricingConfig;
    seo: PricingConfig;
  };
  setRegion: (region: "india" | "nepal" | "global") => void;
}

export const RegionContext = createContext<RegionContextType>({
  region: "global",
  pricing: {
    website: { base: 1.0, currency: { global: "$", india: "₹", nepal: "NPR" } },
    seo: { base: 1.0, currency: { global: "$", india: "₹", nepal: "NPR" } },
  },
  setRegion: () => {},
});

interface RegionProviderProps {
  children: ReactNode;
}

const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [region, setRegion] = useState<"india" | "nepal" | "global">("global");

  const {
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      const lat = coords.latitude;
      if (lat > 20 && lat < 37) setRegion("india"); // Rough India latitude
      else if (lat > 26 && lat < 31) setRegion("nepal"); // Rough Nepal latitude
      else setRegion("global");
    } else {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          if (data.country_code === "IN") setRegion("india");
          else if (data.country_code === "NP") setRegion("nepal");
          else setRegion("global");
        })
        .catch(() => setRegion("global"));
    }
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  // Pricing configurations based on region
  const pricing = {
    website: {
      base: region === "india" ? 0.9 : region === "nepal" ? 0.85 : 1.0, // 10% off in India, 15% off in Nepal
      currency: { global: "$", india: "₹", nepal: "NPR" },
    },
    seo: {
      base: region === "india" ? 0.95 : region === "nepal" ? 0.9 : 1.0, // 5% off in India, 10% off in Nepal
      currency: { global: "$", india: "₹", nepal: "NPR" },
    },
  };

  return (
    <RegionContext.Provider value={{ region, pricing, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;