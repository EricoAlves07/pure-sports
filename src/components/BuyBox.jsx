import React from 'react';
import starIcon from '../assets/star-icon.svg';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="flex flex-column gap-3" style={{ maxWidth: '500px' }}>
      {/* Nome do Produto (32px, dark-gray) */}
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: 'var(--dark-gray)',
          lineHeight: '38px',
        }}
      >
        {name}
      </h1>

      {/* Referência (12px, dark-gray-3) */}
      {reference && (
        <span
          style={{
            fontSize: '12px',
            color: 'var(--dark-gray-3)',
          }}
        >
          {reference}
        </span>
      )}

      {/* Avaliações: Estrelas (14px, box radius 4px, cor warning #F6AA1C, texto e estrela white) + Rating (14px, light-gray) */}
      <div className="flex align-items-center gap-3">
        {stars !== undefined && (
          <span
            className="inline-flex align-items-center gap-1"
            style={{
              backgroundColor: '#F6AA1C',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '4px',
              padding: '4px 10px',
            }}
          >
            <span>{stars}</span>
            <img
              src={starIcon}
              alt="Estrela"
              width={14}
              height={14}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </span>
        )}

        {rating !== undefined && (
          <span
            style={{
              fontSize: '14px',
              color: '#8F8F8F',
            }}
          >
            ({rating} avaliações)
          </span>
        )}
      </div>

      {/* Preço e Preço com Desconto (32px dark-gray-2 / 16px light-gray-2 riscado) */}
      <div className="flex align-items-baseline gap-2 my-1">
        <span style={{ fontSize: '16px', color: 'var(--dark-gray-2)' }}>R$</span>
        {hasDiscount ? (
          <>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--dark-gray-2)',
              }}
            >
              {priceDiscount}
            </span>
            <span
              style={{
                fontSize: '16px',
                color: '#CCCCCC',
                textDecoration: 'line-through',
              }}
            >
              {price}
            </span>
          </>
        ) : (
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--dark-gray-2)',
            }}
          >
            {price}
          </span>
        )}
      </div>

      {/* Descrição do Produto (14px, dark-gray-2) */}
      {description && (
        <div className="my-2">
          <h4
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#8F8F8F',
              marginBottom: '6px',
            }}
          >
            Descrição do produto
          </h4>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--dark-gray-2)',
              lineHeight: '22px',
            }}
          >
            {description}
          </p>
        </div>
      )}

      {/* Variações (ProductOptions, etc.) */}
      {children && <div className="flex flex-column gap-3 my-2">{children}</div>}

      {/* Botão Call to Action (preenchimento warning #F6AA1C, fonte white #FFFFFF com 16px) */}
      <button
        type="button"
        style={{
          backgroundColor: '#F6AA1C',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 700,
          border: 'none',
          borderRadius: '8px',
          height: '48px',
          width: '220px',
          cursor: 'pointer',
          marginTop: '12px',
        }}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
