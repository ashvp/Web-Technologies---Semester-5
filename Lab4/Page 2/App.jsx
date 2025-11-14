import "./App.css";
import ListSections from "./components/ListSections";
import ListItems from "./components/ListItems";

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
      <div className="heading">
        <h1>Render List</h1>
      </div>
      <div className="grid">
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
