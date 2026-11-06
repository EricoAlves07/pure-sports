import React from 'react';
import Logo from './Logo';
import Information from './Information';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isPure } = useTheme();

  const aboutInformations = [
    { text: isPure ? 'Sobre Pure Sports' : 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/meus-pedidos' },
  ];

  const categoryInformations = isPure
    ? [
        { text: 'Corrida', link: '/products?filter=Corrida' },
        { text: 'Musculação', link: '/products?filter=Musculação' },
        { text: 'Cross Training', link: '/products?filter=Cross Training' },
        { text: 'Yoga & Pilates', link: '/products?filter=Yoga' },
        { text: 'Acessórios Fitness', link: '/products?filter=Acessórios' },
      ]
    : [
        { text: 'Camisetas', link: '/products?filter=Camisetas' },
        { text: 'Calças', link: '/products?filter=Calças' },
        { text: 'Bonés', link: '/products?filter=Bonés' },
        { text: 'Headphones', link: '/products?filter=Headphones' },
        { text: 'Tênis', link: '/products?filter=Tênis' },
      ];

  const contactInformations = [
    {
      text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
      link: '#',
    },
    {
      text: '(85) 3051-3411',
      link: 'tel:+558530513411',
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-gray)',
        color: '#FFFFFF',
        paddingTop: '72px',
        paddingBottom: '32px',
        marginTop: '80px',
      }}
    >
      <div className="container-custom">
        <div className="grid justify-content-between gap-5 pb-6">
          {/* Coluna da Marca */}
          <div className="col-12 md:col-4 flex flex-column gap-4">
            <Logo white />
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: '26px',
                maxWidth: '307px',
              }}
            >
              {isPure
                ? 'A Pure Sports é a sua loja completa de artigos esportivos, equipamentos fitness e alta performance para impulsionar os seus treinos todos os dias.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'}
            </p>
            <div className="flex align-items-center gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Colunas de Informações Dinâmicas */}
          <div className="col-12 sm:col-6 md:col-2">
            <Information title="Informação" informations={aboutInformations} />
          </div>

          <div className="col-12 sm:col-6 md:col-2">
            <Information title="Categorias" informations={categoryInformations} />
          </div>

          <div className="col-12 md:col-3">
            <Information title="Contato" informations={contactInformations} />
          </div>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            marginBottom: '24px',
          }}
        />

        <p
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: '13px',
          }}
        >
          {isPure ? '© 2026 Pure Sports — Digital Store' : '© 2024 Digital Store'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
