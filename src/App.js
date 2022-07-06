import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />
    </>
  );
}

export default App;
