// PreisRechner
const services = document.querySelectorAll(".service");
const totalDisplay = document.getElementById("total");

services.forEach((service) => {
  service.addEventListener("change", calculateTotal);
});

function calculateTotal() {
  let sum = 0;
  services.forEach((service) => {
    if (service.checked) {
      sum += parseFloat(service.value);
    }
  });

  const totalwithTax = sum * 1.19;
  totalDisplay.textContent = totalwithTax.toFixed(2) + "€";
}

// Ersatzteil
const parts = [
  { name: "Bremsscheibe", category: "bremsen", available: true },
  { name: "LED Scheinwerfer", category: "lichter", available: false },
  { name: "Ölfilter", category: "filter", available: true },
  { name: "Bremsbläge", category: "bremsen", available: true },
];

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
    <p class="${part.available ? "text-green-600" : "text-red-600"} font-medium"> ${part.available ? "Verfügbar" : "Nicht Verfügbar"}</p>
    `;
    partsList.appendChild(div);
  });
}

filter.addEventListener("change", (e) => {
  renderParts(e.target.value);
});
renderParts();
