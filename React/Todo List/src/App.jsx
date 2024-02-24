import { useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

import logo from "./assets/logo.png";

export default function App() {
  const [items, setItems] = useState([]);

  const itemsCount = items.length;

  return (
    <div className="app">
      <Header
        logo={logo}
        onAddItem={(newItem) => setItems([...items, newItem])}
      />
      <List items={items} setItems={setItems} itemsCount={itemsCount} />
      <Footer setItems={setItems} itemsCount={itemsCount} />
    </div>
  );
}
