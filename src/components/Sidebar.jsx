import { FaListUl } from "react-icons/fa";

import styles from "./Sidebar.module.css"

import { createQueryObject } from "../helper/helper";
import { Categories } from "../constants/List";


const Sidebar = ({SetQuery,query}) => {

    const categoeyHandler = (event) =>{
        const {tagNeme} = event.target;
        const category = event.target.innerText.toLowerCase()
        if(tagNeme === "LI") return;
        SetQuery((query) => createQueryObject(query,{ category }))
    }


    return(
    <div className={styles.sidebar}>
        <div>
            <FaListUl/>
            <p>Categories</p>
        </div>
        <ul onClick={categoeyHandler}>
            {Categories.map((item) =>(
                <li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>
            ))}
        </ul>
    </div>
    )
}
export default Sidebar;