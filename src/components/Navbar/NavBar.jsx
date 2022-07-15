import React from 'react'
import CartWidget from './CartWidget'
import styles from './Navbar.module.css'
import { Link, NavLink} from 'react-router-dom';

//camisetas, pantalones, calzado, accesorios, ropa interior

const NavBar = () => {
	
	const categories = [
		{ name: "Inicio", id: 0, route: "/" },
		{ name: "Remeras", id: 1, route: "/category/remeras" },
		{ name: "Jeans", id: 2, route: "/category/jeans" },
		{ name: "Zapatillas", id: 3, route: "/category/zapatillas" },
		{ name: "Abrigos", id: 4, route: "/category/abrigos" },
		{ name: "Chaquetas", id: 5, route: "/category/chaquetas" },
	];
	
	return (
		<header>
			<Link to="/"><img className={styles.logo} src="https://www.zarla.com/images/zarla-caballeros-1x1-2400x2400-20220322-bh6yhpdpxr898d7qx8my.png?crop=1:1,smart&width=250&dpr=2" alt="logo" /></Link>
			
			<nav className={styles.menu}>
				{categories.map((category) => 
					<NavLink key={category.id} className={styles.link} to={category.route}>{category.name}</NavLink>
				)}
			</nav>

			<Link to="/cart"><CartWidget /></Link>
		</header>
	)
}

export default NavBar



