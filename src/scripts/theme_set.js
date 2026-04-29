export function theme_set(theme) {
  const body = document.documentElement;
  if (theme === "dark") {
    if (body.classList.contains("light")) { body.classList.remove("light"); }
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    if (body.classList.contains("dark")) { body.classList.remove("dark"); }
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}
