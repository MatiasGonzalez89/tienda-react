import React from 'react'
import CartWidget from './CartWidget'
import styles from './Navbar.module.css'

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<img className={styles.logo} src="https://www.zarla.com/images/zarla-caballeros-1x1-2400x2400-20220322-bh6yhpdpxr898d7qx8my.png?crop=1:1,smart&width=250&dpr=2" alt="" />
			
			<ul className={styles.menu}>
				<li>Inicio</li>
				<li>Productos</li>
				<li>Contacto</li>
			</ul>

			<CartWidget />
		</nav>
	)
}

export default NavBar



