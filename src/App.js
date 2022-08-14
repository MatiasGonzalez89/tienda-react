import '../src/Styles/App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailsContainer/ItemDetailContainer';
import Cart from './components/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomProvider from './CartContext/CartContext';
import Formulario from './components/Formulario';


function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer
            greeting='Bienvenido a mi tienda online.'
          />} />
          <Route path="/category/:categoryName" element={<ItemListContainer
            greeting='Bienvenido a mi tienda online.'
          />} />
          <Route path="/ItemDetailContainer/ItemDetail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;