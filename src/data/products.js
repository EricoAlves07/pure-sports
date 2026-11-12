// ============================================================================
// TEMA 1: PURE SPORTS (Identidade Personalizada + Banco de Imagens Unsplash)
// ============================================================================
export const PURE_PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Tênis Nike Zoom Fly 5 - Corrida Performance',
    category: 'Corrida',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#14B8C4', '#1E2225', '#0D8A94', '#52CA76'],
    description:
      'Tênis de corrida masculino desenvolvido para treinos de velocidade e provas de longa distância, oferecendo amortecimento responsivo, estabilidade e propulsão a cada passada.',
    price: 699.9,
    priceDiscount: 549.9,
  },
  {
    id: 2,
    name: 'Kit Halteres Sextavados Emborrachados 10kg',
    category: 'Musculação',
    brand: 'PureFit',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Par de halteres sextavados de 10kg com revestimento emborrachado de alta durabilidade e pegada anatômica recartilhada em aço cromado para treinos de força e musculação.',
    price: 349.9,
    priceDiscount: 279.9,
  },
  {
    id: 3,
    name: 'Tênis Adidas Ultraboost Light Feminino',
    category: 'Corrida',
    brand: 'Adidas',
    gender: 'Feminino',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['35', '36', '37', '38', '39'],
    colors: ['#14B8C4', '#1E2225', '#0D8A94', '#52CA76'],
    description:
      'Tênis de corrida feminino com entressola leve de alto retorno de energia e cabedal respirável que se ajusta aos pés com conforto superior em corridas diárias.',
    price: 799.9,
    priceDiscount: 599.9,
  },
  {
    id: 4,
    name: 'Kettlebell Ferro Fundido Pro 16kg',
    category: 'Cross Training',
    brand: 'PureFit',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Kettlebell profissional de 16kg fabricado em peça única de ferro fundido, com base plana estável e alça texturizada ideal para exercícios de cross training e condicionamento.',
    price: 289.9,
    priceDiscount: 229.9,
  },
  {
    id: 5,
    name: 'Tapete de Yoga Antiderrapante Eco 6mm',
    category: 'Yoga & Pilates',
    brand: 'Puma',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Tapete para yoga, pilates e alongamento com 6mm de espessura, superfície texturizada antiderrapante e amortecimento adequado para proteção das articulações.',
    price: 189.9,
    priceDiscount: 139.9,
  },
  {
    id: 6,
    name: 'Smartwatch Esportivo GPS Monitor Cardíaco',
    category: 'Acessórios',
    brand: 'Garmin',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Relógio esportivo inteligente com GPS integrado, monitoramento contínuo de frequência cardíaca, métricas de ritmo, distância e acompanhamento de múltiplas modalidades.',
    price: 999.0,
    priceDiscount: 799.9,
  },
  {
    id: 7,
    name: 'Luvas de Boxe e Muay Thai Pro 14oz',
    category: 'Artes Marciais',
    brand: 'Everlast',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Par de luvas de 14oz para boxe e muay thai com espuma de múltiplas camadas para absorção de impacto, fechamento firme no punho e painéis respiráveis.',
    price: 299.9,
    priceDiscount: 219.9,
  },
  {
    id: 8,
    name: 'Bola de Basquete Oficial Indoor/Outdoor',
    category: 'Esportes Coletivos',
    brand: 'Nike',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Bola de basquete tamanho oficial com canais profundos para controle preciso de drible e arremesso, revestimento resistente para quadras internas e externas.',
    price: 219.9,
    priceDiscount: 169.9,
  },
  {
    id: 9,
    name: 'Tênis Puma Velocity Nitro 2 Masculino',
    category: 'Corrida',
    brand: 'Puma',
    gender: 'Masculino',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#14B8C4', '#1E2225', '#0D8A94', '#52CA76'],
    description:
      'Tênis de corrida masculino com espuma de nitrogênio para amortecimento leve e solado de borracha de alta aderência em diferentes superfícies de corrida.',
    price: 549.9,
    priceDiscount: 429.9,
  },
  {
    id: 10,
    name: 'Garrafa Térmica Esportiva Inox 1 Litro',
    category: 'Acessórios',
    brand: 'PureFit',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Garrafa térmica esportiva em aço inoxidável com parede dupla isolada a vácuo, capacidade de 1 litro e tampa vedada para manter a hidratação durante o treino.',
    price: 149.9,
    priceDiscount: 109.9,
  },
  {
    id: 11,
    name: 'Mochila Esportiva Impermeável 30L',
    category: 'Acessórios',
    brand: 'Adidas',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Mochila esportiva de 30 litros com acabamento resistente à água, compartimentos organizadores para roupas e calçados de treino e alças acolchoadas ajustáveis.',
    price: 279.9,
    priceDiscount: 199.9,
  },
  {
    id: 12,
    name: 'Corda de Pular Speed Rope Rolamentada',
    category: 'Cross Training',
    brand: 'PureFit',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Corda de pular de alta velocidade com cabo de aço revestido ajustável e manoplas ergonômicas rolamentadas para giros rápidos e fluidos em treinos de cross training.',
    price: 89.9,
    priceDiscount: 59.9,
  },
  {
    id: 13,
    name: 'Tênis de Treino Nike Metcon 8',
    category: 'Cross Training',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#14B8C4', '#1E2225', '#0D8A94', '#52CA76'],
    description:
      'Tênis masculino projetado para cross training e levantamento de peso, com calcanhar largo e estável, cabedal reforçado e flexibilidade para exercícios funcionais.',
    price: 849.9,
    priceDiscount: 679.9,
  },
  {
    id: 14,
    name: 'Rolo de Liberação Miofascial Foam Roller',
    category: 'Yoga & Pilates',
    brand: 'PureFit',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Rolo de espuma de alta densidade com superfície texturizada para automassagem, liberação miofascial, aquecimento muscular e recuperação pós-treino.',
    price: 159.9,
    priceDiscount: 119.9,
  },
  {
    id: 15,
    name: 'Bola de Futebol Campo Adidas Pro',
    category: 'Esportes Coletivos',
    brand: 'Adidas',
    gender: 'Unissex',
    condition: 'Novo',
    image:
      'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=900&q=80',
    ],
    sizes: ['Único'],
    colors: [],
    description:
      'Bola de futebol de campo com gomos selados termicamente para menor absorção de água, trajetória precisa e toque macio em gramados naturais.',
    price: 249.9,
  },
];

export const PURE_HOME_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1440&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1440&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1440&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1440&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1440&q=80',
  },
];

export const PURE_FEATURED_COLLECTIONS = [
  {
    title: 'Treino & Musculação',
    discount: '30% OFF',
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Corrida & Performance',
    discount: '25% OFF',
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Yoga & Bem-Estar',
    discount: '20% OFF',
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
  },
];

export const PURE_PRODUCT_GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
  },
];

// ============================================================================
// TEMA 2: DRIP STORE ORIGINAL (Fidelidade 100% Exata ao Figma / Repositório)
// ============================================================================
export const DRIP_PRODUCTS_DATA = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    image: 'public/product-thumb-1.jpeg',
    price: 200,
    priceDiscount: 149.9,
  },
  {
    id: 2,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    category: 'Tênis',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Novo',
    image: 'public/product-thumb-2.jpeg',
    price: 219.9,
    priceDiscount: 149.9,
  },
  {
    id: 3,
    name: 'Tênis Adidas Coreracer Feminino',
    category: 'Tênis',
    brand: 'Adidas',
    gender: 'Feminino',
    condition: 'Novo',
    image: 'public/product-thumb-3.jpeg',
    price: 189.9,
    priceDiscount: 129.9,
  },
  {
    id: 4,
    name: 'Tênis Puma Smash V2 Unissex',
    category: 'Tênis',
    brand: 'Puma',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-4.jpeg',
    price: 249.9,
  },
  {
    id: 5,
    name: 'Tênis Balenciaga Speed Trainer',
    category: 'Utilitário',
    brand: 'Balenciaga',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-5.jpeg',
    price: 299.9,
    priceDiscount: 199.9,
  },
  {
    id: 6,
    name: 'K-Swiss V8 Pro - Corrida',
    category: 'Corrida',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    image: 'public/product-thumb-1.jpeg',
    price: 200,
    priceDiscount: 149.9,
  },
  {
    id: 7,
    name: 'Nike Air Max Casual',
    category: 'Casual',
    brand: 'Nike',
    gender: 'Feminino',
    condition: 'Novo',
    image: 'public/product-thumb-2.jpeg',
    price: 320,
    priceDiscount: 219.9,
  },
  {
    id: 8,
    name: 'Adidas Ultraboost Esporte e Lazer',
    category: 'Esporte e lazer',
    brand: 'Adidas',
    gender: 'Masculino',
    condition: 'Usado',
    image: 'public/product-thumb-3.jpeg',
    price: 179.9,
  },
  {
    id: 9,
    name: 'Puma Runner Corrida Feminino',
    category: 'Corrida',
    brand: 'Puma',
    gender: 'Feminino',
    condition: 'Novo',
    image: 'public/product-thumb-4.jpeg',
    price: 210,
    priceDiscount: 159.9,
  },
  {
    id: 10,
    name: 'K-Swiss Classic Casual',
    category: 'Casual',
    brand: 'K-Swiss',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-5.jpeg',
    price: 190,
    priceDiscount: 139.9,
  },
  {
    id: 11,
    name: 'Nike Air Force 1 Street',
    category: 'Casual',
    brand: 'Nike',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-1.jpeg',
    price: 280,
    priceDiscount: 199.9,
  },
  {
    id: 12,
    name: 'Adidas Duramo SL Corrida',
    category: 'Corrida',
    brand: 'Adidas',
    gender: 'Masculino',
    condition: 'Novo',
    image: 'public/product-thumb-2.jpeg',
    price: 230,
    priceDiscount: 169.9,
  },
  {
    id: 13,
    name: 'K-Swiss V8 Streetwear',
    category: 'Esporte e lazer',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    image: 'public/product-thumb-3.jpeg',
    price: 200,
    priceDiscount: 149.9,
  },
  {
    id: 14,
    name: 'Nike SB Check Solar',
    category: 'Casual',
    brand: 'Nike',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-4.jpeg',
    price: 199.9,
    priceDiscount: 149.9,
  },
  {
    id: 15,
    name: 'Puma Wired Run',
    category: 'Corrida',
    brand: 'Puma',
    gender: 'Unissex',
    condition: 'Novo',
    image: 'public/product-thumb-5.jpeg',
    price: 179.9,
  },
];

export const DRIP_HOME_SLIDES = [
  { src: 'public/home-slide-1.jpeg' },
  { src: 'public/home-slide-2.jpeg' },
  { src: 'public/home-slide-3.jpeg' },
  { src: 'public/home-slide-4.jpeg' },
  { src: 'public/home-slide-5.jpeg' },
  { src: 'public/home-slide-6.jpeg' },
  { src: 'public/home-slide-7.jpeg' },
  { src: 'public/home-slide-8.jpeg' },
];

export const DRIP_FEATURED_COLLECTIONS = [
  { src: 'public/collection-1.png' },
  { src: 'public/collection-2.png' },
  { src: 'public/collection-3.png' },
];

export const DRIP_PRODUCT_GALLERY_IMAGES = [
  { src: 'public/produc-image-1.jpeg' },
  { src: 'public/produc-image-2.jpeg' },
  { src: 'public/produc-image-3.jpeg' },
  { src: 'public/produc-image-4.jpeg' },
  { src: 'public/produc-image-5.jpeg' },
];

// Exports padrão para compatibilidade direta
export const PRODUCTS_DATA = PURE_PRODUCTS_DATA;
export const HOME_SLIDES = PURE_HOME_SLIDES;
export const FEATURED_COLLECTIONS = PURE_FEATURED_COLLECTIONS;
export const PRODUCT_GALLERY_IMAGES = PURE_PRODUCT_GALLERY_IMAGES;

export const resolveAssetUrl = (src) => {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
    return src;
  }
  if (src.startsWith('public/')) {
    return '/' + src.replace(/^public\//, '');
  }
  return '/' + src;
};
