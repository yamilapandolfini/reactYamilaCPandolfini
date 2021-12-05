import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

const App =() => {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />

    </div>
  );
}

export default App;
