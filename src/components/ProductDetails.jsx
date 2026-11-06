import React from 'react';
import Gallery from './Gallery';
import BuyBox from './BuyBox';
import ProductOptions from './ProductOptions';

const ProductDetails = ({ product, images }) => {
  return (
    <div className="grid gap-5 align-items-start">
      <div className="col-12 lg:col-7">
        <Gallery
          images={images}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />
      </div>
      <div className="col-12 lg:col-4">
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <div>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#8F8F8F' }}>
              Tamanho
            </span>
            <ProductOptions
              options={['39', '40', '41', '42', '43']}
              radius="4px"
              shape="square"
              type="text"
            />
          </div>
          <div>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#8F8F8F' }}>
              Cor
            </span>
            <ProductOptions
              options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>
    </div>
  );
};

export default ProductDetails;

