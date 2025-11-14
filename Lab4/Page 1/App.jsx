// import react from "react";
import "./App.css";
import "./components/ListSection.jsx";
import ListSections from "./components/ListSection.jsx";

function App() {
  const fruits = [
    { name: "Apple", price: 50, inStock: true },
    { name: "Banana", price: 90, inStock: false },
    { name: "Orange", price: 35, inStock: true },
    { name: "Coconut", price: 40, inStock: true },
    { name: "Pineapple", price: 70, inStock: false },
  ];

  const vegetables = [
    { name: "Carrot", price: 20, inStock: false },
    { name: "Radish", price: 30, inStock: true },
    { name: "Corn", price: 95, inStock: true },
    { name: "Celery", price: 15, inStock: false },
    { name: "Potato", price: 20, inStock: true },
  ];

  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="checkBox">
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
      <div className="grid">
        <div>
          <span className="titleName">Name </span>
          <span className="titlePrice"> Price</span>
        </div>
        <div>
          <ListSections title={"Fruits"} items={fruits}></ListSections>
        </div>

        <div>
          <ListSections title={"Vegetables"} items={vegetables}></ListSections>
        </div>
      </div>
    </>
  );
}

export default App;
