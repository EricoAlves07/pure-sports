import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { resolveAssetUrl } from '../data/products';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { isPure, products, homeSlides, collections } = useTheme();
  const trendingProducts = products.slice(0, 8);

  return (
    <Layout>
      {/* 5.1 - Slide de imagens */}
      <div style={{ position: 'relative' }}>
        <Gallery images={homeSlides} width="1440px" height="681px" />

        {isPure && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '8%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(30, 34, 37, 0.85)',
              backdropFilter: 'blur(6px)',
              padding: '36px 40px',
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary)',
              maxWidth: '520px',
              color: '#FFFFFF',
              zIndex: 2,
            }}
          >
            <span
              style={{
                color: 'var(--primary)',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              Strength · Discipline · Performance
            </span>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
                fontStyle: 'italic',
                fontSize: '52px',
                fontWeight: 800,
                lineHeight: '52px',
                margin: '10px 0 16px',
                color: '#FFFFFF',
                letterSpacing: '0.5px',
              }}
            >
              PURE SPORTS: SUPERE SEUS LIMITES
            </h1>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '26px',
                color: '#F2F6F7',
                marginBottom: '24px',
              }}
            >
              Equipamentos de musculação, corrida, cross training e vestuário esportivo com
              tecnologia de ponta para o seu melhor treino.
            </p>
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '16px',
                width: '220px',
                height: '48px',
                borderRadius: '8px',
              }}
            >
              Ver Ofertas
            </Link>
          </div>
        )}
      </div>

      <div className="container-custom">
        {/* 5.2 - Coleções em destaque */}
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="flex flex-wrap justify-content-center gap-4">
            {collections.map((collection, index) =>
              collection.title ? (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    width: '380px',
                    height: '251px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(30, 34, 37, 0.08)',
                  }}
                >
                  <img
                    src={resolveAssetUrl(collection.src)}
                    alt={collection.title}
                    style={{
                      borderRadius: '4px',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(90deg, rgba(30,34,37,0.88) 0%, rgba(30,34,37,0.2) 100%)',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: '#E7FF86',
                        color: '#474747',
                        fontSize: '14px',
                        fontWeight: 700,
                        padding: '5px 14px',
                        borderRadius: '29px',
                      }}
                    >
                      {collection.discount}
                    </span>
                    <div>
                      <h3
                        style={{
                          color: '#FFFFFF',
                          fontSize: '26px',
                          fontWeight: 700,
                          marginBottom: '12px',
                        }}
                      >
                        {collection.title}
                      </h3>
                      <Link
                        to="/products"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'var(--primary)',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '14px',
                          width: '144px',
                          height: '40px',
                          borderRadius: '4px',
                        }}
                      >
                        Comprar
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  key={index}
                  src={resolveAssetUrl(collection.src)}
                  alt={`Coleção em destaque ${index + 1}`}
                  style={{
                    borderRadius: '4px',
                    maxWidth: '390px',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              )
            )}
          </div>
        </Section>

        {/* 5.3 - Produtos em alta */}
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={trendingProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
