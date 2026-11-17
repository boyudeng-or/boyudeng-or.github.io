(() => {
  const field = document.querySelector(".flow-field");
  if (!field || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let ticking = false;
  window.addEventListener("pointermove", (event) => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      field.style.transform = `translate(${x}px, ${y}px)`;
      ticking = false;
    });
  });
})();
