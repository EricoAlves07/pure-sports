import React, { useState } from 'react';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import { resolveAssetUrl } from '../data/products';

const formatDimension = (val, fallback) => {
  if (!val) return fallback;
  const str = String(val);
  return /^\d+$/.test(str) ? `${str}px` : str;
};

const Gallery = ({
  className = '',
  width = '1440px',
  height = '681px',
  radius = '0px',
  showThumbs,
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = images.length === 0 || currentIndex === images.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const resolvedWidth = formatDimension(width, '100%');
  const resolvedHeight = formatDimension(height, '500px');

  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: resolvedWidth,
        margin: '0 auto',
      }}
    >
      {/* Área Principal do Slide */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: resolvedHeight,
          borderRadius: radius,
          overflow: 'hidden',
          backgroundColor: 'var(--light-gray-3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            height: '100%',
            transform: `translateX(-${
              images.length > 0 ? (currentIndex * 100) / images.length : 0
            }%)`,
            transition: 'transform 0.4s ease-in-out',
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                width: `${images.length > 0 ? 100 / images.length : 100}%`,
                height: '100%',
                flexShrink: 0,
              }}
            >
              <img
                src={resolveAssetUrl(img.src)}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: radius,
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

        {/* Seta Esquerda */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Imagem anterior"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: isFirst ? 'not-allowed' : 'pointer',
            opacity: isFirst ? 0.35 : 1,
            padding: '8px',
            zIndex: 3,
          }}
        >
          <img src={arrowLeft} alt="Anterior" />
        </button>

        {/* Seta Direita */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isLast}
          aria-label="Próxima imagem"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: isLast ? 'not-allowed' : 'pointer',
            opacity: isLast ? 0.35 : 1,
            padding: '8px',
            zIndex: 3,
          }}
        >
          <img src={arrowRight} alt="Próxima" />
        </button>
      </div>

      {/* Miniaturas (Thumbnails) */}
      {showThumbs !== undefined && showThumbs !== false && (
        <div className="flex align-items-center justify-content-between gap-2 mt-3 flex-wrap">
          {images.map((img, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '117px',
                  height: '95px',
                  borderRadius: radius,
                  border: isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <img
                  src={resolveAssetUrl(img.src)}
                  alt={`Miniatura ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: radius,
                    display: 'block',
                  }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
