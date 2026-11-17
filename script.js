(() => {
  const stack = document.getElementById("hero-photo");
  if (!stack) return;

  const frames = Array.from(stack.querySelectorAll(".hp-img"));
  if (frames.length < 2) return;

  let index = frames.findIndex((img) => img.classList.contains("is-active"));
  if (index < 0) index = 0;

  const show = (next) => {
    frames[index].classList.remove("is-active");
    index = (next + frames.length) % frames.length;
    frames[index].classList.add("is-active");
  };

  stack.addEventListener("click", () => show(index + 1));

  stack.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      show(index + 1);
    }
  });

  stack.setAttribute("tabindex", "0");
  stack.setAttribute("role", "button");
  stack.setAttribute("aria-label", "Click to cycle portrait photos");

  let timer = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startAuto = () => {
    if (reduceMotion || timer) return;
    timer = window.setInterval(() => show(index + 1), 5200);
  };

  const stopAuto = () => {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  };

  stack.addEventListener("mouseenter", stopAuto);
  stack.addEventListener("mouseleave", startAuto);
  stack.addEventListener("focus", stopAuto);
  stack.addEventListener("blur", startAuto);

  startAuto();
})();
