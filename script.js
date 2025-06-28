// Animate all buttons on hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.classList.add('shadow-lg'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('shadow-lg'));
});

// Fade-in effect for elements on scroll//
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

