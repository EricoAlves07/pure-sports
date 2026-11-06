import React, { useState } from 'react';

const ProductOptions = ({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex align-items-center gap-2 flex-wrap my-2">
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCircle = shape === 'circle';
        const isColor = type === 'color';

        const baseStyle = isCircle
          ? {
              width: '31px',
              height: '31px',
              borderRadius: '50%',
              border: isSelected ? '2px solid var(--primary)' : '1px solid #CCCCCC',
            }
          : {
              width: isColor ? '46px' : 'auto',
              minWidth: '46px',
              height: '46px',
              padding: isColor ? '0' : '0 12px',
              borderRadius: radius,
              border: isSelected ? '2px solid var(--primary)' : '1px solid #CCCCCC',
            };

        return (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            style={{
              ...baseStyle,
              backgroundColor: isColor ? option : '#FFFFFF',
              color: 'var(--dark-gray-2)',
              fontSize: '24px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              outline: 'none',
              transition: 'border 0.15s ease',
            }}
            aria-label={`Opção ${option}`}
          >
            {type === 'text' ? option : null}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;
