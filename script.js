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

// Hero fotoğraf kolajı — tıklanınca görseli karıştır
document.addEventListener('DOMContentLoaded', function () {
  var photos = document.querySelectorAll('.photo-strip .ph');
  if (!photos.length) return;
  var sources = Array.prototype.map.call(photos, function (img) { return img.getAttribute('src'); });

  photos.forEach(function (img) {
    img.addEventListener('click', function () {
      var current = img.getAttribute('src');
      var options = sources.filter(function (s) { return s !== current; });
      var next = options[Math.floor(Math.random() * options.length)];
      img.style.opacity = '0';
      setTimeout(function () {
        img.setAttribute('src', next);
        img.style.opacity = '1';
      }, 150);
    });
  });
});
