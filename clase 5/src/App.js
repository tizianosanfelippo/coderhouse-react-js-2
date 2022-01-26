import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemCounter from "./components/item-counter/ItemCounter";



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCounter />

    </div>
  );
}

export default App;

