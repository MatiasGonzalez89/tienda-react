import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />
      <ItemDetailContainer />
    </>
  );
}

export default App;
