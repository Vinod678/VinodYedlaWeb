/**
 * Client-side utility functions for DOM manipulation and interactions
 * Moved from main.js - these are initialization functions that run in the browser
 */

// Navbar scroll-to-section functionality
export function initializeNavbarScrollBehavior() {
  document.querySelectorAll('nav a').forEach((link: Element) => {
    link.addEventListener('click', (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLElement;
      document.querySelectorAll('nav a').forEach((l) => l.classList.remove('active'));
      target.classList.add('active');
      const hash = (target as HTMLAnchorElement).hash;
      const section = document.querySelector(hash);
      section?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Scroll-to-top button functionality
export function initializeScrollToTop() {
  const topIcon = document.querySelector('#top-icon');
  if (!topIcon) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topIcon.classList.remove('hidden');
      topIcon.classList.add('visible');
    } else {
      topIcon.classList.remove('visible');
      topIcon.classList.add('hidden');
    }
  });

  topIcon.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Page refresh scroll to top
export function initializeScrollReset() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
}

// Typing animation for name
export function initializeNameTyping(text: string = ' Vinod Yedla', delay: number = 150) {
  let remainingText = text;
  const element = document.querySelector('.hello_name span');
  if (!element) return;

  const type = () => {
    if (remainingText.length > 0) {
      element.innerHTML += remainingText.charAt(0);
      remainingText = remainingText.substring(1);
      setTimeout(type, delay);
    }
  };

  setTimeout(type, 1500);
}

// Rotating tech roles
export function initializeTypingRoles(texts: string[] = ['Tech-Maven', 'Tech-addict', 'Surfing', 'Debugger']) {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;

  let index = 0;
  setInterval(() => {
    if (index === texts.length) {
      index = 0;
    }
    (typingText as HTMLElement).textContent = texts[index];
    index++;
  }, 2000);
}

// Page loading animation
export function initializeLoadingAnimation() {
  const loadingAnimation = document.createElement('div');
  loadingAnimation.className = 'vy-typing-animation';
  document.body.appendChild(loadingAnimation);

  let text = 'VinodYedla';
  let index = 0;
  const typingSpeed = 80;

  const type = () => {
    loadingAnimation.innerText = text.slice(0, index);
    index++;
    if (index <= text.length) {
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        loadingAnimation.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(loadingAnimation);
          const main = document.querySelector('main');
          main?.classList.remove('hidden-main');
        }, 500);
      }, 100);
    }
  };

  type();
}

// Sidebar/mobile menu toggle
export function initializeMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('#btn');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (!sidebar || !closeBtn) return;

  const menuBtnChange = () => {
    if (sidebar.classList.contains('open')) {
      closeBtn.classList.replace('bx-menu', 'bx-x');
    } else {
      closeBtn.classList.replace('bx-x', 'bx-menu');
    }
  };

  closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    menuBtnChange();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      menuBtnChange();
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (!sidebar.contains(target) && !target.matches('#btn')) {
      sidebar.classList.remove('open');
      menuBtnChange();
    }
  });
}

// Work experience popup
export function initializeWorkExperiencePopup() {
  const serviceItems = document.querySelector('.service-items');
  const popup = document.querySelector('.popup-box');

  if (!serviceItems || !popup) return;

  const popupCloseBtn = popup.querySelector('.popup-close-btn');
  const popupCloseIcon = popup.querySelector('.popup-close-icon');

  const togglePopup = () => popup.classList.toggle('open');

  serviceItems.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'button') {
      const item = target.parentElement;
      if (!item) return;

      const h3 = item.querySelector('h3')?.innerHTML;
      const readMoreCont = item.querySelector('.read-more-cont')?.innerHTML;

      if (h3 && readMoreCont) {
        popup.querySelector('h3')!.innerHTML = h3;
        popup.querySelector('.popup-body')!.innerHTML = readMoreCont;
        togglePopup();
      }
    }
  });

  popupCloseBtn?.addEventListener('click', togglePopup);
  popupCloseIcon?.addEventListener('click', togglePopup);
  popup.addEventListener('click', (event: Event) => {
    if (event.target === popup) togglePopup();
  });
}

// Education toggle
export function initializeEducationToggle() {
  const sections = [
    {
      viewLessSelector: '.bachelors-view-less',
      viewMoreSelector: '.bachelors-view-more',
      downBtnSelector: '.bachelors-button.down',
      upBtnSelector: '.bachelors-button.up',
    },
    {
      viewLessSelector: '.intermediate-view-less',
      viewMoreSelector: '.intermediate-view-more',
      downBtnSelector: '.intermediate-button.down',
      upBtnSelector: '.intermediate-button.up',
    },
    {
      viewLessSelector: '.school-view-less',
      viewMoreSelector: '.school-view-more',
      downBtnSelector: '.school-button.down',
      upBtnSelector: '.school-button.up',
    },
  ];

  sections.forEach(({ viewLessSelector, viewMoreSelector, downBtnSelector, upBtnSelector }) => {
    const viewMoreDiv = document.querySelector(viewMoreSelector);
    const viewLessDiv = document.querySelector(viewLessSelector);
    const downBtn = document.querySelector(downBtnSelector);
    const upBtn = document.querySelector(upBtnSelector);

    if (!viewMoreDiv || !downBtn) return;

    const toggleView = () => {
      if (viewMoreDiv.style.display === 'none') {
        (viewMoreDiv as HTMLElement).style.display = 'block';
        (downBtn as HTMLElement).style.display = 'none';
        (upBtn as HTMLElement).style.display = 'inline-block';
      } else {
        (viewMoreDiv as HTMLElement).style.display = 'none';
        (downBtn as HTMLElement).style.display = 'inline-block';
        (upBtn as HTMLElement).style.display = 'none';
      }
    };

    viewLessDiv?.addEventListener('click', toggleView);
    downBtn.addEventListener('click', toggleView);
  });
}

// Highlight nav links based on scroll position
export function initializeNavLinkHighlighting() {
  const sections = document.querySelectorAll('.fade-in-section');
  const navLinks = document.querySelectorAll('.nav-list li a');

  const highlightNavLink = () => {
    sections.forEach((section, index) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        navLinks.forEach((navLink) => navLink.classList.remove('active'));
        navLinks[index]?.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink);
}

// Fade-in sections on scroll
export function initializeSectionAnimations() {
  const sections = document.querySelectorAll('.fade-in-section');

  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        section.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
}

// Initialize all client-side utilities
export function initializeAllClientUtils() {
  // Only initialize if we're in the browser
  if (typeof document === 'undefined') return;

  initializeNavbarScrollBehavior();
  initializeScrollToTop();
  initializeScrollReset();
  initializeNameTyping();
  initializeTypingRoles();
  initializeMobileMenu();
  initializeWorkExperiencePopup();
  initializeEducationToggle();
  initializeNavLinkHighlighting();
  initializeSectionAnimations();

  // Load animation when page loads
  window.addEventListener('load', initializeLoadingAnimation);
}
