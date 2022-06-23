import './App.css';
import NavBar from './components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
