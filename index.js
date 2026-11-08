// ============================================
// SKILL FILTER
// Every project card has data-skills="python pytorch ...".
// Clicking a skill (in Skills or the filter bar) hides cards
// that don't use it and shows the "how I used it" notes.
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const status = document.querySelector(".filter-status");

  function applyFilter(skill) {
    let shown = 0;

    cards.forEach((card) => {
      const skills = card.dataset.skills.split(" ");
      const match = skill === "all" || skills.includes(skill);
      card.hidden = !match;
      if (match) shown++;

      // Show only the note for the selected skill
      card.querySelectorAll(".skill-note").forEach((note) => {
        note.classList.toggle("visible", note.dataset.for === skill);
      });
      // Highlight the matching chip
      card.querySelectorAll(".chip").forEach((chip) => {
        chip.classList.toggle("lit", chip.title === nameOf(skill));
      });
    });

    filterBtns.forEach((b) => b.classList.toggle("active", b.dataset.skill === skill));

    // Hide Game Dev / Research floors if nothing in them matches.
    // The Projects floor always stays (it holds the filter bar).
    const elsewhere = [];
    document.querySelectorAll(".card-grid").forEach((grid) => {
      const floor = grid.closest(".floor");
      const any = [...grid.querySelectorAll(".card")].some((c) => !c.hidden);
      if (floor.id !== "floor-4") {
        floor.classList.toggle("filtered-out", !any && skill !== "all");
        if (any && skill !== "all") elsewhere.push(floor);
      }
    });

    const here = document.querySelectorAll("#floor-4 .card:not([hidden])").length;
    if (skill === "all") {
      status.textContent = "";
    } else {
      const where = elsewhere
        .map((f) => `<a href="#${f.id}">${f.querySelector("h2").textContent}</a>`)
        .join(" and ");
      status.innerHTML =
        `Showing ${shown} project${shown === 1 ? "" : "s"} using ${nameOf(skill)}.` +
        (here === 0 && where ? ` None on this floor, see ${where} below ↓` :
         where ? ` More in ${where} ↓` : "");
    }
  }

  function nameOf(skill) {
    const btn = document.querySelector(`.filter-btn[data-skill="${skill}"] span`);
    return btn ? btn.textContent : skill;
  }

  // Filter bar buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.skill));
  });

  // Skill tiles in Floor 2: filter, then jump to Projects
  document.querySelectorAll(".skill-tile[data-skill]").forEach((tile) => {
    tile.addEventListener("click", () => {
      applyFilter(tile.dataset.skill);
      document.getElementById("floor-4").scrollIntoView({ behavior: "smooth" });
    });
  });
});
