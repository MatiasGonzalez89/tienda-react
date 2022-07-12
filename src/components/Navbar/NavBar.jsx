import React from 'react'
import CartWidget from './CartWidget'
import styles from './Navbar.module.css'
import { Link, NavLink} from 'react-router-dom';

//camisetas, pantalones, calzado, accesorios, ropa interior

const NavBar = () => {
	
	const categories = [
		{ name: "inicio", id: 0, route: "/" },
		{ name: "shirts", id: 1, route: "/category/shirts" },
		{ name: "pants", id: 2, route: "/category/pants" },
		{ name: "shoes", id: 3, route: "/category/shoes" },
		{ name: "accessories", id: 4, route: "/category/accessories" },
		{ name: "underwear", id: 5, route: "/category/underwear" },
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



