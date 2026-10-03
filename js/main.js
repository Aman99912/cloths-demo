/* ═══════════════════════════════════════════════════════════
   AAVRA — Ultra-Premium Indian Fashion Brand
   Main JavaScript
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── State ─── */
  const state = {
    menuOpen: false,
    searchOpen: false,
    activeModal: null,       // 'collection' | 'article' | 'appointment' | 'legal' | 'lightbox'
    activeCollection: null,  // index
    activeArticle: 0,        // index
    activeLook: 0,           // index
    legalType: null          // 'privacy' | 'terms'
  };

  /* ─── Data ─── */
  const collections = [
    {
      id: 'quiet-form',
      number: '01',
      title: 'The Quiet Form',
      text: 'Quiet silhouettes. Precise construction. A study in restraint — where every seam holds intention and every fold speaks softly.',
      image: 'assets/images/collection-quiet-form.jpg',
      looks: [
        'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
        'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80'
      ]
    },
    {
      id: 'monsoon-light',
      number: '02',
      title: 'Monsoon Light',
      text: 'Fluid movement captured in fabric. Pieces that breathe with the season — layered, flowing, alive with the softness of rain-washed light.',
      image: 'assets/images/collection-monsoon.jpg',
      looks: [
        'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80',
        'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&q=80',
        'https://images.unsplash.com/photo-1583391733981-8b530a26381a?w=600&q=80',
        'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&q=80'
      ]
    },
    {
      id: 'after-dusk',
      number: '03',
      title: 'After Dusk',
      text: 'The quiet confidence of evening. Rich textures, deeper tones, and silhouettes that move between structure and ease as the light changes.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      looks: [
        'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80',
        'https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=600&q=80',
        'https://images.unsplash.com/photo-1583391733824-76b2eda26294?w=600&q=80',
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&q=80'
      ]
    }
  ];

  const articles = [
    {
      category: 'Editorial',
      title: 'The New Indian Silhouette',
      excerpt: 'How contemporary Indian design is redefining shape, proportion and presence in modern clothing.',
      image: 'https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=800&q=80',
      body: `<p>There is a shift happening in Indian fashion — quiet, deliberate, and deeply personal. The new Indian silhouette isn't about ornament or spectacle. It's about proportion. It's about how fabric falls against the body, how a sleeve width changes the way you carry yourself, how the space between skin and cloth becomes part of the design.</p>
      <p>This movement draws from centuries of draping traditions — the way a sari creates architecture from a single length of fabric, the way a kurta balances structure with ease. But it reinterprets these ideas through a contemporary lens, creating clothing that feels both familiar and entirely new.</p>
      <p>The designers leading this shift understand something fundamental: that Indian clothing has always been about relationship — between body and fabric, between tradition and the present moment, between restraint and expression. The new silhouette honours all of these conversations.</p>
      <p>What makes it distinctly Indian isn't a motif or a colour palette. It's an understanding of drape, of layering, of how clothing can feel both structured and fluid. It's the knowledge that sometimes the most powerful statement is the quietest one.</p>`
    },
    {
      category: 'Craft',
      title: 'Inside the Craft',
      excerpt: 'A glimpse into the hands and hours behind every finished piece — where patience meets precision.',
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
      body: `<p>In a small atelier in Jaipur, a single garment passes through seventeen pairs of hands before it is finished. Each pair brings a different expertise — cutting, stitching, finishing, pressing — and each leaves its signature in the quality of the work.</p>
      <p>The craft begins long before the cutting table. It starts with the fabric itself — the selection of yarn, the tension of the weave, the hand of the finished cloth. Our makers understand that the feel of a garment against the skin is as important as how it looks from across the room.</p>
      <p>There is no shortcut to this kind of quality. A hand-finished buttonhole takes forty-five minutes. A perfectly pressed pleat requires three separate passes. The invisible stitch that holds a lining in place demands a steadiness of hand that comes only from years of practice.</p>
      <p>This is not nostalgia for an old way of making. It is a conviction that the best clothing is still made slowly, by people who understand both the material and the moment — who know that every stitch is a small decision about how a garment will live in the world.</p>`
    },
    {
      category: 'Style',
      title: 'Dressing Between Seasons',
      excerpt: 'The art of layering and transitional dressing for India\'s shifting weather and moods.',
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
      body: `<p>India doesn't have four seasons. It has dozens — subtle shifts of heat and humidity, the first coolness of an October evening, the particular quality of light before the monsoon arrives. Dressing for this climate requires a different kind of wardrobe intelligence.</p>
      <p>Transitional dressing isn't about owning more. It's about owning pieces that work harder — a linen jacket light enough for a warm afternoon but structured enough for an evening that turns cool. A cotton layer that adds warmth without weight. Fabrics that breathe when they need to and insulate when they don't.</p>
      <p>The key is proportion and weight. A slightly oversized shirt in a fine cotton weave becomes a layer. A slim trouser in a textured fabric transitions from day to evening without needing to be changed. The pieces that matter most are the ones that adapt.</p>
      <p>This is the wardrobing philosophy behind our collections — not seasonal fashion, but considered clothing that understands the realities of how we actually live, move, and dress in this country.</p>`
    }
  ];

  const lookbookImages = [
    { src: 'assets/images/hero-campaign.jpg', label: 'Look 01' },
    { src: 'assets/images/collection-quiet-form.jpg', label: 'Look 02' },
    { src: 'assets/images/collection-monsoon.jpg', label: 'Look 03' },
    { src: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80', label: 'Look 04' },
    { src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80', label: 'Look 05' },
    { src: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80', label: 'Look 06' }
  ];

  const searchData = [
    { title: 'The Quiet Form', category: 'Collection', action: 'collection', index: 0 },
    { title: 'Monsoon Light', category: 'Collection', action: 'collection', index: 1 },
    { title: 'After Dusk', category: 'Collection', action: 'collection', index: 2 },
    { title: 'The New Indian Silhouette', category: 'Journal', action: 'article', index: 0 },
    { title: 'Inside the Craft', category: 'Journal', action: 'article', index: 1 },
    { title: 'Dressing Between Seasons', category: 'Journal', action: 'article', index: 2 },
    { title: 'Craftsmanship', category: 'Section', action: 'scroll', target: 'craft' },
    { title: 'About AAVRA', category: 'Section', action: 'scroll', target: 'about' },
    { title: 'Private Styling', category: 'Experience', action: 'scroll', target: 'experience' },
    { title: 'Autumn Edit', category: 'Campaign', action: 'scroll', target: 'hero' },
    { title: 'Featured Looks', category: 'Lookbook', action: 'scroll', target: 'lookbook' }
  ];

  const legalContent = {
    privacy: {
      title: 'Privacy Policy',
      body: `<p>AAVRA respects your privacy and is committed to protecting your personal information. This policy outlines how we collect, use, and safeguard data provided through our website and services.</p>
      <h3>Information We Collect</h3>
      <p>We may collect personal information such as your name, email address, phone number, and preferences when you subscribe to our newsletter, request an appointment, or interact with our services.</p>
      <h3>How We Use Your Information</h3>
      <p>Your information is used to provide personalised experiences, send collection previews and editorial content, schedule appointments, and improve our services. We do not sell or share your data with third parties for marketing purposes.</p>
      <h3>Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is completely secure.</p>
      <h3>Contact</h3>
      <p>For questions about this privacy policy, please contact us at privacy@aavra.studio.</p>`
    },
    terms: {
      title: 'Terms of Service',
      body: `<p>Welcome to AAVRA. By accessing our website and services, you agree to these terms and conditions.</p>
      <h3>Use of Website</h3>
      <p>This website is provided for informational and experiential purposes. All content, imagery, and design elements are the property of AAVRA and may not be reproduced without permission.</p>
      <h3>Appointments & Services</h3>
      <p>Appointment requests are subject to availability. We reserve the right to confirm, reschedule, or decline appointments at our discretion. All styling consultations are complimentary.</p>
      <h3>Intellectual Property</h3>
      <p>All content on this website — including text, images, designs, and branding — is protected by copyright and intellectual property laws. Unauthorised use is prohibited.</p>
      <h3>Limitation of Liability</h3>
      <p>AAVRA is not liable for any damages arising from the use of this website. All information is provided as-is without warranties of any kind.</p>`
    }
  };

  /* ─── DOM References ─── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ─── Navbar Scroll ─── */
  function initNavbar() {
    const navbar = $('.navbar');
    const announcement = $('.announcement');
    const announcementHeight = announcement ? announcement.offsetHeight : 0;

    function updateNavbar() {
      if (window.scrollY > announcementHeight + 20) {
        navbar.classList.remove('navbar--top');
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.add('navbar--top');
        navbar.classList.remove('navbar--scrolled');
      }
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  /* ─── Smooth Scroll ─── */
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      closeAllOverlays();
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  /* ─── Overlay Management ─── */
  function openOverlay(overlayEl) {
    overlayEl.classList.add('is-open');
    document.body.classList.add('no-scroll');
    // Focus management
    const focusable = overlayEl.querySelector('button, input, [tabindex]');
    if (focusable) focusable.focus();
  }

  function closeOverlay(overlayEl) {
    overlayEl.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    state.activeModal = null;
  }

  function closeAllOverlays() {
    $$('.overlay.is-open').forEach(o => o.classList.remove('is-open'));
    document.body.classList.remove('no-scroll');
    state.menuOpen = false;
    state.searchOpen = false;
    state.activeModal = null;
    // Reset hamburger aria
    const hamburger = $('.navbar__hamburger');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  /* ─── Search ─── */
  function initSearch() {
    const searchBtn = $('#search-btn');
    const searchOverlay = $('#search-overlay');
    const searchClose = $('#search-close');
    const searchInput = $('#search-input');
    const searchResults = $('#search-results');

    if (!searchBtn || !searchOverlay) return;

    searchBtn.addEventListener('click', () => {
      state.searchOpen = true;
      openOverlay(searchOverlay);
      searchInput.focus();
      searchInput.value = '';
      searchResults.innerHTML = '';
    });

    searchClose.addEventListener('click', () => {
      state.searchOpen = false;
      closeOverlay(searchOverlay);
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      const matches = searchData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

      searchResults.innerHTML = matches.map((item, i) => `
        <div class="search-result" data-action="${item.action}" data-index="${item.index !== undefined ? item.index : ''}" data-target="${item.target || ''}" tabindex="0" role="button">
          <div class="search-result__category">${item.category}</div>
          <div class="search-result__title">${item.title}</div>
        </div>
      `).join('');

      // Add click handlers to results
      $$('.search-result', searchResults).forEach(result => {
        result.addEventListener('click', () => handleSearchResult(result));
        result.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') handleSearchResult(result);
        });
      });
    });
  }

  function handleSearchResult(result) {
    const action = result.dataset.action;
    const index = parseInt(result.dataset.index);
    const target = result.dataset.target;

    closeAllOverlays();

    setTimeout(() => {
      if (action === 'collection') {
        openCollectionModal(index);
      } else if (action === 'article') {
        openArticleModal(index);
      } else if (action === 'scroll' && target) {
        scrollToSection(target);
      }
    }, 200);
  }

  /* ─── Mobile Menu ─── */
  function initMobileMenu() {
    const hamburger = $('.navbar__hamburger');
    const mobileMenu = $('#mobile-menu');
    const menuClose = $('#mobile-menu-close');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      state.menuOpen = true;
      hamburger.setAttribute('aria-expanded', 'true');
      openOverlay(mobileMenu);
    });

    menuClose.addEventListener('click', () => {
      state.menuOpen = false;
      hamburger.setAttribute('aria-expanded', 'false');
      closeOverlay(mobileMenu);
    });

    // Mobile menu links
    $$('.mobile-menu__link', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        const target = link.dataset.target;
        if (target) {
          scrollToSection(target);
        }
      });
    });
  }

  /* ─── Collection Modal ─── */
  function openCollectionModal(index) {
    const col = collections[index];
    if (!col) return;

    state.activeModal = 'collection';
    state.activeCollection = index;

    const modal = $('#collection-modal');
    const title = $('#collection-modal-title');
    const desc = $('#collection-modal-desc');
    const looks = $('#collection-modal-looks');

    title.textContent = col.title;
    desc.textContent = col.text;
    looks.innerHTML = col.looks.map((src, i) => `
      <div class="collection-modal__look">
        <img src="${src}" alt="${col.title} — Look ${i + 1}" loading="lazy" decoding="async">
      </div>
    `).join('');

    openOverlay(modal);
  }

  function initCollections() {
    $$('.collection-item__cta').forEach((btn, i) => {
      btn.addEventListener('click', () => openCollectionModal(i));
    });

    $$('.collection-item__image-wrap').forEach((wrap, i) => {
      wrap.addEventListener('click', () => openCollectionModal(i));
    });

    // Collection modal close
    const closeBtn = $('#collection-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeOverlay($('#collection-modal'));
      });
    }
  }

  /* ─── Article Modal ─── */
  function openArticleModal(index) {
    const article = articles[index];
    if (!article) return;

    state.activeModal = 'article';
    state.activeArticle = index;

    const modal = $('#article-modal');
    const image = $('#article-modal-image');
    const category = $('#article-modal-category');
    const title = $('#article-modal-title');
    const body = $('#article-modal-body');
    const prevBtn = $('#article-prev');
    const nextBtn = $('#article-next');

    image.src = article.image;
    image.alt = article.title;
    category.textContent = article.category;
    title.textContent = article.title;
    body.innerHTML = article.body;

    // Prev/Next visibility
    prevBtn.style.visibility = index > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility = index < articles.length - 1 ? 'visible' : 'hidden';

    openOverlay(modal);
    // Scroll modal to top
    modal.scrollTop = 0;
  }

  function initArticles() {
    $$('.journal-card').forEach((card, i) => {
      card.addEventListener('click', () => openArticleModal(i));
    });

    // Article modal close
    const closeBtn = $('#article-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeOverlay($('#article-modal'));
      });
    }

    // Prev / Next
    const prevBtn = $('#article-prev');
    const nextBtn = $('#article-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.activeArticle > 0) {
          openArticleModal(state.activeArticle - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.activeArticle < articles.length - 1) {
          openArticleModal(state.activeArticle + 1);
        }
      });
    }
  }

  /* ─── Lightbox ─── */
  function openLightbox(index) {
    state.activeModal = 'lightbox';
    state.activeLook = index;

    const lightbox = $('#lightbox');
    const image = $('#lightbox-image');
    const counter = $('#lightbox-counter');

    const look = lookbookImages[index];
    image.src = look.src;
    image.alt = look.label;
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(lookbookImages.length).padStart(2, '0')}`;

    openOverlay(lightbox);
  }

  function lightboxPrev() {
    const newIndex = (state.activeLook - 1 + lookbookImages.length) % lookbookImages.length;
    openLightbox(newIndex);
  }

  function lightboxNext() {
    const newIndex = (state.activeLook + 1) % lookbookImages.length;
    openLightbox(newIndex);
  }

  function initLightbox() {
    $$('.look').forEach((look, i) => {
      look.addEventListener('click', () => openLightbox(i));
    });

    const closeBtn = $('#lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeOverlay($('#lightbox')));
    }

    const prevBtn = $('#lightbox-prev');
    const nextBtn = $('#lightbox-next');

    if (prevBtn) prevBtn.addEventListener('click', lightboxPrev);
    if (nextBtn) nextBtn.addEventListener('click', lightboxNext);
  }

  /* ─── Appointment Modal ─── */
  function initAppointment() {
    const triggers = $$('[data-action="appointment"]');
    const modal = $('#appointment-modal');
    const closeBtn = $('#appointment-close');
    const form = $('#appointment-form');
    const successEl = $('#appointment-success');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        state.activeModal = 'appointment';
        // Reset form
        if (form) {
          form.reset();
          form.style.display = 'block';
          $$('.form-group', form).forEach(g => g.classList.remove('has-error'));
        }
        if (successEl) successEl.classList.remove('is-visible');
        openOverlay(modal);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeOverlay(modal));
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateAppointmentForm(form)) {
          form.style.display = 'none';
          successEl.classList.add('is-visible');
          showToast('Thank you — your request has been received.');
        }
      });
    }
  }

  function validateAppointmentForm(form) {
    let valid = true;
    const fields = [
      { id: 'appt-name', message: 'Please enter your name' },
      { id: 'appt-email', message: 'Please enter a valid email', validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'appt-phone', message: 'Please enter your phone number' }
    ];

    fields.forEach(field => {
      const input = $(`#${field.id}`, form);
      const group = input.closest('.form-group');
      const value = input.value.trim();

      if (!value || (field.validate && !field.validate(value))) {
        group.classList.add('has-error');
        valid = false;
      } else {
        group.classList.remove('has-error');
      }
    });

    return valid;
  }

  /* ─── Legal Modals ─── */
  function initLegal() {
    const modal = $('#legal-modal');
    const closeBtn = $('#legal-close');
    const title = $('#legal-title');
    const body = $('#legal-body');

    $$('[data-legal]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const type = trigger.dataset.legal;
        const content = legalContent[type];
        if (!content) return;

        state.activeModal = 'legal';
        state.legalType = type;
        title.textContent = content.title;
        body.innerHTML = content.body;
        openOverlay(modal);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeOverlay(modal));
    }
  }

  /* ─── Newsletter ─── */
  function initNewsletter() {
    const form = $('#newsletter-form');
    const input = $('#newsletter-email');
    const successEl = $('#newsletter-success');
    const errorEl = $('#newsletter-error');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorEl.textContent = 'Please enter a valid email address.';
        errorEl.classList.add('is-visible');
        successEl.classList.remove('is-visible');
        return;
      }

      errorEl.classList.remove('is-visible');
      form.style.display = 'none';
      successEl.classList.add('is-visible');
      showToast('Welcome — you\'re on the list.');
    });
  }

  /* ─── Toast ─── */
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('is-visible');

    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3500);
  }

  /* ─── Scroll Reveal ─── */
  function initScrollReveal() {
    const reveals = $$('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  /* ─── Parallax (subtle) ─── */
  function initParallax() {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroImage = $('.hero__image');
    if (!heroImage) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < window.innerHeight * 1.5) {
            heroImage.style.transform = `scale(1) translateY(${scrollY * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── Keyboard Controls ─── */
  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllOverlays();
      }

      // Lightbox arrows
      if (state.activeModal === 'lightbox') {
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'ArrowRight') lightboxNext();
      }

      // Article arrows
      if (state.activeModal === 'article') {
        if (e.key === 'ArrowLeft' && state.activeArticle > 0) {
          openArticleModal(state.activeArticle - 1);
        }
        if (e.key === 'ArrowRight' && state.activeArticle < articles.length - 1) {
          openArticleModal(state.activeArticle + 1);
        }
      }
    });
  }

  /* ─── Nav Links ─── */
  function initNavLinks() {
    // Desktop nav links
    $$('[data-nav]').forEach(link => {
      link.addEventListener('click', () => {
        scrollToSection(link.dataset.nav);
      });
    });

    // Back to top
    const backTop = $('#back-to-top');
    if (backTop) {
      backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Hero CTAs
    const exploreCta = $('#hero-explore');
    const storyCta = $('#hero-story');

    if (exploreCta) {
      exploreCta.addEventListener('click', () => scrollToSection('collections'));
    }
    if (storyCta) {
      storyCta.addEventListener('click', () => scrollToSection('about'));
    }
  }

  /* ─── Instagram link ─── */
  function initSocial() {
    $$('[data-social]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.dataset.social;
        const urls = {
          instagram: 'https://instagram.com/aavra.studio',
          pinterest: 'https://pinterest.com/aavra',
          facebook: 'https://facebook.com/aavra.studio'
        };
        if (urls[platform]) {
          window.open(urls[platform], '_blank', 'noopener');
        }
      });
    });
  }

  /* ─── Initialize ─── */
  function init() {
    initNavbar();
    initNavLinks();
    initSearch();
    initMobileMenu();
    initCollections();
    initArticles();
    initLightbox();
    initAppointment();
    initLegal();
    initNewsletter();
    initScrollReveal();
    initParallax();
    initKeyboard();
    initSocial();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
