import { useState } from "react";
import Header from "./components/Header";
import ItemCreate from "./components/ItemCreate";
import ItemList from "./components/ItemList";
import ItemSort from "./components/ItemSort";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const default_items = Array(16).fill({ total: null, item_name: null, purchased: null });

  const [items, setItems] = useState(default_items);
  const [total_item, setTotalItem] = useState(0);

  function createItem(item) {
    const newItems = [...items];
    newItems[total_item] = item;
    setItems(newItems);
    setTotalItem(total_item + 1);
  }

  function purchaseItem(id) {
    const newItems = [...items];
    newItems[id].purchased = newItems[id].purchased ? false : true;

    setItems(newItems);
  }

  function deleteItem(id) {
    const newItems = [];

    items.forEach((v, i) => {
      if (id !== i) newItems.push(v);
    });

    for (let j = newItems.length; j < 16; j++) {
      newItems[j] = { total: null, item_name: null, purchased: null };
    }

    setItems(newItems);
    setTotalItem(total_item - 1);
  }

  function sortItems() {}

  function clearItems() {
    setItems(default_items);
    setTotalItem(0);
    setTimeout(() => alert("Catatan telah dibersihkan..."), 100);
  }

  return (
    <div className="app-container">
      <Header />
      <ItemCreate createItem={createItem} />
      <ItemList items={items} purchaseItem={purchaseItem} deleteItem={deleteItem} />
      <ItemSort sortItems={1} clearItems={clearItems} />
      <Footer items={items} />
    </div>
  );
}

export default App;
