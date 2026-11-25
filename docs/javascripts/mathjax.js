// Loads MathJax only on pages that contain math (written with $$ ... $$ or \( ... \)).
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(function () {
  if (!document.querySelector(".arithmatex")) return;
  if (window.MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
    return;
  }
  if (document.getElementById("mathjax-script")) return;
  var s = document.createElement("script");
  s.id = "mathjax-script";
  s.src = "https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js";
  s.async = true;
  document.head.appendChild(s);
});
