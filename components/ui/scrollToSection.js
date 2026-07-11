export function scrollToSection(id) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.history.replaceState(null, "", window.location.pathname);
}
