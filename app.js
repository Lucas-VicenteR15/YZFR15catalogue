const products = [
  {
    name: "Filtro de ar esportivo DNA Filters",
    category: "Reposição",
    description: "Filtro esportivo lavável para Yamaha YZF R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_713642-MLB113085947897_062026-O.webp",
    badge: "DESEMPENHO",
    url: "https://meli.la/2Ag4FxS"
  },
  {
    name: "Manete direito de freio original Yamaha",
    category: "Reposição",
    description: "Manete de freio direito original para YZF R15, FZ15 e Fazer.",
    image: "https://http2.mlstatic.com/D_NQ_NP_614612-MLB93216303345_092025-O.webp",
    badge: "ORIGINAL",
    url: "https://meli.la/2JMfWvz"
  },
  {
    name: "Manete de embreagem original Yamaha",
    category: "Reposição",
    description: "Manete esquerdo de embreagem original para Yamaha YZF R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_859782-MLB75723496614_042024-O.webp",
    badge: "ORIGINAL",
    url: "https://meli.la/26Ybn4D"
  },
  {
    name: "Kit pneus Pirelli Sport Demon",
    category: "Pneus",
    description: "Par de pneus 110/70-17 e 140/70-17.",
    image: "https://http2.mlstatic.com/D_NQ_NP_959583-MLA98282009044_112025-O.webp",
    badge: "KIT",
    url: "https://meli.la/1AZopAd"
  },
  {
    name: "Kit pneus Michelin Pilot Street 2",
    category: "Pneus",
    description: "Par de pneus 110/70-17 e 140/70-17 Michelin.",
    image: "https://http2.mlstatic.com/D_NQ_NP_902635-MLA102465967800_122025-O.webp",
    badge: "KIT",
    url: "https://meli.la/1wLU8oA"
  },
  {
    name: "Kit relação Riffel com retentor",
    category: "Reposição",
    description: "Kit relação prata para YZF R15 V3/V4 2023 a 2025.",
    image: "https://http2.mlstatic.com/D_NQ_NP_658087-MLB91527385843_092025-O.webp",
    badge: "TRANSMISSÃO",
    url: "https://meli.la/2n9omPV"
  },
  {
    name: "Kit pneus Pirelli Diablo Rosso 2",
    category: "Pneus",
    description: "Par de pneus 110/70-17 e 140/70-17.",
    image: "https://http2.mlstatic.com/D_NQ_NP_772302-MLB114328794719_072026-O.webp",
    badge: "ESPORTIVO",
    url: "https://meli.la/33GELh2"
  },
  {
    name: "Kit relação Riffel YZF R15",
    category: "Reposição",
    description: "Kit relação com retentor para YZF R15 V3/V4 2022 a 2025.",
    image: "https://http2.mlstatic.com/D_NQ_NP_664182-MLB98895484737_112025-O.webp",
    badge: "TRANSMISSÃO",
    url: "https://meli.la/332TNkL"
  },
  {
    name: "Kit pneus Pirelli Diablo Rosso 3",
    category: "Pneus",
    description: "Par de pneus 110/70-17 e 140/70-17 Pirelli.",
    image: "https://http2.mlstatic.com/D_NQ_NP_628918-MLA99419828408_112025-O.webp",
    badge: "ESPORTIVO",
    url: "https://meli.la/2YVS5Fe"
  },
  {
    name: "Relé de pisca-alerta universal",
    category: "Acessórios",
    description: "Relé universal para instalação de pisca-alerta em motos.",
    image: "https://http2.mlstatic.com/D_NQ_NP_658950-MLB71982078755_092023-O.webp",
    badge: "ELÉTRICA",
    url: "https://meli.la/2ZAsa3L"
  },
  {
    name: "Limpa corrente Razux Foxy",
    category: "Limpeza",
    description: "Removedor de óleo, graxa e piche para corrente, frasco de 240 ml.",
    image: "https://http2.mlstatic.com/D_NQ_NP_808152-MLB100864048815_122025-O.webp",
    badge: "LIMPEZA",
    url: "https://meli.la/2JTBBPE"
  },
  {
    name: "Kit de reparo para pneus",
    category: "Acessórios",
    description: "Kit com 23 peças e remendo tipo macarrão para pneus sem câmara.",
    image: "https://http2.mlstatic.com/D_NQ_NP_904487-MLB105697271093_012026-O.webp",
    badge: "EMERGÊNCIA",
    url: "https://meli.la/2aB7rXU"
  },
  {
    name: "Viseira fumê para capacete Axxis/ASX",
    category: "Acessórios",
    description: "Viseira colorida fumê para capacetes Eagle, Draken e City.",
    image: "https://http2.mlstatic.com/D_NQ_NP_721279-MLB89301630440_082025-O.webp",
    badge: "EQUIPAMENTO",
    url: "https://meli.la/2ScQwvs"
  },
  {
    name: "Aditivo de radiador Yamalube",
    category: "Reposição",
    description: "Líquido de arrefecimento Yamaha Yamalube azul, embalagem de 1 litro.",
    image: "https://http2.mlstatic.com/D_NQ_NP_850776-MLA92777495061_092025-O.webp",
    badge: "MANUTENÇÃO",
    url: "https://meli.la/18abqyr"
  },
  {
    name: "Lubrificante de corrente Motul C2",
    category: "Limpeza",
    description: "Lubrificante Chain Lube Road em spray, frasco de 200 ml.",
    image: "https://http2.mlstatic.com/D_NQ_NP_762861-MLB92299809155_092025-O.webp",
    badge: "MANUTENÇÃO",
    url: "https://meli.la/1gAnnA4"
  },
  {
    name: "Slider protetor de carenagem",
    category: "Acessórios",
    description: "Protetor de carenagem para Yamaha R15 2024 a 2026.",
    image: "https://http2.mlstatic.com/D_NQ_NP_765154-MLB89836253293_082025-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/2S9nJ4K"
  },
  {
    name: "Slider traseiro de balança",
    category: "Acessórios",
    description: "Slider traseiro para a balança da Yamaha R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_668851-MLB90439877622_082025-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/1JCJbzo"
  },
  {
    name: "Slider dianteiro Speed Style",
    category: "Acessórios",
    description: "Slider dianteiro para Yamaha R15 2023 a 2025.",
    image: "https://http2.mlstatic.com/D_NQ_NP_909177-MLB88649802982_072025-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/2cSXzfg"
  },
  {
    name: "Caixa de direção com esferas",
    category: "Reposição",
    description: "Caixa de direção para Yamaha R15 2023 e 2024.",
    image: "https://http2.mlstatic.com/D_NQ_NP_752647-MLB111308974558_052026-O.webp",
    badge: "DIREÇÃO",
    url: "https://meli.la/2Xi26n8"
  },
  {
    name: "Tela protetora de radiador",
    category: "Acessórios",
    description: "Protetor preto para o radiador da Yamaha R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_785811-MLB75242330303_032024-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/27ZmMxB"
  },
  {
    name: "Protetor de mesa em acrílico",
    category: "Acessórios",
    description: "Protetor de mesa desenvolvido para a Yamaha R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_728102-MLB113474146473_062026-O.webp",
    badge: "ACABAMENTO",
    url: "https://meli.la/34msUss"
  },
  {
    name: "Tampa frontal de entrada de ar",
    category: "Carenagens",
    description: "Tampa de entrada de ar frontal para Yamaha R15 V3.",
    image: "https://http2.mlstatic.com/D_NQ_NP_888515-CBT97738778033_112025-O.webp",
    badge: "CARENAGEM",
    url: "https://meli.la/1AsRDaU"
  },
  {
    name: "Winglet de carenagem",
    category: "Carenagens",
    description: "Aleta aerodinâmica universal para carenagem da Yamaha R15 V3.",
    image: "https://http2.mlstatic.com/D_NQ_NP_807531-MLB105714891206_012026-O.webp",
    badge: "ESTILO",
    url: "https://meli.la/1yJucha"
  },
  {
    name: "Para-brisa para Yamaha R15 V3",
    category: "Carenagens",
    description: "Para-brisa em ABS para Yamaha YZF R15 V3.",
    image: "https://http2.mlstatic.com/D_NQ_NP_940761-CBT73638113033_122023-O.webp",
    badge: "CARENAGEM",
    url: "https://meli.la/2MwcAFn"
  },
  {
    name: "Película PPF para painel",
    category: "Acessórios",
    description: "Película protetora de painel compatível com R15 2024 e 2025.",
    image: "https://http2.mlstatic.com/D_NQ_NP_740645-MLB85018574753_052025-O.webp",
    badge: "PAINEL",
    url: "https://meli.la/32nHKdM"
  },
  {
    name: "Antena corta-pipa",
    category: "Acessórios",
    description: "Antena corta-pipa preta para Yamaha YZF R15.",
    image: "https://http2.mlstatic.com/D_NQ_NP_823767-MLB83026891637_032025-O.webp",
    badge: "SEGURANÇA",
    url: "https://meli.la/1StNiXb"
  },
  {
    name: "Filtro de óleo original Yamaha",
    category: "Reposição",
    description: "Filtro de óleo genuíno para YZF R15 2024 a 2026.",
    image: "https://http2.mlstatic.com/D_NQ_NP_633116-MLB97520608112_112025-O.webp",
    badge: "ORIGINAL",
    url: "https://meli.la/2ZqqZrW"
  },
  {
    name: "Kit de pastilhas de freio",
    category: "Reposição",
    description: "Pastilhas dianteira e traseira para Yamaha YZF R15 2024.",
    image: "https://http2.mlstatic.com/D_NQ_NP_710173-MLB112328000865_052026-O.webp",
    badge: "FREIOS",
    url: "https://meli.la/2iWWDeX"
  },
  {
    name: "Limpador de corrente Vonixx 1L",
    category: "Limpeza",
    description: "Desengraxante potente para limpeza da corrente da moto.",
    image: "https://http2.mlstatic.com/D_NQ_NP_717037-MLA99932444085_112025-O.webp",
    badge: "LIMPEZA",
    url: "https://meli.la/1kXj38r"
  },
  {
    name: "Lava-auto V-Floc Vonixx 1,5L",
    category: "Limpeza",
    description: "Shampoo automotivo superconcentrado para uma lavagem segura.",
    image: "https://http2.mlstatic.com/D_NQ_NP_972986-MLA99917514653_112025-O.webp",
    badge: "LIMPEZA",
    url: "https://meli.la/2mUHd1H"
  },
  {
    name: "Restaurador de plásticos Restaurax Vonixx",
    category: "Limpeza",
    description: "Revitalizador preto para plásticos, embalagem de 500 ml.",
    image: "https://http2.mlstatic.com/D_NQ_NP_840984-MLB92655477425_092025-O.webp",
    badge: "ACABAMENTO",
    url: "https://meli.la/1ikppNq"
  },
  {
    name: "Shampoo desengraxante Moto-V Vonixx",
    category: "Limpeza",
    description: "Shampoo concentrado de 1,5 litro desenvolvido para motos.",
    image: "https://http2.mlstatic.com/D_NQ_NP_762769-MLA110758544617_042026-O.webp",
    badge: "LIMPEZA",
    url: "https://meli.la/2NrdTM4"
  },
  {
    name: "Kit microfibra, luva e pincéis Vonixx",
    category: "Limpeza",
    description: "Kit para lavagem e detalhamento interno e externo.",
    image: "https://http2.mlstatic.com/D_NQ_NP_756133-MLA107808026242_032026-O.webp",
    badge: "KIT",
    url: "https://meli.la/2ncj7wu"
  },
  {
    name: "Kit Restaurax e shampoo V-Floc Vonixx",
    category: "Limpeza",
    description: "Kit para lavagem e revitalização dos plásticos da moto.",
    image: "https://http2.mlstatic.com/D_NQ_NP_651873-MLA99911699891_112025-O.webp",
    badge: "KIT",
    url: "https://meli.la/23TJKk1"
  },
  {
    name: "Shampoo desengraxante V-Mol Vonixx 1,5L",
    category: "Limpeza",
    description: "Produto concentrado para lavagem e remoção de sujeira pesada.",
    image: "https://http2.mlstatic.com/D_NQ_NP_868253-MLA109853292346_042026-O.webp",
    badge: "LIMPEZA",
    url: "https://meli.la/1E6jNAK"
  },
  {
    name: "Cavalete traseiro universal",
    category: "Acessórios",
    description: "Cavalete com suporte para balança e manutenção da moto.",
    image: "https://http2.mlstatic.com/D_NQ_NP_808572-MLB88746121618_082025-O.webp",
    badge: "MANUTENÇÃO",
    url: "https://meli.la/335AHF9"
  },
  {
    name: "Par de intercomunicadores V6 Plus",
    category: "Acessórios",
    description: "Kit Bluetooth sem fio para comunicação entre capacetes.",
    image: "https://http2.mlstatic.com/D_NQ_NP_643537-MLA104574048761_012026-O.webp",
    badge: "COMUNICAÇÃO",
    url: "https://meli.la/1QTpiZL"
  },
  {
    name: "Slider dianteiro em nylon para R15",
    category: "Acessórios",
    description: "Protetor dianteiro compatível com Yamaha YZF R15 2024 ou posterior.",
    image: "https://http2.mlstatic.com/D_NQ_NP_752321-MLB80536497412_112024-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/1uuGdYA"
  },
  {
    name: "Capa impermeável e forrada para moto",
    category: "Acessórios",
    description: "Capa preta para proteger a moto contra sol, chuva e granizo.",
    image: "https://http2.mlstatic.com/D_NQ_NP_768685-MLA99899453313_112025-O.webp",
    badge: "PROTEÇÃO",
    url: "https://meli.la/17TKkec"
  },
  {
    name: "Escapamento esportivo MTG com saída dupla",
    category: "Acessórios",
    description: "Escapamento esportivo MTG com ponteira de saída dupla para moto.",
    image: "./assets/shopee-1.png",
    badge: "ESCAPAMENTO",
    url: "https://s.shopee.com.br/60QF0nkLR9"
  },
  {
    name: "Protetor de mesa superior para R15",
    category: "Acessórios",
    description: "Protetor instalado sobre a mesa superior da Yamaha YZF R15.",
    image: "./assets/shopee-2.png",
    badge: "PROTEÇÃO",
    url: "https://s.shopee.com.br/8Ko9n7S859"
  },
  {
    name: "Kit com duas escovas para corrente",
    category: "Limpeza",
    description: "Duas escovas próprias para a limpeza da corrente da moto.",
    image: "./assets/shopee-3.png",
    badge: "LIMPEZA",
    url: "https://s.shopee.com.br/1BKzFy1oAi"
  },
  {
    name: "Escapamento esportivo Disarsz completo",
    category: "Acessórios",
    description: "Sistema de escapamento esportivo completo para Yamaha R15.",
    image: "./assets/shopee-4.png",
    badge: "ESCAPAMENTO",
    url: "https://s.shopee.com.br/AAFnym3qGf"
  },
  {
    name: "Bolha iridescente para Yamaha R15",
    category: "Carenagens",
    description: "Bolha para-brisa iridescente para personalização da Yamaha YZF R15.",
    image: "./assets/shopee-5.png",
    badge: "ESTILO",
    url: "https://s.shopee.com.br/3B63dw07ea"
  },
  {
    name: "Kit de adesivos protetores para R15",
    category: "Acessórios",
    description: "Adesivos pretos para proteção do tanque e das laterais da moto.",
    image: "./assets/shopee-6.png",
    badge: "PROTEÇÃO",
    url: "https://s.shopee.com.br/7VF2nunU2s"
  },
  {
    name: "Kit 3 em 1 de manetes e manoplas para R15",
    category: "Acessórios",
    description: "Kit com manetes reguláveis, manoplas e protetores de manete.",
    image: "./assets/shopee-7.png",
    badge: "KIT",
    url: "https://s.shopee.com.br/3LPTqGu0PU"
  }
];

let activeCategory = "Todos";
let searchTerm = "";

const grid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const resultsTitle = document.querySelector("#resultsTitle");
const searchInput = document.querySelector("#searchInput");
const categoryButtons = [...document.querySelectorAll("[data-category]")];

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getVisibleProducts() {
  const query = normalize(searchTerm);
  return products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchable = normalize(`${product.name} ${product.category} ${product.description}`);
    return matchesCategory && searchable.includes(query);
  });
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "item" : "itens"}`;
  resultsTitle.textContent = activeCategory === "Todos" ? "Itens selecionados" : activeCategory;
  emptyState.hidden = visibleProducts.length > 0;

  grid.innerHTML = visibleProducts.map((product) => {
    const isShopee = product.url.includes("shopee.com.br");
    const store = isShopee ? "Shopee" : "Mercado Livre";
    const photo = product.image
      ? `<img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy">`
      : `<div class="product-placeholder" role="img" aria-label="Produto da Shopee"><strong>SHOPEE</strong><span>Veja a foto no anúncio</span></div>`;

    return `
    <article class="product-card">
      <div class="product-image">
        <span class="product-badge">${product.badge}</span>
        <span class="store-badge ${isShopee ? "store-shopee" : "store-mercado-livre"}">${store}</span>
        ${photo}
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <span class="price-label">Preço e disponibilidade</span>
        <strong class="product-price">Consultar no anúncio</strong>
        <a
          class="button button-primary product-link ${isShopee ? "button-shopee" : ""}"
          href="${product.url}"
          target="_blank"
          rel="sponsored noopener noreferrer"
          aria-label="Ver ${product.name} na loja ${store}"
        >
          Ver na ${store}
        </a>
        <small class="affiliate-note">Link de afiliado ${store} • o preço pode variar</small>
      </div>
    </article>
  `;
  }).join("");
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
    document.querySelector(".results-heading").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProducts();
});

renderProducts();
