// Typing animation for home page
const text = "Full Stack Developer | Node.js | MongoDB | C++";
const typingElement = document.getElementById("typing-text");
if (typingElement) {
  typingElement.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    } else {
      setTimeout(() => {
        typingElement.textContent = "";
        i = 0;
        typeWriter();
      }, 2000);
    }
  }
  typeWriter();
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  if (mobileMenuToggle && mobileMenu && mobileOverlay) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('active');
      if (isOpen) {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      } else {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
      }
    });
    mobileOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const href = link.getAttribute('href');
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
  }
});

// Handle home link - scroll to top if on home page, navigate if on other pages
document.querySelectorAll('a[href="/"], a[href="home.html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    if (
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('home.html') ||
      window.location.pathname.endsWith('index.html')
    ) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Tech stack tab switching
document.querySelectorAll('.tech-cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tech-cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tech-cat-content').forEach(c => c.style.display = 'none');
    const targetCategory = document.getElementById(this.dataset.category);
    if (targetCategory) {
      targetCategory.style.display = 'block';
    }
  });
});

// Active navigation links based on scroll (home page only)
window.addEventListener('scroll', () => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('home.html') ||
    window.location.pathname.endsWith('index.html')
  ) {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    // Home link active state at top
    const homeLink = document.querySelector('a[href="/"], a[href="home.html"]');
    const mobileHomeLink = document.querySelector('.mobile-menu a[href="/"], .mobile-menu a[href="home.html"]');
    if (homeLink && window.scrollY < 200) {
      homeLink.classList.add('active');
      if (mobileHomeLink) mobileHomeLink.classList.add('active');
    } else if (homeLink) {
      homeLink.classList.remove('active');
      if (mobileHomeLink) mobileHomeLink.classList.remove('active');
    }
  }
});

// Set initial active state based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');
  const mobileNavLinks = document.querySelectorAll('.mobile-menu a');
  navLinks.forEach(link => link.classList.remove('active'));
  mobileNavLinks.forEach(link => link.classList.remove('active'));

  // Use endsWith for static HTML files
  if (currentPath.endsWith('projects.html')) {
    const projectsLink = document.querySelector('a[href="#projects-preview"]');
    const mobileProjectsLink = document.querySelector('.mobile-menu a[href="#projects-preview"]');
    if (projectsLink) projectsLink.classList.add('active');
    if (mobileProjectsLink) mobileProjectsLink.classList.add('active');
  } else if (currentPath.endsWith('full_tech_stack.html')) {
    const techStackLink = document.querySelector('a[href="#techstack"]');
    const mobileTechStackLink = document.querySelector('.mobile-menu a[href="#techstack"]');
    if (techStackLink) techStackLink.classList.add('active');
    if (mobileTechStackLink) mobileTechStackLink.classList.add('active');
  } else if (currentPath.endsWith('full_achi.html')) {
    const awardsLink = document.querySelector('a[href="#awards"]');
    const mobileAwardsLink = document.querySelector('.mobile-menu a[href="#awards"]');
    if (awardsLink) awardsLink.classList.add('active');
    if (mobileAwardsLink) mobileAwardsLink.classList.add('active');
  } else if (currentPath.endsWith('about.html')) {
    const aboutLink = document.querySelector('a[href="#about"]');
    const mobileAboutLink = document.querySelector('.mobile-menu a[href="#about"]');
    if (aboutLink) aboutLink.classList.add('active');
    if (mobileAboutLink) mobileAboutLink.classList.add('active');
  } else if (currentPath.endsWith('contact.html')) {
    const contactLink = document.querySelector('a[href="#connect"]');
    const mobileContactLink = document.querySelector('.mobile-menu a[href="#connect"]');
    if (contactLink) contactLink.classList.add('active');
    if (mobileContactLink) mobileContactLink.classList.add('active');
  } else if (currentPath.endsWith('extracurricular.html')) {
    const activitiesLink = document.querySelector('a[href="extracurricular.html"]');
    const mobileActivitiesLink = document.querySelector('.mobile-menu a[href="extracurricular.html"]');
    if (activitiesLink) activitiesLink.classList.add('active');
    if (mobileActivitiesLink) mobileActivitiesLink.classList.add('active');
  } else if (
    currentPath === '/' ||
    currentPath.endsWith('home.html') ||
    currentPath.endsWith('index.html')
  ) {
    window.dispatchEvent(new Event('scroll'));
  }

  // Handle hash navigation on page load
  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
});

// Visitor Counter Real-time Updates
function updateVisitorCount() {
  fetch('/api/visitor-count')
    .then(response => response.json())
    .then(data => {
      const countDisplay = document.querySelector('.count-display');
      if (countDisplay && data.count !== undefined) {
        const currentCount = parseInt(countDisplay.textContent);
        if (data.count > currentCount) {
          countDisplay.classList.add('updating');
          setTimeout(() => {
            countDisplay.textContent = data.count;
            countDisplay.classList.remove('updating');
          }, 250);
        } else {
          countDisplay.textContent = data.count;
        }
      }
    })
    .catch(error => {
      console.error('Error updating visitor count:', error);
    });
}

// Disable right-click context menu
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
//