
import { useProducts } from "../context/ProductsContext"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loder from "../components/Loder";
import { createQueryObject, filterProducts, getInitialQuery, saerchProducts } from "../helper/helper";
import SaerchBox from "../components/SaerchBox";
import Sidebar from "../components/Sidebar";


const ProductsPage = ()=>{
    const products = useProducts()
    const [saerch , SetSaerch] = useState("")
    const [displayed , Setdisplayed] = useState([])
    const [query , SetQuery] = useState({})

    const [saerchParams , setSaerchParams] = useSearchParams()

    useEffect(() => {
        Setdisplayed(products)
        SetQuery(getInitialQuery(saerchParams))
    },[products])

    useEffect(() => {
        setSaerchParams(query)
        SetSaerch(query.saerch || "")
        let finalProducrs = saerchProducts(products, query.saerch)
        finalProducrs = filterProducts(finalProducrs , query.category)

        Setdisplayed(finalProducrs)
    },[query])

    return(
        <>
        <SaerchBox saerch={saerch} SetSaerch={SetSaerch} SetQuery={SetQuery} />
        <div className={styles.container}>
            <div className={styles.products}>
                {!displayed.length && <Loder/>}
                {displayed.map((product) =>(
                    <Card key={product.id} data={product} />
                ))}
            </div>
        <Sidebar query={query} SetQuery={SetQuery} />
        </div>
        </>
    )
}
export default ProductsPage