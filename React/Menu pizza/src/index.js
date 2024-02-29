import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pain à l'huile d'olive italienne et au romarin",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomate et mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomate, mozarella, épinards, et ricotta",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomate, mozarella, champignon, et oignon",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomate, mozarella, et pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomate, mozarella, jambon, aragula, et burrata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Notre menu</h2>
      {/* Opérateur ternaire de 3 parties, une condition pour savoir si "numPizzas" est supérieur à 0 
      Si c'est le cas, on affiche le le <p> et le <ul>, sinon on renvoie le <p> final */}
      {numPizzas > 0 ? (
        // Création d'un Fragment pour encapsuler les différents éléments pour n'en rendre qu'un seul avec ces éléments imbriqués dans le Fragment <>
        <>
          <p>
            Cuisine italienne authentique. 6 plats créatifs au choix. Tous de
            notre four en pierre, tous biologiques, tous délicieux.
          </p>

          <ul className="pizzas">
            {/* Utilise la méthode "map" sur l'array "pizzaData" en créant un nouveau array en appliquant une fonction à chaque élément du tableau d'origine
        Ici, la fonction array prend le paramètre "pizza" qui représente chaque objet de l'array "pizzaData" */}
            {pizzas.map((pizza) => (
              // "pizzaObj" recoit l'objet "pizza" rendant les informations disponibles dans le composant <Pizza>
              // "key" est un attribut unique pour chaque élément de la liste, ici la clé est "pizza.name"
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Nous travaillons encore sur notre menu. S'il vous plaît, revenez plus
          tard
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    // Template literal pour une affectation de classe sur "li"
    // Si une des pizzas est "soldOut", on lui attribut la classe "sold-out"
    // Sinon, une string vide (rien ajouter)
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "RUPTURE DE STOCK" : pizzaObj.price + "€"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        // Donne le props "closeHour" et "openHour" à la fonction "Order"
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Nous serons ravis de vous recevoir entre {openHour}:00 et {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

// La fonction "Order" attend des props déstructuré, dans ce cas là "closeHour" et "openHour" qui sont donnés dans la fonction "Footer"
function Order({ closeHour, openHour }) {
  return (
    <div class="order">
      <p>
        Nous sommes ouverts de {openHour}:OO jusqu'à {closeHour}:OO. Venez sur
        place ou commandez en ligne
      </p>
      <button className="btn">Commander</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
