import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column min-h-screen">
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <main className="flex-1">{children}</main>

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;

