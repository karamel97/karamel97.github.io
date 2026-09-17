document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  var overlay = document.querySelector('.nav-overlay');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    document.body.classList.remove('menu-open-lock');
    if (overlay) overlay.classList.remove('show');
  }
  function openMenu() {
    nav.classList.add('open');
    toggle.classList.add('active');
    document.body.classList.add('menu-open-lock');
    if (overlay) overlay.classList.add('show');
  }

  toggle.addEventListener('click', function () {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });
  if (overlay) overlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
});

// Hero slayt gösterisi
document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.hero-slider');
  if (!slider) return;
  var slides = slider.querySelectorAll('.slide');
  var dots = slider.querySelectorAll('.dot');
  var prevBtn = slider.querySelector('.slide-arrow.prev');
  var nextBtn = slider.querySelector('.slide-arrow.next');
  var current = 0;
  var timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAuto(); });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); startAuto(); });
  });

  startAuto();
});
