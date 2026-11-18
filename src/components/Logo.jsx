import React from 'react';
import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = ({ white = false }) => {
  const src = white ? logoFooter : logoHeader;

  return (
    <img
      src={src}
      alt="Digital Store Logo"
      width={253}
      height={44}
      style={{ width: '253px', height: '44px', display: 'block' }}
    />
  );
};

export default Logo;
