import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PURE_PRODUCTS_DATA,
  PURE_HOME_SLIDES,
  PURE_FEATURED_COLLECTIONS,
  PURE_PRODUCT_GALLERY_IMAGES,
  DRIP_PRODUCTS_DATA,
  DRIP_HOME_SLIDES,
  DRIP_FEATURED_COLLECTIONS,
  DRIP_PRODUCT_GALLERY_IMAGES,
} from '../data/products';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('pure'); // 'pure' | 'drip'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.title =
      theme === 'pure'
        ? 'Pure Sports — Strength · Discipline · Performance'
        : 'Digital Store — Drip Store';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'pure' ? 'drip' : 'pure'));
  };

  const isPure = theme === 'pure';

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isPure,
    products: isPure ? PURE_PRODUCTS_DATA : DRIP_PRODUCTS_DATA,
    homeSlides: isPure ? PURE_HOME_SLIDES : DRIP_HOME_SLIDES,
    collections: isPure ? PURE_FEATURED_COLLECTIONS : DRIP_FEATURED_COLLECTIONS,
    galleryImages: isPure ? PURE_PRODUCT_GALLERY_IMAGES : DRIP_PRODUCT_GALLERY_IMAGES,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'pure',
      isPure: true,
      toggleTheme: () => {},
      products: PURE_PRODUCTS_DATA,
      homeSlides: PURE_HOME_SLIDES,
      collections: PURE_FEATURED_COLLECTIONS,
      galleryImages: PURE_PRODUCT_GALLERY_IMAGES,
    };
  }
  return context;
};

