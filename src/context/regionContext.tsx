
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useGeolocated } from 'react-geolocated';

interface Pricing {
  india: number;
  nepal: number;
  global: number;
}

interface RegionContextType {
  region: 'india' | 'nepal' | 'global';
  pricing: Pricing;
  setRegion: (region: 'india' | 'nepal' | 'global') => void;
}

export const RegionContext = createContext<RegionContextType>({
  region: 'global',
  pricing: { india: 2500, nepal: 4000, global: 35 },
  setRegion: () => {},
});

interface RegionProviderProps {
  children: ReactNode;
}

const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [region, setRegion] = useState<'india' | 'nepal' | 'global'>('global');

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
      if (lat > 20 && lat < 37) setRegion('india'); // Rough India latitude
      else if (lat > 26 && lat < 31) setRegion('nepal'); // Rough Nepal latitude
      else setRegion('global');
    } else {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data.country_code === 'IN') setRegion('india');
          else if (data.country_code === 'NP') setRegion('nepal');
          else setRegion('global');
        })
        .catch(() => setRegion('global'));
    }
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  return (
    <RegionContext.Provider value={{ region, pricing: { india: 2500, nepal: 4000, global: 35 }, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;