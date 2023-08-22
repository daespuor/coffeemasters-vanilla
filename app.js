import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {
  store: Store,
  router: Router,
};

// It's better to wait for this event before manipulation DOM elements
document.addEventListener("DOMContentLoaded", async function (event) {
  loadData();
  app.router.init();
});
