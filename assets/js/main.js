/**
 * NADIOS Homes & Properties Limited — Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initActiveNav();
  initScrollReveal();
  initCookieConsent();
  initStatsCounter();
  initBlueprintDraw();
  initServicesAccordion();
  initTestimonials();
  initFAQAccordion();
  initGalleryFilter();
  initGalleryLightbox();
  initProjectFilter();
  initCalculator();
  initContactForm();
  initProjectEnquiryForm();
  initLucideIcons();
});

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ============================================
   Navbar scroll behaviour
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const isHome = document.body.classList.contains('home-page');
  const scrollThreshold = 60;

  function updateNavbar() {
    if (!isHome) return;
    if (window.scrollY > scrollThreshold) {
      navbar.classList.remove('nav-transparent');
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.add('nav-transparent');
      navbar.classList.remove('nav-scrolled');
    }
  }

  if (isHome) {
    navbar.classList.add('nav-transparent');
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  } else {
    navbar.classList.add('nav-scrolled');
  }
}

/* ============================================
   Mobile hamburger menu
   ============================================ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!hamburger || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', closeNav);

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeNav();
    }
  });
}

/* ============================================
   Active nav link detection
   ============================================ */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   Scroll-triggered fade-in (IntersectionObserver)
   ============================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!reveals.length) return;

  if (prefersReducedMotion()) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ============================================
   Blueprint SVG stroke draw-in
   ============================================ */
function initBlueprintDraw() {
  const heroBp = document.getElementById('heroBlueprint');
  const aboutBp = document.getElementById('aboutBlueprint');

  if (prefersReducedMotion()) {
    [heroBp, aboutBp].forEach((svg) => {
      if (!svg) return;
      svg.classList.add('drawn');
      svg.querySelectorAll('.bp-line').forEach((line) => {
        line.style.strokeDasharray = 'none';
        line.style.strokeDashoffset = '0';
      });
    });
    return;
  }

  if (heroBp) {
    // Draw on load as part of hero sequence
    requestAnimationFrame(() => {
      setTimeout(() => heroBp.classList.add('drawn'), 200);
    });
  }

  if (aboutBp) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutBp.classList.add('drawn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(aboutBp);
  }
}

/* ============================================
   Services accordion
   ============================================ */
function initServicesAccordion() {
  const root = document.getElementById('servicesAccordion');
  if (!root) return;

  const items = root.querySelectorAll('.service-acc-item');

  items.forEach((item) => {
    const trigger = item.querySelector('.service-acc-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.service-acc-trigger')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================
   Cookie consent banner
   ============================================ */
function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('cookieAccept');
  if (!banner || !acceptBtn) return;

  if (!localStorage.getItem('nadios-cookie-consent')) {
    setTimeout(() => banner.classList.add('visible'), 1000);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('nadios-cookie-consent', 'accepted');
    banner.classList.remove('visible');
  });
}

/* ============================================
   Number counter animation (stats section)
   ============================================ */
function initStatsCounter() {
  const stats = document.querySelectorAll('[data-count]');
  if (!stats.length) return;

  if (prefersReducedMotion()) {
    stats.forEach((el) => {
      const target = el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      el.textContent = prefix + target + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

function animateCounter(el) {
  const target = el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const isNumeric = /^\d+$/.test(target);

  if (!isNumeric) {
    el.textContent = prefix + target + suffix;
    return;
  }

  const end = parseInt(target, 10);
  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * end);
    el.textContent = prefix + current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = prefix + end + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   Testimonials — editorial single-slide
   ============================================ */
function initTestimonials() {
  // New editorial component
  const editorial = document.getElementById('testimonialsEditorial');
  if (editorial) {
    initEditorialTestimonials(editorial);
    return;
  }

  // Legacy track carousel (if any page still uses it)
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track || !dots.length) return;

  let current = 0;
  const total = dots.length;

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  if (!prefersReducedMotion()) {
    setInterval(() => {
      goTo((current + 1) % total);
    }, 6000);
  }
}

function initEditorialTestimonials(root) {
  const slides = root.querySelectorAll('.testimonial-slide');
  const dots = root.querySelectorAll('.testimonial-dot');
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const total = slides.length;

  function goTo(index) {
    current = (index + total) % total;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
    });
    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function startAuto() {
    if (prefersReducedMotion() || total < 2) return;
    stopAuto();
    timer = setInterval(() => goTo(current + 1), 6500);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startAuto();
    });
  });

  // Touch swipe support
  let touchStartX = 0;
  root.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  root.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) < 40) return;
    goTo(current + (dx < 0 ? 1 : -1));
    startAuto();
  }, { passive: true });

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);

  goTo(0);
  startAuto();
}

/* ============================================
   FAQ accordion
   ============================================ */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((i) => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ============================================
   Gallery filter tabs
   ============================================ */
function initGalleryFilter() {
  const tabs = document.querySelectorAll('.gallery-filter .filter-tab');
  const items = document.querySelectorAll('.gallery-item');
  if (!tabs.length || !items.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      items.forEach((item) => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
          item.classList.remove('gallery-hidden');
        } else {
          item.classList.add('gallery-hidden');
        }
      });
    });
  });
}

/* ============================================
   Gallery lightbox
   ============================================ */
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const items = document.querySelectorAll('.gallery-item, .detail-gallery .img-placeholder');
  const content = lightbox.querySelector('.lightbox-content');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(document.querySelectorAll('.gallery-item:not(.gallery-hidden), .detail-gallery .img-placeholder'));
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = visibleItems[currentIndex];
    if (!item) return;

    const label = item.querySelector('span')?.textContent || item.textContent.trim();
    content.innerHTML = `<div class="img-placeholder" style="aspect-ratio:16/9;min-height:400px;"><span>${label}</span></div>`;
    if (caption) caption.textContent = label;
  }

  function navigate(direction) {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      visibleItems = getVisibleItems();
      const idx = visibleItems.indexOf(item);
      openLightbox(idx >= 0 ? idx : index);
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/* ============================================
   Project filter tabs
   ============================================ */
function initProjectFilter() {
  const tabs = document.querySelectorAll('.projects-filter .filter-tab');
  const projects = document.querySelectorAll('[data-status]');
  if (!tabs.length || !projects.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      projects.forEach((project) => {
        const status = project.dataset.status;
        if (filter === 'all' || status === filter) {
          project.classList.remove('project-card-hidden');
        } else {
          project.classList.add('project-card-hidden');
        }
      });
    });
  });
}

/* ============================================
   Investment calculator
   ============================================ */
function initCalculator() {
  const calcForm = document.getElementById('calculatorForm');
  if (!calcForm) return;

  const priceSlider = document.getElementById('propertyPrice');
  const depositSlider = document.getElementById('depositPercent');
  const yieldSlider = document.getElementById('rentalYield');
  const appreciationSlider = document.getElementById('appreciationRate');
  const tenureInputs = document.querySelectorAll('input[name="loanTenure"]');

  const outputs = {
    monthlyRental: document.getElementById('monthlyRental'),
    annualRental: document.getElementById('annualRental'),
    loanAmount: document.getElementById('loanAmount'),
    capitalGain: document.getElementById('capitalGain'),
    projectedValue: document.getElementById('projectedValue'),
    totalROI: document.getElementById('totalROI'),
  };

  const displays = {
    price: document.getElementById('priceDisplay'),
    deposit: document.getElementById('depositDisplay'),
    yield: document.getElementById('yieldDisplay'),
    appreciation: document.getElementById('appreciationDisplay'),
  };

  function formatNaira(value) {
    return '₦' + Math.round(value).toLocaleString('en-NG');
  }

  function animateValue(el, newValue, formatter) {
    if (!el) return;
    const formatted = formatter ? formatter(newValue) : newValue;
    el.style.opacity = '0.5';
    setTimeout(() => {
      el.textContent = formatted;
      el.style.opacity = '1';
    }, 150);
  }

  function calculate() {
    const price = parseFloat(priceSlider.value);
    const depositPct = parseFloat(depositSlider.value);
    const rentalYield = parseFloat(yieldSlider.value);
    const appreciation = parseFloat(appreciationSlider.value);

    displays.price.textContent = formatNaira(price);
    displays.deposit.textContent = depositPct + '%';
    displays.yield.textContent = rentalYield + '%';
    displays.appreciation.textContent = appreciation + '%';

    const depositAmount = price * (depositPct / 100);
    const loan = price - depositAmount;
    const annualRental = price * (rentalYield / 100);
    const monthlyRental = annualRental / 12;
    const projectedValue = price * Math.pow(1 + appreciation / 100, 5);
    const capitalGain = projectedValue - price;
    const totalRental5Years = annualRental * 5;
    const totalReturn = capitalGain + totalRental5Years;
    const roi = depositAmount > 0 ? (totalReturn / depositAmount) * 100 : 0;

    animateValue(outputs.monthlyRental, monthlyRental, formatNaira);
    animateValue(outputs.annualRental, annualRental, formatNaira);
    animateValue(outputs.loanAmount, loan, formatNaira);
    animateValue(outputs.capitalGain, capitalGain, formatNaira);
    animateValue(outputs.projectedValue, projectedValue, formatNaira);
    animateValue(outputs.totalROI, roi, (v) => v.toFixed(1) + '%');
  }

  [priceSlider, depositSlider, yieldSlider, appreciationSlider].forEach((el) => {
    el?.addEventListener('input', calculate);
  });

  tenureInputs.forEach((input) => {
    input.addEventListener('change', calculate);
  });

  calculate();
}

/* ============================================
   Contact form validation
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const success = form.querySelector('.form-success');
    if (success) {
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }
  });
}

function initProjectEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const success = form.querySelector('.form-success');
    if (success) {
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }
  });
}

function validateForm(form) {
  let valid = true;
  const fields = form.querySelectorAll('[required]');

  fields.forEach((field) => {
    const group = field.closest('.form-group');
    const errorEl = group?.querySelector('.form-error');
    group?.classList.remove('error');

    if (!field.value.trim()) {
      valid = false;
      group?.classList.add('error');
      if (errorEl) errorEl.textContent = 'This field is required.';
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      valid = false;
      group?.classList.add('error');
      if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
    } else if (errorEl) {
      errorEl.textContent = '';
    }
  });

  return valid;
}

/* ============================================
   Lucide icons
   ============================================ */
function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
