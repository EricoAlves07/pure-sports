import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import { useTheme } from '../context/ThemeContext';

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const queryFilter = searchParams.get('filter') || '';
  const { isPure, products } = useTheme();

  const [sortOrder, setSortOrder] = useState('menor-preco');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState(['Novo']);

  const brandOptions = isPure
    ? [
        { text: 'Nike', value: 'Nike' },
        { text: 'Adidas', value: 'Adidas' },
        { text: 'PureFit', value: 'PureFit' },
        { text: 'Puma', value: 'Puma' },
        { text: 'Garmin', value: 'Garmin' },
        { text: 'Everlast', value: 'Everlast' },
      ]
    : [
        { text: 'Adidas', value: 'Adidas' },
        { text: 'Balenciaga', value: 'Balenciaga' },
        { text: 'K-Swiss', value: 'K-Swiss' },
        { text: 'Nike', value: 'Nike' },
        { text: 'Puma', value: 'Puma' },
      ];

  const categoryOptions = isPure
    ? [
        { text: 'Corrida', value: 'Corrida' },
        { text: 'Musculação', value: 'Musculação' },
        { text: 'Cross Training', value: 'Cross Training' },
        { text: 'Yoga & Pilates', value: 'Yoga & Pilates' },
        { text: 'Acessórios', value: 'Acessórios' },
        { text: 'Esportes Coletivos', value: 'Esportes Coletivos' },
        { text: 'Artes Marciais', value: 'Artes Marciais' },
      ]
    : [
        { text: 'Esporte e lazer', value: 'Esporte e lazer' },
        { text: 'Casual', value: 'Casual' },
        { text: 'Utilitário', value: 'Utilitário' },
        { text: 'Corrida', value: 'Corrida' },
        { text: 'Tênis', value: 'Tênis' },
      ];

  const genderOptions = [
    { text: 'Masculino', value: 'Masculino' },
    { text: 'Feminino', value: 'Feminino' },
    { text: 'Unissex', value: 'Unissex' },
  ];

  const conditionOptions = [
    { text: 'Novo', value: 'Novo' },
    { text: 'Usado', value: 'Usado' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (queryFilter) {
          const q = queryFilter.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchCategory = product.category?.toLowerCase().includes(q);
          const matchBrand = product.brand?.toLowerCase().includes(q);
          if (!matchName && !matchCategory && !matchBrand) {
            return false;
          }
        }

        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
          return false;
        }

        if (
          selectedCategories.length > 0 &&
          !selectedCategories.includes(product.category)
        ) {
          return false;
        }

        if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender)) {
          return false;
        }

        if (
          selectedConditions.length > 0 &&
          !selectedConditions.includes(product.condition)
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const priceA = a.priceDiscount ?? a.price;
        const priceB = b.priceDiscount ?? b.price;
        if (sortOrder === 'menor-preco') {
          return priceA - priceB;
        }
        return priceB - priceA;
      });
  }, [
    products,
    queryFilter,
    sortOrder,
    selectedBrands,
    selectedCategories,
    selectedGenders,
    selectedConditions,
  ]);

  const sectionTitle = queryFilter
    ? `Resultados para "${queryFilter}" - ${filteredProducts.length} produtos`
    : `Total de produtos encontrados: ${filteredProducts.length} produtos`;

  return (
    <Layout>
      <div className="container-custom py-5">
        <div className="flex flex-column lg:flex-row gap-5 align-items-start">
          {/* Coluna Lateral: Ordenar por + Filtrar por */}
          <aside className="flex flex-column gap-4" style={{ width: '308px', flexShrink: 0 }}>
            {/* 6.1 - Ordenar por */}
            <div
              className="flex align-items-center justify-content-between px-3"
              style={{
                width: '308px',
                height: '60px',
                border: '1px solid var(--dark-gray-2)',
                borderRadius: '4px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <label
                htmlFor="sort-select"
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--dark-gray-2)',
                  whiteSpace: 'nowrap',
                  marginRight: '8px',
                }}
              >
                Ordenar por:
              </label>
              <select
                id="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '16px',
                  color: 'var(--dark-gray-2)',
                  outline: 'none',
                  cursor: 'pointer',
                  flex: 1,
                }}
              >
                <option value="menor-preco" style={{ color: '#474747' }}>
                  Menor preço
                </option>
                <option value="maior-preco" style={{ color: '#474747' }}>
                  Maior preço
                </option>
              </select>
            </div>

            {/* 6.2 - Filtrar por */}
            <div
              style={{
                width: '308px',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '30px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--dark-gray-2)',
                  marginBottom: '16px',
                }}
              >
                Filtrar por
              </h3>
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid #CCCCCC',
                  marginBottom: '16px',
                }}
              />

              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={brandOptions}
                selectedValues={selectedBrands}
                onChange={setSelectedBrands}
              />

              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={categoryOptions}
                selectedValues={selectedCategories}
                onChange={setSelectedCategories}
              />

              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={genderOptions}
                selectedValues={selectedGenders}
                onChange={setSelectedGenders}
              />

              <FilterGroup
                title="Estado"
                inputType="radio"
                options={conditionOptions}
                selectedValues={selectedConditions}
                onChange={setSelectedConditions}
              />
            </div>
          </aside>

          {/* 6.3 - Listagem de produtos */}
          <div className="flex-1 w-full">
            <Section title={sectionTitle} titleAlign="left">
              <ProductListing products={filteredProducts} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
