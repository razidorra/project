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
  { name: "Reifen", category: "reifen", available: true },
  { name: "Batterien", category: "batterie", available: false },
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

//Service Buchung
const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  confirmation.textContent =
    "✅ Termin erfolgreich gebucht! Wir melden uns per E-Mail.";
  form.reset();
});

// Admin Dashboard
const ordersContainer = document.getElementById("orders");

let orders = JSON.parse(localStorage.getItem("orders")) || [
  { id: 1, customer: "Max Mustermann", status: "Offen" },
  { id: 2, customer: "Erika Musterfrau", status: "In Arbeit" },
];

function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function renderOrders() {
  ordersContainer.innerHTML = "";

  orders.forEach((order) => {
    const div = document.createElement("div");
    div.className = "border p-4 rounded-xl bg-gray-50";

    div.innerHTML = `
      <p class="font-semibold">${order.customer}</p>
      <p class="mb-2">Status: ${order.status}</p>
      <div class="flex gap-2">
        <button onclick="updateStatus(${order.id}, 'In Arbeit')"
          class="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm">
          In Arbeit
        </button>
        <button onclick="updateStatus(${order.id}, 'Abgeschlossen')"
          class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
          Abschließen
        </button>
      </div>
    `;

    ordersContainer.appendChild(div);
  });
}

function updateStatus(id, newStatus) {
  orders = orders.map((order) =>
    order.id === id ? { ...order, status: newStatus } : order,
  );

  saveOrders();
  renderOrders();
}

renderOrders();
