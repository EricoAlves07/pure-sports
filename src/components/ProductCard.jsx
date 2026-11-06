import React from 'react';
import { Link } from 'react-router-dom';
import { resolveAssetUrl } from '../data/products';

const ProductCard = ({
  id = 1,
  image,
  imagem,
  name,
  category = 'Esportes',
  price,
  priceDiscount,
}) => {
  const imgSrc = resolveAssetUrl(image || imagem);
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;
  const discountPercent =
    hasDiscount && price > 0 ? Math.round(((price - priceDiscount) / price) * 100) : null;

  return (
    <Link
      to={`/product/${id}`}
      style={{
        width: '292px',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        style={{
          width: '292px',
          height: '321px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          boxShadow: '0 4px 16px rgba(30, 34, 37, 0.06)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginBottom: '14px',
        }}
      >
        {discountPercent > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: '#E7FF86',
              color: '#474747',
              fontSize: '14px',
              fontWeight: 700,
              padding: '5px 14px',
              borderRadius: '29px',
              zIndex: 2,
            }}
          >
            {discountPercent}% OFF
          </span>
        )}
        <img
          src={imgSrc}
          alt={name}
          width={292}
          height={321}
          style={{
            width: '292px',
            height: '321px',
            objectFit: 'cover',
          }}
        />
      </div>

      {category && (
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--light-gray)',
            marginBottom: '4px',
          }}
        >
          {category}
        </span>
      )}

      <h3
        style={{
          fontSize: '18px',
          fontWeight: 500,
          color: 'var(--dark-gray-2)',
          marginBottom: '8px',
          lineHeight: '26px',
        }}
      >
        {name}
      </h3>

      <div className="flex align-items-center gap-2">
        <span
          style={{
            fontSize: '24px',
            fontWeight: hasDiscount ? 400 : 700,
            color: hasDiscount ? '#8F8F8F' : 'var(--dark-gray)',
            textDecoration: hasDiscount ? 'line-through' : 'none',
          }}
        >
          R$ {price}
        </span>

        {hasDiscount && (
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'var(--dark-gray)',
            }}
          >
            R$ {priceDiscount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
