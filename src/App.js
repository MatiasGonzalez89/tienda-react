import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Bienvenido! La tienda se encuentra en construcción. Vuelva pronto.'
      />
    </>
  );
}

export default App;
