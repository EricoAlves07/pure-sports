import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { useTheme } from '../context/ThemeContext';

const ProductViewPage = () => {
  const { id } = useParams();
  const { isPure, products, galleryImages } = useTheme();

  const product =
    products.find((item) => String(item.id) === String(id)) || products[0];

  const activeGalleryImages = isPure
    ? [
        { src: product.image },
        ...galleryImages.filter((img) => img.src !== product.image).slice(0, 4),
      ]
    : galleryImages;

  const recommendedProducts = products.slice(0, 4);

  return (
    <Layout>
      <div className="container-custom py-5">
        {/* Breadcrumb */}
        <p style={{ fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '24px' }}>
          <strong>Home</strong> / Produtos / {product.category || 'Tênis'} /{' '}
          {product.brand || 'Nike'} / {product.name}
        </p>

        {/* 7.1 Galeria + 7.2 / 7.3 BuyBox */}
        <div className="flex flex-column lg:flex-row gap-5 align-items-start mb-6">
          <div style={{ flex: '1 1 auto', maxWidth: '700px', width: '100%' }}>
            <Gallery
              images={activeGalleryImages}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
            />
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <BuyBox
              name={product.name}
              reference={`${product.category || 'Casual'} | ${
                product.brand || 'Nike'
              } | REF:3841671${product.id}`}
              stars={4.7}
              rating={90}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={
                isPure
                  ? 'Equipamento desenvolvido com materiais de alta resistência e ergonomia avançada pela linha Pure Sports. Ideal para atletas e praticantes que buscam máximo desempenho, segurança e conforto durante treinos intensos.'
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
              }
            >
              <div>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#8F8F8F',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
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
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#8F8F8F',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Cor
                </span>
                <ProductOptions
                  options={
                    isPure
                      ? ['#14B8C4', '#1E2225', '#0D8A94', '#52CA76']
                      : ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']
                  }
                  shape="circle"
                  type="color"
                />
              </div>
            </BuyBox>
          </div>
        </div>

        {/* 7.4 - Produtos recomendados */}
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{
            text: 'Ver todos',
            href: '/products',
          }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
