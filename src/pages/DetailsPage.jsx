import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loder from "../components/Loder";
import styles from "./DetailsPage.module.css"

const DetailsPage = () => {

    const { id } = useParams();
    const productDetails = useProductDetails( +id )
    if(!productDetails) return <Loder/>

    return(
        <>
            <div className={styles.container}>
                <img src={productDetails.image} alt={productDetails.title} />
                <div className={styles.information}>
                    <h3 className={styles.title}>{productDetails.title}</h3>
                    <p className={styles.description}>{productDetails.description}</p>
                    <p className={styles.category}><SiOpenproject/>{productDetails.category}</p>
                    <div>
                        <span><IoMdPricetag/>{productDetails.price}$</span>
                        <Link to="/Products"><FaArrowLeft/>Back to shop</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsPage;