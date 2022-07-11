import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div style={styles.body}>
      <NavBar />
      <ItemListContainer 
        greeting='Bienvenido a mi tienda online.'
      />
    </div>
  );
}

export default App;

const styles = {
  body: {
    backgroundColor: "black"
  }
}