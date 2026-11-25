// Loaded on every page.

// Turns PDF "images" into embedded PDF viewers, so this Markdown works:
//
//   ![Description](file.pdf){ type=application/pdf }
//
// (Replaces the mkdocs-pdf plugin, which Zensical does not support.)
document$.subscribe(function () {
  document.querySelectorAll('img[type="application/pdf"]').forEach(function (img) {
    var embed = document.createElement("embed");
    embed.src = img.getAttribute("src");
    embed.type = "application/pdf";
    embed.className = "pdf-embed";
    embed.title = img.alt || "PDF";
    if (img.getAttribute("style")) embed.setAttribute("style", img.getAttribute("style"));
    img.replaceWith(embed);
  });
});
