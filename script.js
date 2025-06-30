// Intersection Observer for gallery fade in
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

// Modal Lightbox functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Populate header
document.querySelector('.logo').src = siteConfig.logo;
document.querySelector('h1').textContent = siteConfig.name;
document.querySelector('.glass-card p').textContent = siteConfig.tagline;

// Update actions
const actionsHTML = `
  <a href="tel:${siteConfig.phone}" class="action-btn"><i class="fas fa-phone"></i> Call</a>
  <a href="https://wa.me/${siteConfig.whatsapp}" target="_blank" class="action-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a href="https://www.instagram.com/${siteConfig.instagram}" target="_blank" class="action-btn"><i class="fab fa-instagram"></i> Instagram</a>
  <a href="https://www.facebook.com/profile.php?id=${siteConfig.facebook}" target="_blank" class="action-btn"><i class="fab fa-facebook-f"></i> Facebook</a>
`;

document.querySelector('.actions').innerHTML = actionsHTML;

// Populate gallery
const galleryGrid = document.querySelector('.gallery-grid');
galleryGrid.innerHTML = siteConfig.galleryImages.map(src => `<img src="${src}" alt="" />`).join('');

// Update footer developer name
document.querySelector('footer strong').textContent = siteConfig.developer;
