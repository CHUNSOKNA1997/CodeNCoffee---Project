const menuGrid = document.querySelector(".menu-grid");

const menu = [
  {
    Image: "./images/iced-latte-menu.jpg",
    name: "Ice Amaricano",
    sugar: "15%",
    priceCent: 2500,
  },
  {
    Image: "./images/iced-latte-menu.jpg",
    name: "Matcha",
    sugar: "15%",
    priceCent: 2500,
  },
  {
    Image: "./images/iced-latte-menu.jpg",
    name: "Milooo",
    sugar: "15%",
    priceCent: 2500,
  },
];

menu.forEach((item) => {
  menuGrid.innerHTML(menu);
});
