export function initAdmin() {
  const ordersContainer = document.getElementById("orders");

  let orders = JSON.parse(localStorage.getItem("orders")) || [
    { id: 1, customer: "Eli Müller", status: "Offen" },
    { id: 2, customer: "John Don", status: "In Arbeit" },
  ];

  function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  function updateStatus(id, newStatus) {
    orders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order,
    );

    saveOrders();
    renderOrders();
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
          <button class="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm">
            In Arbeit
          </button>
          <button class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
            Abschließen
          </button>
        </div>
      `;

      const buttons = div.querySelectorAll("button");

      buttons[0].addEventListener("click", () =>
        updateStatus(order.id, "In Arbeit"),
      );

      buttons[1].addEventListener("click", () =>
        updateStatus(order.id, "Abgeschlossen"),
      );

      ordersContainer.appendChild(div);
    });
  }

  renderOrders();
}
