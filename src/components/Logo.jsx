import React from 'react';
import logoHeaderPure from '../assets/logo-header.svg';
import logoFooterPure from '../assets/logo-footer.svg';
import logoHeaderDrip from '../assets/logo-header-drip.svg';
import logoFooterDrip from '../assets/logo-footer-drip.svg';
import { useTheme } from '../context/ThemeContext';

const Logo = ({ white = false }) => {
  const { isPure } = useTheme();

  const src = isPure
    ? white
      ? logoFooterPure
      : logoHeaderPure
    : white
    ? logoFooterDrip
    : logoHeaderDrip;

  return (
    <img
      src={src}
      alt={isPure ? 'Pure Sports Logo' : 'Digital Store Logo'}
      width={253}
      height={44}
      style={{ width: '253px', height: '44px', display: 'block' }}
    />
  );
};

export default Logo;
