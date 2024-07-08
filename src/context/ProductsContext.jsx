import { createContext, useContext, useEffect, useState } from "react"
import Api from "../services/config"

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [product , setProduct] = useState([])

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                setProduct(await Api.get("/products"))
            } catch (error) {
                console.log(error.massage);   
            }
        }
        fetchProduct()
    },[])

    return(
        <ProductsContext.Provider value={product}>
            {children}
        </ProductsContext.Provider>
    )
}

// custom hook
const useProducts = () => {
    const products = useContext(ProductsContext)
    return products
}

const useProductDetails = (id) =>{
    const products = useContext(ProductsContext)
    const result = products.find(product => product.id === id)
    return result
}   

export default ProductsProvider;
export { useProducts , useProductDetails };