window.onload = function () {
  const elements = document.querySelectorAll(".mouse-cursor-gradient-tracking");

  elements.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      let rect = btn.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    });
  });
};
