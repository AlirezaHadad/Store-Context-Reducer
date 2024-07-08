import { shortenText } from "../helper/helper";

import { MdDeleteOutline } from "react-icons/md";

import styles from "./BasketCart.module.css"

const BasketCart = ({data,clickHandler}) => {
    return(
        <div className={styles.card}>
            <img src={data.image} alt={data.title} />
            <p>{shortenText(data.title)}</p>
            <p>${data.price}</p>
            <div className={styles.actions}>
                {data.quantity === 1 &&(<button onClick={()=>clickHandler("REMOVE_ITEM",data)}><MdDeleteOutline/></button>)}
                {data.quantity > 1 &&(<button onClick={()=>clickHandler("DECREASE",data)}>-</button>)}
                <span>{data.quantity}</span>
                <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
            </div>
       </div>
    )
}
export default BasketCart;