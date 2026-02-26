export function initBooking() {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    confirmation.textContent =
      "✅ Termin erfolgreich gebucht! Wir melden uns per E-Mail.";
    form.reset();
  });
}
