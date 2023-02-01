import saladPic from "../img/salad.jpg";
import burgerPic from "../img/burger.jpg";
import pastaPic from "../img/pasta.jpg";
import steakPic from "../img/steak.jpg";

export default function component(element) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Menu";
  element.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML =
    "All of our dishes are made from scratch. We hope you enjoy your meal!";
  element.appendChild(p);

  const menu = document.createElement("div");
  menu.classList.add("menu");

  let menuItems = [
    {
      title: "Vegetable salad",
      desc: "Fresh salad with feta cheese and a light vinaigrette dressing",
      price: "$5.00",
      img: saladPic,
    },
    {
      title: "Beef Burger",
      desc: "Freshly ground beef with lettuce, tomato, and onion in a brioche bun",
      price: "$10.00",
      img: burgerPic,
    },
    {
      title: "Bacon & Cheese Penne",
      desc: "Penne pasta with bacon and cheddar cheese",
      price: "$12.00",
      img: pastaPic,
    },
    {
      title: "Steak with Vegetables",
      desc: "Sliced fillet steak with fresh root vegetables",
      price: "$15.00",
      img: steakPic,
    },
  ];

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const menuItemImg = new Image();
    menuItemImg.src = menuItems[i].img;
    menuItem.appendChild(menuItemImg);
    const menuItemTitle = document.createElement("h2");
    menuItemTitle.textContent = menuItems[i].title;
    menuItem.appendChild(menuItemTitle);
    const menuItemDesc = document.createElement("p");
    menuItemDesc.textContent = menuItems[i].desc;
    menuItem.appendChild(menuItemDesc);
    const menuItemPrice = document.createElement("p");
    menuItemPrice.textContent = menuItems[i].price;
    menuItemPrice.classList.add("price");
    menuItem.appendChild(menuItemPrice);
    menu.appendChild(menuItem);
  }

  element.appendChild(menu);

  return element;
}
