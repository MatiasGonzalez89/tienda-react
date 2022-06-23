import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper #4a148c purple darken-4">
          <a href="#" class="brand-logo">E-commerce</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar;




