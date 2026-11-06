import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('filter') || '');
  const navigate = useNavigate();
  const { isPure, toggleTheme } = useTheme();

  useEffect(() => {
    setSearchTerm(searchParams.get('filter') || '');
  }, [searchParams]);

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(30, 34, 37, 0.06)',
        borderTop: '3px solid var(--primary)',
      }}
    >
      <div className="container-custom py-4">
        {/* Linha Superior: Logo, Busca, Redirecionamento e Carrinho */}
        <div className="flex flex-wrap align-items-center justify-content-between gap-4">
          <Link to="/" aria-label="Ir para a página inicial">
            <Logo />
          </Link>

          {/* Campo de Busca */}
          <div
            className="flex align-items-center flex-1"
            style={{
              maxWidth: '559px',
              minWidth: '240px',
              height: '60px',
              backgroundColor: 'var(--light-gray-3)',
              borderRadius: '8px',
              padding: '0 20px',
            }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar produto"
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '16px',
                color: 'var(--dark-gray-2)',
              }}
            />
            <button
              type="button"
              onClick={handleSearch}
              aria-label="Buscar"
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--light-gray)',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="pi pi-search" />
            </button>
          </div>

          {/* Área de Redirecionamento + Carrinho */}
          <div className="flex align-items-center gap-4">
            <a
              href="#cadastro"
              onClick={(e) => e.preventDefault()}
              style={{
                fontSize: '16px',
                color: 'var(--dark-gray-2)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--dark-gray-2)',
                whiteSpace: 'nowrap',
              }}
            >
              Cadastre-se
            </a>

            <a
              href="#login"
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--primary)',
                width: '114px',
                height: '40px',
                borderRadius: '4px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              Entrar
            </a>

            {/* Ícone do Carrinho de Compras */}
            <div style={{ position: 'relative', display: 'inline-flex', marginLeft: '8px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.42226 19.8204C6.88426 19.8204 7.25926 20.1954 7.25926 20.6574C7.25926 21.1194 6.88426 21.4944 6.42226 21.4944C5.96026 21.4944 5.58526 21.1194 5.58526 20.6574C5.58526 20.1954 5.96026 19.8204 6.42226 19.8204Z"
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6747 19.8204C18.1367 19.8204 18.5117 20.1954 18.5117 20.6574C18.5117 21.1194 18.1367 21.4944 17.6747 21.4944C17.2127 21.4944 16.8377 21.1194 16.8377 20.6574C16.8377 20.1954 17.2127 19.8204 17.6747 19.8204Z"
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.74988 2.25L3.82988 2.61L4.79288 14.083C4.87088 15.018 5.65188 15.736 6.58988 15.736H17.5019C18.3979 15.736 19.1579 15.078 19.2869 14.19L20.2359 7.632C20.3529 6.823 19.7259 6.099 18.9089 6.099H4.16388"
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1254 9.79489H15.8984"
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  backgroundColor: '#EE4266',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                2
              </span>
            </div>
          </div>
        </div>

        {/* Navegação Principal */}
        <nav className="flex align-items-center gap-5 mt-4 pt-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/categorias"
            className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}
          >
            Categorias
          </NavLink>
          <NavLink
            to="/meus-pedidos"
            className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
