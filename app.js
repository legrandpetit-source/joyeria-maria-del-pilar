/**
 * BOUTIQUE MARÍA DEL PILAR - MEDITERRANEAN SUN ATELIER
 * Joyería en Plata 925 de Ley & Bisutería Fina de Autor
 * Experiencia 100% Responsiva: Móvil & Computador de Escritorio (Desktop)
 * Generado y Diseñado con Stitch Design System
 */

class JoyeriaApp {
  constructor() {
    this.STORAGE_KEY_PRODUCTS = 'mdp_boutique_products_v5_stitch_desktop';
    this.STORAGE_KEY_MENUS = 'mdp_boutique_menus_v5_stitch_desktop';
    this.STORAGE_KEY_CART = 'mdp_boutique_cart_v5';
    this.STORAGE_KEY_ORDERS = 'mdp_boutique_orders_v5';
    this.STORAGE_KEY_SETTINGS = 'mdp_boutique_settings_v5';
    this.STORAGE_KEY_FAVORITES = 'mdp_boutique_favs_v5';

    // Estado inicial
    this.products = this.loadProducts();
    this.menus = this.loadMenus();
    this.cart = this.loadCart();
    this.orders = this.loadOrders();
    this.settings = this.loadSettings();
    this.favorites = this.loadFavorites();

    this.activeCategory = 'Todos';
    this.searchQuery = '';
    this.showingFavoritesOnly = false;
    this.currentLightboxProduct = null;
    this.currentLightboxPhotoIndex = 0;

    this.init();
  }

  // ==========================================================================
  // INICIALIZACIÓN
  // ==========================================================================
  init() {
    this.renderCategoryPills();
    this.renderProducts();
    this.updateCartBadge();
    this.renderCartDrawer();
    this.renderAdminProductsTable();
    this.renderAdminMenusTree();
    this.renderAdminOrders();
    this.populateParentMenuSelect();

    // Eventos globales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeZoomModal();
        this.closeCartDrawer();
        this.closeCheckoutModal();
        this.closeProductModal();
      }
    });
  }

  // ==========================================================================
  // CATÁLOGO DE JOYAS (8 PIEZAS DE AUTOR CON IMÁGENES EXACTAS DE STITCH)
  // ==========================================================================
  loadProducts() {
    const saved = localStorage.getItem(this.STORAGE_KEY_PRODUCTS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 6) return parsed;
      } catch (e) {}
    }

    return [
      {
        id: 'p1',
        name: 'Collar Choker Turquesa & Sol',
        category: 'Plata 925',
        subcategory: 'Collares & Chokers',
        material: 'Plata 925 y turquesa natural del norte',
        price: 24990,
        salePrice: null,
        stock: 8,
        rating: 4.9,
        reviewsCount: 42,
        badge: 'Bestseller ☀️',
        featured: true,
        description: 'Delicado choker forjado en plata esterlina 925 con auténticas cuentas de turquesa marina y dije central grabado con sol radiante. Llena de luz y frescura mediterránea.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLAa05qwVneSq7l2dF0aIpbniUjMoGMVLJrTxpS7iuCdtbCryWRrWNnBtPS3OP3XAarKJ_BWjP04UBvizrMm-B4-B39zJ-dNOoVBkjj4lNykJAiZYtSt31JaJd-yMOHLM8BjboL-jeCR9EKN2G2RF8O_cLE_-RNV0fDWrP28iTRNGt_13yUpUi0GzLUzwB1pYXixwJ1R9ZCOyp-bdKZi2OLjDS1PWiWneS4oHUaevUTn_DE_fDOzoM7RhIyoiu_d1CVaEYfvbqG1i',
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p2',
        name: 'Aros Candongas Arcoíris Pop',
        category: 'Bisutería Colorida',
        subcategory: 'Aros & Candongas',
        material: 'Micro-circonias alegres multicolor',
        price: 18990,
        salePrice: null,
        stock: 10,
        rating: 5.0,
        reviewsCount: 28,
        badge: 'Nuevo',
        featured: true,
        description: 'Vibrantes aros candongas engastados con un arcoíris de micro-circonias suizas multicolor sobre plata 925. Resplandecen con luz y alegría festiva.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_tQTT22RhL4M-_xWQjsHTYfjCSFBnhq9TN_fniBQJSN_jOtYa0j2SmSFw6esHTCQAA7o7l6KjxyE7YEOVvFQhFrATY386pN6xsRYImKW-Ol4G16tU0-TSAhwMo4ra1g4wgiFF1nqFk0DyMdX5Yk4PnKlhQG_1xlSzZiLtHHx7cMPlYV0B9X7U_j9_QvjnZcnrAhCsYFxuLcA6sIsCNQ2UnxjyZOQP5ikdVptskZkIgppicjTeqJtEBKgfAX_THKEza2Rc-qYQItO',
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p3',
        name: 'Pulsera Mar Mediterráneo',
        category: 'Bisutería Colorida',
        subcategory: 'Pulseras',
        material: 'Perlas de río y vidrio soplado celeste',
        price: 21500,
        salePrice: null,
        stock: 6,
        rating: 4.9,
        reviewsCount: 35,
        badge: 'Hecho con cariño 🧡',
        featured: true,
        description: 'Pulsera artesanal que reúne perlas cultivadas naturales de río con cuentas translúcidas de cristal azul mediterráneo y broche de plata 925.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCuQQEI_MOPFBE6sJWqEiM8nY57bX088ep4G4XtgzzKNynoDGoZfuiz4vonhKv8puLlsLYNn5s8k7b4RlA1TMlKGTf9aGAKVoeeuFwfpoTIltqk7wdFktKrf3mgUE_NjLS7PqU8Ibh2dlzt9V55xSAK32m1fUhmC9rq2bVh27lOxPG-Y8lNKRgsQ1RdnRYG4ZRcM4aPg2Kzr6BbOH25hQtKLYj1torMvL0QUtdCYmtvlKsUeOIxNEH44RgFjAepZvO0ZXL9y8YJ1Xa4',
          'https://images.unsplash.com/photo-1611591475878-29e5b3264426?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p4',
        name: 'Anillo Girasol Citrino 925',
        category: 'Plata 925',
        subcategory: 'Anillos & Dijes',
        material: 'Gema citrino natural engarzada en plata pura',
        price: 26990,
        salePrice: null,
        stock: 5,
        rating: 4.8,
        reviewsCount: 19,
        badge: 'Plata 925 ✨',
        featured: true,
        description: 'Anillo en plata esterlina 925 de ley coronado con un citrino natural amarillo miel facetado con motivo de girasol radiante.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCHANqN423NAMVqHVPlfkpNxvWUTIapOyfIwONZ6uaFof_jSoRfCaPkd87O371RMZLeddie_A3jOXnoCMGK_L6kwj-S99SZoWdIKEakDAnF6NerQhMzZmlmivM6PwdMnnPiiuQlxCrEdWZU7imElXMM1CKiskHULGfPPwWZBWZD3jNTbF_NUzXi_6kSWmxQJxoN30bBKjXWgcfwMUeZEl8mDfUkFMGqr_pA8LWBpbYFpYgU0x7xvPAWvPT0KkLC-XS0mn1gJqQ8H7dW',
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p5',
        name: 'Collar Medalla Sol Radiante',
        category: 'Plata 925',
        subcategory: 'Collares & Chokers',
        material: 'Dije sol protector en plata 925 envejecida',
        price: 28990,
        salePrice: null,
        stock: 7,
        rating: 5.0,
        reviewsCount: 51,
        badge: 'Favorito del Atelier',
        featured: true,
        description: 'Medalla grabada al relieve con los rayos del sol mediterráneo en plata 925 maciza de ley. Acompañada de cadena diamantada de 45 cm.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD-jFyptI62hqjWhfOGNMDVd1VevcQLnbPuEZ-gCB_jxz2o1pQKFV9U4AsG-sIBrBrKX6KDC6jW2ef3N_a_Yak9qYDiXhldBDuxYBReEdvm9NrGkhdZCq9YJlWLtvrOIGiKFwYqUkipWg6Qic8--eROb_3_cVb5UzSBneTiHFbvXtb9Z-HtitmmRfoWY3Y1uLIJSxWwDDklNm2yZ7Vs7Krh0ZzkNWzedUlEYPiIgA71pqT6_z3bVUfYf2DyUdAduIPx7l-ZVAYPKpC3',
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p6',
        name: 'Tobillera Brisa Marina',
        category: 'Colección Sol Verano',
        subcategory: 'Pulseras',
        material: 'Hilos resistentes y dijes playeros en plata',
        price: 16500,
        salePrice: null,
        stock: 9,
        rating: 4.9,
        reviewsCount: 23,
        badge: 'Verano Pop 🌊',
        featured: true,
        description: 'Tobillera playera tejida con hilos impermeables en tonos turquesa y coral, adornada con mini dijes de plata 925 de caracolas y estrellas marinas.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBdfR7HMIcHHHHaX-8m16Iz7jT4r8btUXf8np0uHMK_-xJExsHOmW6Nsr_gIAOT2_RlAJt6Wih87LfNocN4YPod0cLe7yJmKRnmdSeWBMrCsX_pOGQOlPHXgnrbckETyX04Yc9rVd_Lj77Pc4yQ1zYidC1OIx67vhVJY6w-NTU2YgDro6Bd9clF0Ogy9hfU5L8pFMcSSB9y5n5vkkKpPm9WNWpSvwCWPyRR01KLLnlha0b03f-ni_f-ai6cq1_FuqGCq6QG7DDJuV4x',
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p7',
        name: 'Aros Huggies Ola Turquesa',
        category: 'Plata 925',
        subcategory: 'Aros & Candongas',
        material: 'Plata ley 925 con esmalte turquesa y sol',
        price: 22990,
        salePrice: null,
        stock: 7,
        rating: 4.9,
        reviewsCount: 31,
        badge: 'Exclusivo',
        featured: true,
        description: 'Aros huggies con patrón de olas marinas en esmalte turquesa y rayos solares finamente cincelados en plata 925 pura.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBBg7qSwPihl51RWwFG9dZ2IKg_JRH7hDpH5tQW2jZCETGYrAUeLjES5wB-jD0SSGzGWECHefx2-D-loVVTsous7dx4ONB2FLc4axdEvaLd-p4JqXC5seYMDtVHEYN0JjUxb-chFoCcxYCa5ziQm-L7NNmEPvj8vKfp_QFeCXCCE4Kv3QvKhuIhJlV9yKtw5pD61q7g5UCPFr5rGyGOSlsGjkdU3L8bKs2RpqfOLAIKmyjwE2Dq27r2ubxaWvmFC1D4NzU85WfF0UzR',
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        id: 'p8',
        name: 'Pack Dúo Brillo Estival',
        category: 'Colección Sol Verano',
        subcategory: 'Collares & Chokers',
        material: 'Set collar y aretes en caja de regalo pastel',
        price: 34990,
        salePrice: null,
        stock: 4,
        rating: 5.0,
        reviewsCount: 17,
        badge: 'Listo para regalar 🎁',
        featured: true,
        description: 'Set coordinado de colgante sol y aros gota en plata 925 con detalles ámbar marino, presentado en estuche rígido de regalo.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAfG_FLSIDETLFpWEnGtSskbYyc_3cL3h_aGzcn3XeciKn_8Od0U5dk8ZqshkSSTCdTeCTbKlcK56grW7gSDdWQtaboSyOTjk0cd8A_RqHvvsqNBuuZhiJXzkNT3BsJISXusVtRbIb2LAw4F2crWBhguz7BjI6t6Jjt5WrKmqBy9k9bWqClEVpk8RfJsmarOsO-KybVVlFxyzmUqSZKM0y_Euye9yzubFeRpwrwPz38SJ_lQ6rS6iKwSNjDlgwx0nxcbn6EhcT-IMFW',
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80'
        ]
      }
    ];
  }

  saveProducts() {
    localStorage.setItem(this.STORAGE_KEY_PRODUCTS, JSON.stringify(this.products));
    this.renderProducts();
    this.renderAdminProductsTable();
  }

  loadMenus() {
    const saved = localStorage.getItem(this.STORAGE_KEY_MENUS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return [
      { id: 'm1', name: 'Plata 925', icon: '💎', submenus: ['Collares & Chokers', 'Anillos & Dijes'] },
      { id: 'm2', name: 'Bisutería Colorida', icon: '✨', submenus: ['Aros & Candongas', 'Pulseras'] },
      { id: 'm3', name: 'Colección Sol Verano', icon: '☀️', submenus: ['Edición Turquesa & Mar'] }
    ];
  }

  saveMenus() {
    localStorage.setItem(this.STORAGE_KEY_MENUS, JSON.stringify(this.menus));
    this.renderCategoryPills();
    this.renderAdminMenusTree();
    this.populateParentMenuSelect();
  }

  loadCart() {
    const saved = localStorage.getItem(this.STORAGE_KEY_CART);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  }

  saveCart() {
    localStorage.setItem(this.STORAGE_KEY_CART, JSON.stringify(this.cart));
    this.updateCartBadge();
    this.renderCartDrawer();
  }

  loadOrders() {
    const saved = localStorage.getItem(this.STORAGE_KEY_ORDERS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  }

  saveOrders() {
    localStorage.setItem(this.STORAGE_KEY_ORDERS, JSON.stringify(this.orders));
    this.renderAdminOrders();
  }

  loadSettings() {
    const saved = localStorage.getItem(this.STORAGE_KEY_SETTINGS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      whatsapp: '+56912345678',
      freeShippingThreshold: 30000
    };
  }

  saveSettings() {
    localStorage.setItem(this.STORAGE_KEY_SETTINGS, JSON.stringify(this.settings));
  }

  loadFavorites() {
    const saved = localStorage.getItem(this.STORAGE_KEY_FAVORITES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return ['p1', 'p5'];
  }

  saveFavorites() {
    localStorage.setItem(this.STORAGE_KEY_FAVORITES, JSON.stringify(this.favorites));
    this.updateFavoritesBadge();
  }

  // ==========================================================================
  // CATEGORÍAS (PÍLDORAS CON ESTILO EXACTO DE STITCH)
  // ==========================================================================
  renderCategoryPills() {
    const container = document.getElementById('categoryNavPills');
    if (!container) return;

    const categories = [
      { id: 'Todos', label: '☀️ Todo', icon: 'sunny' },
      { id: 'Collares', label: 'Collares' },
      { id: 'Aros & Candongas', label: 'Aros & Candongas' },
      { id: 'Pulseras', label: 'Pulseras' },
      { id: 'Anillos & Dijes', label: 'Anillos & Dijes' },
      { id: 'Plata 925', label: 'Plata 925 Pura' }
    ];

    container.innerHTML = categories.map(cat => {
      const isActive = !this.showingFavoritesOnly && this.activeCategory === cat.id;
      if (isActive) {
        return `
          <button onclick="app.filterByCategory('${cat.id}')" class="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary text-[12px] md:text-[13px] font-semibold shadow-sm active:scale-95 transition-all">
            ${cat.icon ? `<span class="material-symbols-outlined text-[15px]" style="font-variation-settings: 'FILL' 1;">${cat.icon}</span>` : ''}
            <span>${cat.label}</span>
          </button>
        `;
      } else {
        return `
          <button onclick="app.filterByCategory('${cat.id}')" class="shrink-0 px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-[12px] md:text-[13px] font-semibold hover:bg-surface-container active:scale-95 transition-all border border-outline-variant/30">
            ${cat.label}
          </button>
        `;
      }
    }).join('');
  }

  filterByCategory(categoryName) {
    this.activeCategory = categoryName;
    this.showingFavoritesOnly = false;
    this.showStoreView();
    this.renderCategoryPills();
    this.renderProducts();

    const titleEl = document.getElementById('catalogSectionTitle');
    if (titleEl) {
      titleEl.textContent = categoryName === 'Todos' ? 'Favoritos Radiantes' : `Colección ${categoryName}`;
    }

    // Scroll suave hacia la sección catálogo si se hizo clic en el sub-nav
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl && window.scrollY < 200) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showFavoritesOnly() {
    this.showingFavoritesOnly = !this.showingFavoritesOnly;
    this.showStoreView();
    this.renderCategoryPills();
    this.renderProducts();

    const titleEl = document.getElementById('catalogSectionTitle');
    if (titleEl) {
      titleEl.textContent = this.showingFavoritesOnly ? 'Tus Joyas Favoritas' : 'Favoritos Radiantes';
    }

    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleFavorite(productId) {
    if (this.favorites.includes(productId)) {
      this.favorites = this.favorites.filter(id => id !== productId);
    } else {
      this.favorites.push(productId);
    }
    this.saveFavorites();
    this.renderProducts();
  }

  updateFavoritesBadge() {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) badge.textContent = this.favorites.length;
  }

  // ==========================================================================
  // RENDERIZADO DE PRODUCTOS (RESPONSIVO: 4 COLUMNAS EN DESKTOP, 2 EN MÓVIL)
  // ==========================================================================
  renderProducts() {
    const grid = document.getElementById('productsGrid');
    const countEl = document.getElementById('catalogProductCount');
    if (!grid) return;

    let filtered = this.products.filter(p => {
      if (this.showingFavoritesOnly) {
        return this.favorites.includes(p.id);
      }

      if (this.activeCategory !== 'Todos') {
        const cat = this.activeCategory.toLowerCase();
        const pName = (p.name || '').toLowerCase();
        const pCat = (p.category || '').toLowerCase();
        const pSub = (p.subcategory || '').toLowerCase();
        const pMat = (p.material || '').toLowerCase();

        if (cat === 'collares') {
          if (!pName.includes('collar') && !pName.includes('choker') && !pSub.includes('collar')) return false;
        } else if (cat.includes('aros') || cat.includes('candongas')) {
          if (!pName.includes('aro') && !pName.includes('candonga') && !pName.includes('huggie') && !pSub.includes('aro')) return false;
        } else if (cat.includes('pulseras')) {
          if (!pName.includes('pulsera') && !pName.includes('tobillera') && !pSub.includes('pulsera')) return false;
        } else if (cat.includes('anillos') || cat.includes('dijes')) {
          if (!pName.includes('anillo') && !pName.includes('dije') && !pSub.includes('anillo')) return false;
        } else if (cat.includes('plata 925')) {
          if (!pMat.includes('plata 925') && !pCat.includes('plata 925') && !pName.includes('925')) return false;
        }
      }

      if (this.searchQuery) {
        const text = `${p.name} ${p.material} ${p.category} ${p.subcategory} ${p.description}`.toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = `${filtered.length} Diseños`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16 px-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
          <span class="material-symbols-outlined text-5xl text-primary mb-2 block">search_off</span>
          <h4 class="font-bold text-base text-on-surface mb-1">No encontramos piezas en esta selección</h4>
          <p class="text-sm text-on-surface-variant mb-4">Prueba con otra categoría o explora toda la colección de verano.</p>
          <button onclick="app.filterByCategory('Todos')" class="px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs md:text-sm font-bold shadow-md hover:bg-primary-container transition-all">
            Ver Todo el Catálogo
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const activePrice = p.salePrice || p.price;
      const isFav = this.favorites.includes(p.id);
      const mainImg = p.images && p.images.length > 0 ? p.images[0] : '';

      // Badges con las clases exactas de Stitch
      let badgeHtml = '';
      if (p.badge) {
        let badgeColor = 'bg-primary-fixed text-on-primary-fixed';
        if (p.badge.includes('Nuevo') || p.badge.includes('Atelier') || p.badge.includes('Exclusivo')) {
          badgeColor = 'bg-secondary text-on-secondary';
        } else if (p.badge.includes('cariño') || p.badge.includes('Pop') || p.badge.includes('Verano') || p.badge.includes('regalar')) {
          badgeColor = 'bg-tertiary text-on-tertiary';
        }
        badgeHtml = `
          <div class="absolute top-2.5 left-2.5 z-10">
            <span class="px-2.5 py-0.5 rounded-full ${badgeColor} text-[10px] md:text-[11px] font-bold shadow-xs">
              ${p.badge}
            </span>
          </div>
        `;
      }

      return `
        <article class="group bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-3 md:p-3.5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="relative rounded-xl overflow-hidden bg-surface-container-low aspect-[4/5] mb-3 cursor-pointer" onclick="app.openZoomModal('${p.id}', 0)">
              ${badgeHtml}
              <button aria-label="Guardar en favoritos" onclick="event.stopPropagation(); app.toggleFavorite('${p.id}')" class="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-surface/85 backdrop-blur-sm hover:bg-surface text-on-surface-variant hover:text-tertiary flex items-center justify-center transition-transform active:scale-90 shadow-xs">
                <span class="material-symbols-outlined text-[18px]" style="${isFav ? 'color: #a33900; font-variation-settings: \'FILL\' 1;' : ''}">favorite</span>
              </button>
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${mainImg}" alt="${p.name}" loading="lazy"/>
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-1 text-primary text-[11px] md:text-[12px] font-semibold">
                <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="font-bold text-on-surface">${(p.rating || 5.0).toFixed(1)}</span>
                <span class="text-on-surface-variant font-normal">(${p.reviewsCount || 25})</span>
              </div>
              <h3 class="text-[14px] md:text-[15px] font-semibold text-on-surface line-clamp-1 group-hover:text-primary transition-colors cursor-pointer" onclick="app.openZoomModal('${p.id}', 0)">
                ${p.name}
              </h3>
              <p class="text-[11px] md:text-[12px] text-on-surface-variant line-clamp-1">
                ${p.material}
              </p>
            </div>
          </div>
          <div class="mt-3 pt-2.5 border-t border-outline-variant/20 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-on-surface-variant block uppercase tracking-wider">Precio</span>
              <span class="text-[15px] md:text-[17px] font-bold text-on-surface">$${this.formatCLP(activePrice)} <span class="text-[11px] font-normal text-on-surface-variant">CLP</span></span>
            </div>
            <button aria-label="Agregar a la bolsa" onclick="app.addToCart('${p.id}')" class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm" title="Agregar a la bolsa">
              <span class="material-symbols-outlined text-[19px]">add_shopping_cart</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // ==========================================================================
  // BÚSQUEDA
  // ==========================================================================
  toggleSearch() {
    const bar = document.getElementById('quickSearchBar');
    if (!bar) return;
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
      const input = document.getElementById('searchInputMobile');
      if (input) input.focus();
    }
  }

  handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    this.renderProducts();
  }

  clearSearch() {
    const inputMobile = document.getElementById('searchInputMobile');
    const inputDesktop = document.getElementById('searchInputDesktop');
    if (inputMobile) inputMobile.value = '';
    if (inputDesktop) inputDesktop.value = '';
    this.handleSearch('');
  }

  // ==========================================================================
  // MODAL ZOOM LIGHTBOX (LUPA Y DETALLES EN ALTA DEFINICIÓN)
  // ==========================================================================
  openZoomModal(productId, photoIndex = 0) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    this.currentLightboxProduct = product;
    this.currentLightboxPhotoIndex = photoIndex;

    const modal = document.getElementById('zoomLightboxModal');
    const title = document.getElementById('lightboxTitle');
    const mat = document.getElementById('lightboxMaterial');
    const badge = document.getElementById('lightboxBadge');
    const price = document.getElementById('lightboxPrice');
    const desc = document.getElementById('lightboxDescription');
    const mainImg = document.getElementById('lightboxMainImg');
    const thumbsStrip = document.getElementById('lightboxThumbnailsStrip');

    if (title) title.textContent = product.name;
    if (mat) mat.textContent = product.material;
    if (badge) badge.textContent = product.badge || 'Plata 925 Garantizada';

    const activePrice = product.salePrice || product.price;
    if (price) price.textContent = `$${this.formatCLP(activePrice)} CLP`;
    if (desc) desc.textContent = product.description;

    const images = product.images && product.images.length > 0 ? product.images : [mainImg.src];
    if (thumbsStrip) {
      thumbsStrip.innerHTML = images.map((img, idx) => `
        <button onclick="app.selectLightboxPhoto(${idx})" class="w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 ${idx === photoIndex ? 'border-primary shadow-xs' : 'border-transparent opacity-70'}">
          <img src="${img}" alt="Vista ${idx+1}" class="w-full h-full object-cover">
        </button>
      `).join('');
    }

    if (mainImg) mainImg.src = images[photoIndex];
    if (modal) modal.classList.add('modal-open');
  }

  selectLightboxPhoto(index) {
    if (!this.currentLightboxProduct) return;
    this.currentLightboxPhotoIndex = index;
    const images = this.currentLightboxProduct.images;
    const mainImg = document.getElementById('lightboxMainImg');
    if (mainImg && images[index]) {
      mainImg.src = images[index];
    }

    const thumbs = document.querySelectorAll('#lightboxThumbnailsStrip button');
    thumbs.forEach((t, i) => {
      if (i === index) {
        t.className = 'w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 border-primary shadow-xs';
      } else {
        t.className = 'w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 border-transparent opacity-70';
      }
    });
  }

  handleZoomLens(e) {
    const container = document.getElementById('zoomImageContainer');
    const img = document.getElementById('lightboxMainImg');
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2.2)';
  }

  resetZoomLens() {
    const img = document.getElementById('lightboxMainImg');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  }

  closeZoomModal() {
    const modal = document.getElementById('zoomLightboxModal');
    if (modal) modal.classList.remove('modal-open');
  }

  addCurrentToCart() {
    if (this.currentLightboxProduct) {
      this.addToCart(this.currentLightboxProduct.id);
      this.closeZoomModal();
    }
  }

  askByWhatsAppCurrent() {
    if (!this.currentLightboxProduct) return;
    const p = this.currentLightboxProduct;
    const cleanPhone = this.settings.whatsapp.replace(/\D/g, '');
    const msg = encodeURIComponent(`¡Hola María del Pilar! Me encantó la joya "${p.name}" ($${this.formatCLP(p.price)} CLP). ¿Tienen disponibilidad para envío inmediato?`);
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  }

  // ==========================================================================
  // CARRITO / BOLSA DE COMPRAS (DRAWER SLIDE-OVER)
  // ==========================================================================
  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        image: product.images && product.images[0] ? product.images[0] : '',
        material: product.material,
        qty: 1
      });
    }

    this.saveCart();
    this.openCartDrawer();
  }

  changeCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    }
    this.saveCart();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
  }

  openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.add('drawer-open');
      overlay.classList.add('overlay-visible');
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.remove('drawer-open');
      overlay.classList.remove('overlay-visible');
    }
  }

  updateCartBadge() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const badgeHeader = document.getElementById('cartBadgeCount');
    const badgeDesktop = document.getElementById('desktopCartBadgeText');
    const badgeBottom = document.getElementById('bottomCartBadge');
    const drawerCount = document.getElementById('drawerItemsCount');

    if (badgeHeader) badgeHeader.textContent = totalItems;
    if (badgeDesktop) badgeDesktop.textContent = `Bolsa (${totalItems})`;
    if (badgeBottom) badgeBottom.textContent = totalItems;
    if (drawerCount) drawerCount.textContent = totalItems;
  }

  renderCartDrawer() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl text-outline-variant mb-2 block">shopping_bag</span>
          <p class="font-bold text-base text-on-surface mb-1">Tu bolsa está vacía</p>
          <p class="text-xs">Descubre nuestros favoritos de verano y llévate un regalito sorpresa.</p>
          <button onclick="app.closeCartDrawer()" class="mt-4 px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm">
            Explorar Joyas
          </button>
        </div>
      `;
      this.updateCartTotals();
      return;
    }

    container.innerHTML = this.cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl bg-surface-container shrink-0">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs md:text-sm font-bold text-on-surface line-clamp-1">${item.name}</h4>
          <span class="text-[11px] text-on-surface-variant block mb-1">${item.material || 'Plata 925'}</span>
          <span class="text-xs md:text-sm font-bold text-primary">$${this.formatCLP(item.price)}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="app.changeCartQty('${item.id}', -1)" class="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs hover:bg-surface-container-high">-</button>
          <span class="text-xs font-bold px-1.5">${item.qty}</span>
          <button onclick="app.changeCartQty('${item.id}', 1)" class="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs hover:bg-surface-container-high">+</button>
          <button onclick="app.removeFromCart('${item.id}')" class="ml-1 text-on-surface-variant hover:text-error text-xs">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>
      </div>
    `).join('');

    this.updateCartTotals();
  }

  updateCartTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const threshold = this.settings.freeShippingThreshold || 30000;
    const isFree = subtotal >= threshold;
    const shipping = isFree ? 0 : (subtotal > 0 ? 3990 : 0);
    const total = subtotal + shipping;

    const subEl = document.getElementById('cartSubtotalText');
    const shipEl = document.getElementById('cartShippingText');
    const totalEl = document.getElementById('cartTotalText');
    const bar = document.getElementById('shippingProgressBar');
    const barText = document.getElementById('shippingProgressText');

    if (subEl) subEl.textContent = `$${this.formatCLP(subtotal)}`;
    if (shipEl) shipEl.textContent = isFree ? '¡Gratis!' : `$${this.formatCLP(shipping)}`;
    if (totalEl) totalEl.textContent = `$${this.formatCLP(total)}`;

    if (bar && barText) {
      if (subtotal === 0) {
        bar.style.width = '0%';
        barText.textContent = `Envío gratis sobre $${this.formatCLP(threshold)}`;
      } else if (isFree) {
        bar.style.width = '100%';
        barText.textContent = '🎉 ¡Felicitaciones! Tienes Envío Gratis';
      } else {
        const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
        bar.style.width = `${pct}%`;
        const diff = threshold - subtotal;
        barText.textContent = `Faltan $${this.formatCLP(diff)} para Envío Gratis`;
      }
    }
  }

  toggleGiftWrap(isChecked) {
    const wrapper = document.getElementById('giftMessageWrapper');
    if (wrapper) {
      wrapper.classList.toggle('hidden', !isChecked);
    }
  }

  // ==========================================================================
  // CHECKOUT POR WHATSAPP
  // ==========================================================================
  processCheckout() {
    if (this.cart.length === 0) {
      alert('Tu bolsa de compras está vacía.');
      return;
    }
    this.closeCartDrawer();
    this.openCheckoutModal();
  }

  openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const recap = document.getElementById('orderRecapBox');
    if (!modal || !recap) return;

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const threshold = this.settings.freeShippingThreshold || 30000;
    const shipping = subtotal >= threshold ? 0 : 3990;
    const total = subtotal + shipping;

    recap.innerHTML = `
      <h4 class="font-bold text-on-surface mb-2">Resumen de tu Pedido:</h4>
      <div class="space-y-1">
        ${this.cart.map(i => `
          <div class="flex justify-between text-on-surface-variant">
            <span>${i.qty}x ${i.name}</span>
            <span class="font-semibold text-on-surface">$${this.formatCLP(i.price * i.qty)}</span>
          </div>
        `).join('')}
      </div>
      <div class="flex justify-between font-bold text-on-surface pt-2 mt-2 border-t border-outline-variant/30">
        <span>Total con Envío:</span>
        <span class="text-primary">$${this.formatCLP(total)} CLP</span>
      </div>
    `;

    modal.classList.add('modal-open');
  }

  closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('modal-open');
  }

  handleFinalOrder(e) {
    e.preventDefault();
    const name = document.getElementById('orderCustomerName').value.trim();
    const phone = document.getElementById('orderCustomerPhone').value.trim();
    const address = document.getElementById('orderCustomerAddress').value.trim();
    const payment = document.getElementById('orderPaymentMethod').value;
    const isGift = document.getElementById('giftWrapCheck').checked;
    const giftDedication = document.getElementById('giftDedicationText').value.trim();

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const threshold = this.settings.freeShippingThreshold || 30000;
    const shipping = subtotal >= threshold ? 0 : 3990;
    const total = subtotal + shipping;

    const newOrder = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      paymentMethod: payment,
      giftWrap: isGift,
      giftDedication: giftDedication,
      items: [...this.cart],
      total: total,
      date: new Date().toISOString()
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Limpiar carrito
    this.cart = [];
    this.saveCart();
    this.closeCheckoutModal();

    // Mensaje estructurado hacia WhatsApp de María del Pilar
    const itemsText = newOrder.items.map(i => `• ${i.qty}x ${i.name} ($${this.formatCLP(i.price * i.qty)} CLP)`).join('%0A');
    const giftText = isGift ? `%0A🎁 *Empaque de regalo:* Sí%0A*Dedicatoria:* ${giftDedication}` : '';
    const whatsappMsg = `*NUEVO PEDIDO BOUTIQUE MARÍA DEL PILAR*%0A` +
      `*Orden:* #${newOrder.id}%0A` +
      `*Cliente:* ${name}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Dirección:* ${address}%0A` +
      `*Medio de Pago:* ${payment}%0A` +
      `--------------------------------%0A` +
      `${itemsText}%0A` +
      `--------------------------------%0A` +
      `*Total a Pagar:* $${this.formatCLP(total)} CLP${giftText}%0A%0A` +
      `¡Hola María del Pilar! He confirmado mi pedido en la web. Por favor compárteme los datos de transferencia para coordinar el despacho.`;

    const cleanPhone = this.settings.whatsapp.replace(/\D/g, '');
    alert(`¡Gracias ${name}! Tu pedido ${newOrder.id} ha sido registrado. A continuación se abrirá WhatsApp para coordinar el pago.`);
    window.open(`https://wa.me/${cleanPhone}?text=${whatsappMsg}`, '_blank');
  }

  openWhatsAppConcierge() {
    const cleanPhone = this.settings.whatsapp.replace(/\D/g, '');
    const msg = encodeURIComponent('Hola María del Pilar, estoy viendo tu boutique de Plata 925 y Bisutería Fina. Me gustaría asesoría con las tallas y modelos disponibles.');
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  }

  // ==========================================================================
  // PANEL ADMINISTRADOR (GESTOR BOUTIQUE)
  // ==========================================================================
  toggleAdminView() {
    const store = document.getElementById('storeViewWrapper');
    const admin = document.getElementById('adminViewWrapper');
    if (!store || !admin) return;

    const isStoreHidden = store.classList.contains('hidden');
    if (isStoreHidden) {
      this.showStoreView();
    } else {
      store.classList.add('hidden');
      admin.classList.remove('hidden');
      this.renderAdminProductsTable();
      this.renderAdminMenusTree();
      this.renderAdminOrders();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  showStoreView() {
    const store = document.getElementById('storeViewWrapper');
    const admin = document.getElementById('adminViewWrapper');
    if (store && admin) {
      store.classList.remove('hidden');
      admin.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  switchAdminTab(tabName) {
    const tabs = ['products', 'menus', 'orders', 'settings'];
    tabs.forEach(t => {
      const btn = document.getElementById(`adminTabBtn-${t}`);
      const content = document.getElementById(`adminTab-${t}`);
      if (btn && content) {
        if (t === tabName) {
          btn.className = 'shrink-0 px-4 py-2 rounded-full bg-primary text-on-primary text-xs md:text-sm font-bold shadow-xs';
          content.classList.remove('hidden');
        } else {
          btn.className = 'shrink-0 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs md:text-sm font-bold';
          content.classList.add('hidden');
        }
      }
    });
  }

  renderAdminProductsTable() {
    const container = document.getElementById('adminProductsListCards');
    const totalLabel = document.getElementById('adminProductsTotalLabel');
    if (totalLabel) totalLabel.textContent = `${this.products.length} Piezas en Catálogo`;
    if (!container) return;

    container.innerHTML = this.products.map(p => {
      const img = p.images && p.images[0] ? p.images[0] : '';
      return `
        <div class="p-3.5 rounded-2xl bg-surface border border-outline-variant/30 flex items-center justify-between gap-3 shadow-xs">
          <div class="flex items-center gap-3 min-w-0">
            <img src="${img}" alt="${p.name}" class="w-14 h-14 rounded-xl object-cover bg-surface-container shrink-0">
            <div class="min-w-0">
              <h4 class="text-xs md:text-sm font-bold text-on-surface line-clamp-1">${p.name}</h4>
              <span class="text-[11px] text-secondary font-medium block">${p.category} · ${p.subcategory || ''}</span>
              <span class="text-xs md:text-sm font-bold text-primary">$${this.formatCLP(p.price)} CLP</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="app.editProduct('${p.id}')" class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary">
              <span class="material-symbols-outlined text-[16px]">edit</span>
            </button>
            <button onclick="app.deleteProduct('${p.id}')" class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-error">
              <span class="material-symbols-outlined text-[16px]">delete</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openProductModal() {
    document.getElementById('editProductId').value = '';
    document.getElementById('productForm').reset();
    document.getElementById('productModalTitle').textContent = 'Agregar Nueva Joya al Catálogo';
    document.getElementById('productModal').classList.add('modal-open');
  }

  closeProductModal() {
    document.getElementById('productModal').classList.remove('modal-open');
  }

  editProduct(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    document.getElementById('editProductId').value = p.id;
    document.getElementById('productModalTitle').textContent = `Editar: ${p.name}`;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    document.getElementById('prodSubcategory').value = p.subcategory || '';
    document.getElementById('prodMaterial').value = p.material;
    document.getElementById('prodPrice').value = p.price;
    document.getElementById('prodBadge').value = p.badge || '';
    document.getElementById('prodImg1').value = p.images && p.images[0] ? p.images[0] : '';
    document.getElementById('prodDescription').value = p.description || '';

    document.getElementById('productModal').classList.add('modal-open');
  }

  handleSaveProduct(e) {
    e.preventDefault();
    const id = document.getElementById('editProductId').value;
    const name = document.getElementById('prodName').value.trim();
    const category = document.getElementById('prodCategory').value;
    const subcategory = document.getElementById('prodSubcategory').value.trim();
    const material = document.getElementById('prodMaterial').value.trim();
    const price = parseInt(document.getElementById('prodPrice').value, 10);
    const badge = document.getElementById('prodBadge').value.trim();
    const img1 = document.getElementById('prodImg1').value.trim();
    const desc = document.getElementById('prodDescription').value.trim();

    if (id) {
      const idx = this.products.findIndex(p => p.id === id);
      if (idx !== -1) {
        this.products[idx] = {
          ...this.products[idx],
          name, category, subcategory, material, price, badge,
          description: desc,
          images: [img1, ...(this.products[idx].images.slice(1))]
        };
      }
    } else {
      const newProd = {
        id: `p_${Date.now()}`,
        name, category, subcategory, material, price,
        salePrice: null,
        stock: 5,
        rating: 5.0,
        reviewsCount: 1,
        badge,
        featured: true,
        description: desc,
        images: [img1]
      };
      this.products.unshift(newProd);
    }

    this.saveProducts();
    this.closeProductModal();
    alert('Joya guardada exitosamente en el catálogo.');
  }

  deleteProduct(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;
    if (confirm(`¿Eliminar la joya "${p.name}" del catálogo?`)) {
      this.products = this.products.filter(item => item.id !== productId);
      this.saveProducts();
    }
  }

  renderAdminOrders() {
    const container = document.getElementById('adminOrdersContainer');
    const badge = document.getElementById('adminOrdersCountBadge');
    if (badge) badge.textContent = this.orders.length;
    if (!container) return;

    if (this.orders.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center text-on-surface-variant text-sm bg-surface rounded-2xl border border-outline-variant/30">
          No hay pedidos registrados aún. Los pedidos generados por clientes aparecerán aquí.
        </div>
      `;
      return;
    }

    container.innerHTML = this.orders.map(o => `
      <div class="p-4 rounded-2xl bg-surface border border-outline-variant/30 text-xs md:text-sm space-y-2 shadow-xs">
        <div class="flex justify-between font-bold text-on-surface">
          <span>#${o.id} · ${o.customerName}</span>
          <span class="text-primary font-extrabold">$${this.formatCLP(o.total)}</span>
        </div>
        <p class="text-xs text-on-surface-variant">${o.customerPhone} · ${o.customerAddress}</p>
        <div class="text-xs text-secondary font-medium">${o.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</div>
        <div class="text-[11px] text-on-surface-variant pt-1 border-t border-surface-container">
          Pago: ${o.paymentMethod} · ${new Date(o.date).toLocaleDateString('es-CL')}
        </div>
      </div>
    `).join('');
  }

  renderAdminMenusTree() {
    const tree = document.getElementById('adminMenusTree');
    if (!tree) return;

    tree.innerHTML = this.menus.map(m => `
      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
        <div>
          <span class="font-bold text-on-surface">${m.icon || '💎'} ${m.name}</span>
          <span class="text-xs text-on-surface-variant block">Subcategorías: ${(m.submenus || []).join(', ') || 'Ninguna'}</span>
        </div>
        <button onclick="app.deleteMainMenu('${m.id}')" class="text-on-surface-variant hover:text-error text-xs">
          <span class="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    `).join('');
  }

  handleAddMenu(e) {
    e.preventDefault();
    const nameInput = document.getElementById('newMenuName');
    const iconInput = document.getElementById('newMenuIcon');
    const parentSelect = document.getElementById('parentMenuSelect');

    const name = nameInput.value.trim();
    const icon = iconInput.value.trim();
    const parentId = parentSelect.value;

    if (!name) return;

    if (parentId) {
      const parent = this.menus.find(m => m.id === parentId);
      if (parent) {
        if (!parent.submenus) parent.submenus = [];
        parent.submenus.push(name);
      }
    } else {
      this.menus.push({
        id: `m_${Date.now()}`,
        name,
        icon: icon || '💎',
        submenus: []
      });
    }

    this.saveMenus();
    nameInput.value = '';
    iconInput.value = '';
    alert(`Menú "${name}" guardado exitosamente.`);
  }

  deleteMainMenu(menuId) {
    if (confirm('¿Eliminar este menú?')) {
      this.menus = this.menus.filter(m => m.id !== menuId);
      this.saveMenus();
    }
  }

  populateParentMenuSelect() {
    const select = document.getElementById('parentMenuSelect');
    if (!select) return;

    select.innerHTML = '<option value="">-- Es un menú principal (Píldora superior) --</option>' +
      this.menus.map(m => `<option value="${m.id}">${m.icon || ''} ${m.name}</option>`).join('');
  }

  handleSaveSettings(e) {
    e.preventDefault();
    const phone = document.getElementById('settingWhatsapp').value.trim();
    const threshold = parseInt(document.getElementById('settingFreeShipping').value, 10);

    this.settings.whatsapp = phone;
    this.settings.freeShippingThreshold = threshold;
    this.saveSettings();
    alert('Ajustes guardados correctamente.');
  }

  // ==========================================================================
  // HELPERS
  // ==========================================================================
  formatCLP(number) {
    if (isNaN(number)) return '0';
    return Number(number).toLocaleString('es-CL');
  }
}

// Inicializar la aplicación al cargar el DOM
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new JoyeriaApp();
});
