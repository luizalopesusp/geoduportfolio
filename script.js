// Lightbox simples e acessível
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbClose = document.querySelector('.lb-close');

function openLightbox(src, title, desc, alt) {
  lbImg.src = src;
  lbImg.alt = alt || title || '';
  lbCaption.textContent = [title, desc].filter(Boolean).join(' — ');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lbImg.src = '';
}

// Abrir ao clicar nos cards
document.querySelectorAll('.card-link').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const large = a.getAttribute('href');
    const title = a.dataset.title || '';
    const desc  = a.dataset.desc || '';
    const imgEl = a.querySelector('img');
    openLightbox(large, title, desc, imgEl?.alt || '');
  });
});

// Fechar
lbClose.addEventListener('click', closeLightbox);
lb.addEventListener('click', (e) => {
  if (e.target === lb) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
});
