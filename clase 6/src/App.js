import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemCounter from "./components/item-counter/ItemCounter";
import ItemListContainerclase6 from "./components/item-list-containerclase6/ItemListContainer";





function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCounter stock={4}/>
      <ItemListContainerclase6 />

    </div>
  );
}

export default App;

