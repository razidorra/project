export function initServices() {
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

    const totalWithTax = sum * 1.19;
    totalDisplay.textContent = totalWithTax.toFixed(2) + "€";
  }
}
