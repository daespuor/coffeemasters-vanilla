const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const route = link.getAttribute("href");
        Router.go(route);
      });
    });
    // Event handler for back/forward button
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    //Check initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Routing to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Home";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Order";
        break;

      default:
        if (route.startsWith("/product/")) {
          const productId = route.split("/")[2];
          pageElement = document.createElement("h1");
          pageElement.textContent = `Product ${productId}`;
          pageElement.dataset.productId = productId;
        }
    }

    if (!pageElement) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "404";
    }

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
