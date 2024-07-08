import { Link } from "react-router-dom"

import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { MdEmail } from "react-icons/md";

import { useCart } from "../context/CartContext"

import styles from "./Layout.module.css"

const Layout = ({ children }) => {

    const [state] = useCart()

    return(
        <>
        <header className={styles.header}>
            <Link to="Products">Store</Link>
            <Link to="checkout">
                <div><PiShoppingCartSimpleBold/>
                {!!state.itemsCounter && (<span>{state.itemsCounter}</span>)}
                </div>
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Alireza Hadad</p>
            <p>Email : therealalireza2@gmail.com</p>
        </footer>
        </>
    )
}

export default Layout