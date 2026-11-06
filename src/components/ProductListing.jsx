import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products = [] }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-content-center md:justify-content-start">
      {products.map((product, index) => (
        <ProductCard
          key={product.id || index}
          id={product.id || index + 1}
          name={product.name}
          category={product.category}
          image={product.image || product.imagem}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;

