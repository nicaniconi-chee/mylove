const noteButton = document.querySelector(".button-note");
const loveNote = document.querySelector("#love-note");

if (noteButton instanceof HTMLButtonElement && loveNote instanceof HTMLElement) {
  noteButton.addEventListener("click", () => {
    const isExpanded = noteButton.getAttribute("aria-expanded") === "true";
    noteButton.setAttribute("aria-expanded", String(!isExpanded));
    loveNote.hidden = isExpanded;
    noteButton.querySelector("span").textContent = isExpanded
      ? "Open your little note"
      : "Tuck your note away";
    noteButton.querySelector(".button-arrow").textContent = isExpanded ? "↓" : "↑";
  });
}
