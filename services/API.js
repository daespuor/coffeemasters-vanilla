const API = {
  url: "/data/menu.json",
  fetchMenu: async function () {
    const response = await fetch(API.url);
    const data = await response.json();
    return data;
  },
};

export default API;
