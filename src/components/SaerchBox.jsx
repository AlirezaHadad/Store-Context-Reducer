import { ImSearch } from "react-icons/im";

import styles from "./SaerchBox.module.css"

import { createQueryObject } from "../helper/helper";


const SaerchBox = ({saerch,SetSaerch,SetQuery}) => {
    const saerchHandler = () =>{
        SetQuery((query) => createQueryObject(query,{ saerch }))
    }
    return(
        <>
        <div className={styles.saerch}>
            <input type="text" placeholder="Saerch..." value={saerch}
             onChange={e=>SetSaerch(e.target.value.toLowerCase().trim())} />
            <button onClick={saerchHandler}><ImSearch/></button>
        </div>
        </>
    )
}
export default SaerchBox;