import BasketCart from "../components/BasketCart";
import BasketSidebar from "../components/BasketSidebar";

import { useCart } from "../context/CartContext";

import styles from "./Checkout.module.css"

const Checkout = () => {

    const [ state , dispatch ] = useCart()
    const clickHandler = ( type, payload ) => dispatch({type,payload})

    return(
        <>
            {state.itemsCounter === 0 &&
            (<div className={styles.containerCard}>
                <img className={styles.CardImg} src="/shoppingCart.png" />
                <p className={styles.CardText}>Your shopping cart is empty</p>
            </div>)}
            <div className={styles.container}>
            {state.itemsCounter !== 0 &&(
                <BasketSidebar state={state} clickHandler={clickHandler} />
            )}
                <div className={styles.products}>
                    {state.selectedItems.map((product)=>(
                        <BasketCart key={product.id} data={product} clickHandler={clickHandler} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Checkout;