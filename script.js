// Populate header
document.querySelector('.logo').src = siteConfig.logo;
document.querySelector('h1').textContent = siteConfig.name;
document.querySelector('.glass-card p').textContent = siteConfig.tagline;

// Populate actions
document.querySelector('.actions').innerHTML = `
  <a href="tel:${siteConfig.phone}" class="action-btn"><i class="fas fa-phone"></i> Call</a>
  <a href="https://wa.me/${siteConfig.whatsapp}" target="_blank" class="action-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a href="https://www.instagram.com/${siteConfig.instagram}" target="_blank" class="action-btn"><i class="fab fa-instagram"></i> Instagram</a>
  <a href="https://www.facebook.com/profile.php?id=${siteConfig.facebook}" target="_blank" class="action-btn"><i class="fab fa-facebook-f"></i> Facebook</a>
`;

// Populate gallery
const galleryGrid = document.querySelector('.gallery-grid');
galleryGrid.innerHTML = siteConfig.galleryImages.map(src => `<img src="${src}" alt="">`).join('');

// Footer developer name
document.querySelector('footer strong').textContent = siteConfig.developer;

// Gallery fade in on scroll
const gallerySection = document.getElementById('gallerySection');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gallerySection.classList.add('visible');
      observer.unobserve(gallerySection);
    }
  });
}, { threshold: 0.1 });
observer.observe(gallerySection);

// Modal lightbox
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => { modal.style.display = 'none'; };
window.onclick = event => { if (event.target == modal) modal.style.display = 'none'; };

// Populate About Us section
document.getElementById('aboutTitle').textContent = siteConfig.aboutUs.title;
document.getElementById('aboutTag').textContent = siteConfig.aboutUs.tag;
document.getElementById('aboutDescription').textContent = siteConfig.aboutUs.description;

// Populate style options
const styleOptionsContainer = document.getElementById('styleOptions');
styleOptionsContainer.innerHTML = siteConfig.aboutUs.styles
  .map(style => `<div class="style-pill">${style}</div>`)
  .join('');

// Populate benefits list
const benefitsList = document.getElementById('benefitsList');
benefitsList.innerHTML = siteConfig.aboutUs.benefits
  .map(benefit => `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`)
  .join('');

// Populate CTA section
document.getElementById('ctaText').innerHTML = siteConfig.aboutUs.cta.text;
document.getElementById('urgencyNote').textContent = siteConfig.aboutUs.cta.urgency;
document.getElementById('ctaButtonText').textContent = siteConfig.aboutUs.cta.buttonText;