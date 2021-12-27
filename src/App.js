import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';



const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path='/'><ItemListContainer/></Route>
            <Route exact path='/category/:categoryId'><ItemListContainer/></Route>
            <Route path='/detail/:paramId'><ItemDetailContainer /></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
