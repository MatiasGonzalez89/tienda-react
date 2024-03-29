import React, {useState, useContext} from 'react'
import styles from '../../Styles/ItemDetail.module.css'
import ItemCount from '../../components/ItemCount'
import { Link } from 'react-router-dom'
import { cartContext } from '../../CartContext/CartContext'


const ItemDetail = ({ producto }) => {

    const [agregoItem, setAgregoItem] = useState(false)

    const {addItem} = useContext(cartContext) 

    const onAdd = (contador) => {
        setAgregoItem(true)
        addItem({...producto, qty: contador})
    }
     
    return (
        <div className={styles.itemDetailContainer} key={producto.id} >
            <div>
                <img className={styles.itemDetailImg} src={producto.imgUrl} alt={producto.title} />
            </div>
            
            <div className={styles.detailContainer}>
                <h1>{producto.title}</h1>
                <p>{producto.description}</p>
                <h2>${producto.price}</h2>
                {agregoItem ? <Link to='/Cart'><button>Finalizar compra</button></Link> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}  />}
            </div>
        </div>
    )
}

export default ItemDetail

