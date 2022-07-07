import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import productos from './data';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />
      <ItemDetailContainer 
        producto={producto}
      />
    </>
  );
}

export default App;
