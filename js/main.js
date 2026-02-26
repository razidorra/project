import { initServices } from "./services.js";
import { initParts } from "./parts.js";
import { initBooking } from "./booking.js";
import { initAdmin } from "./admin.js";

document.addEventListener("DOMContentLoaded", () => {
  initServices();
  initParts();
  initBooking();
  initAdmin();
});
