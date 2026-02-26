const parts = [
  { name: "Bremsscheibe", category: "bremsen", available: true },
  { name: "LED Scheinwerfer", category: "lichter", available: false },
  { name: "Ölfilter", category: "filter", available: false },
  { name: "Bremsbeläge", category: "bremsen", available: true },
  { name: "Reifen", category: "reifen", available: true },
  { name: "Batterien", category: "batterien", available: true },
];

export function initParts() {
  const partsList = document.getElementById("partsList");
  const filter = document.getElementById("filter");

  function renderParts(value = "all") {
    partsList.innerHTML = "";

    const filtered = parts.filter((part) => {
      if (value === "all") return true;
      if (value === "available") return part.available;
      return part.category === value;
    });

    filtered.forEach((part) => {
      const div = document.createElement("div");
      div.className = "border p-4 rounded-xl bg-gray-50";

      div.innerHTML = `
        <h3 class="font-semibold">${part.name}</h3>
        <p class="text-sm text-gray-500">Kategorie: ${part.category}</p>
        <p class="${
          part.available ? "text-green-600" : "text-red-600"
        } font-medium">
          ${part.available ? "Verfügbar" : "Nicht verfügbar"}
        </p>
      `;

      partsList.appendChild(div);
    });
  }

  filter.addEventListener("change", (e) => {
    renderParts(e.target.value);
  });

  renderParts();
}
