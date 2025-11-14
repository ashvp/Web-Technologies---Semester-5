import "./App.css";
// import ListSections from './components/ListSections';
import ListItems from "./components/ListItems";

function App() {
  const animals = [
    { name: "Lion", sciName: "Panthero leo", weight: 120, eats: "meat" },
    {
      name: "Gorilla",
      sciName: "Gorilla beringei",
      weight: 1200,
      eats: "plants, insects",
    },
    { name: "Zebra", sciName: "Equus quagga", weight: 70, eats: "plants" },
  ];

  return (
    <>
      <div className="heading">
        <h1>Animals</h1>
      </div>
      <div>
        <div className="grid">
          {animals.map((index, items) => (
            <ListItems
              key={items}
              name={index.name}
              sciName={index.sciName}
              weight={index.weight}
              eats={index.eats}
            ></ListItems>
          ))}
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
