import { RotatingLines } from "react-loader-spinner";
import styles from "./Loder.module.css"
const Loder = () => {
    return(
        <div className={styles.loder}>
            <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
        </div>
    )
}
export default Loder ;