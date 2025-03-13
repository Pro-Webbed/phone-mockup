document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const header = document.querySelector(".main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const scrollIndicatorDots = document.querySelectorAll(".indicator-dot");
  const cameraTabs = document.querySelectorAll(".camera-tab");
  const cameraShowcases = document.querySelectorAll(".camera-showcase");
  const specTabs = document.querySelectorAll(".spec-tab");
  const specPanels = document.querySelectorAll(".spec-panel");
  const colorOptions = document.querySelectorAll(".color-option");
  const phonePreview = document.getElementById("phone-color-preview");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Scroll-based header styling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Update active section in scroll indicator
    updateScrollIndicator();

    // Reveal animations when scrolling
    revealElements();
  });

  // Update active section indicator
  function updateScrollIndicator() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        scrollIndicatorDots.forEach((dot) => dot.classList.remove("active"));
        scrollIndicatorDots[index].classList.add("active");
      }
    });
  }

  // Scroll indicator click handling
  scrollIndicatorDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const targetSection = document.getElementById(
        dot.getAttribute("data-section"),
      );
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Camera tabs functionality
  cameraTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = tab.getAttribute("data-mode");

      // Update active tab
      cameraTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active showcase
      cameraShowcases.forEach((showcase) => {
        showcase.classList.remove("active");
        if (showcase.id === `${mode}-mode`) {
          showcase.classList.add("active");
        }
      });
    });
  });

  // Specs tabs functionality
  specTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const specType = tab.getAttribute("data-spec");

      // Update active tab
      specTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active panel
      specPanels.forEach((panel) => {
        panel.classList.remove("active");
        if (panel.id === `${specType}-panel`) {
          panel.classList.add("active");
        }
      });
    });
  });

  // Color selector functionality
  colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const color = option.getAttribute("data-color");

      // Update active color
      colorOptions.forEach((o) => o.classList.remove("active"));
      option.classList.add("active");

      // Update phone preview (in a real implementation, this would change the image)
      // For this mockup, we'll just add a class
      phonePreview.className = `phone-${color}`;
    });
  });

  // Parallax effect
  window.addEventListener("scroll", function () {
    const parallaxBg = document.querySelector(".parallax-bg");
    const scrollPosition = window.pageYOffset;

    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  });

  // Initialize reveal animations
  function revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });

    const revealTexts = document.querySelectorAll(".reveal-text");

    revealTexts.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  // Initial reveal check
  revealElements();
});

// Mockup alert
function mockup() {
  alert("This website is purely a mockup and has little to no functionality.");
}
