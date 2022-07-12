import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer' 
import Cart from './components/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter style={styles.body}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />} />
      <Route path="/category/:categoryName" element={<ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = {
  body: {
    backgroundColor: "black"
  }
}