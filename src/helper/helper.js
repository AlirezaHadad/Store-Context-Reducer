
const shortenText = (text) => {
    return text.split(" ").slice(0 , 3).join("");
}

const saerchProducts = (products,saerch) =>{
    if(!saerch) return products;
    const saerchProducts = products.filter(p => p.title.toLowerCase().includes(saerch));
    return saerchProducts;
}

const filterProducts = (products,category) =>{
    if(!category) return products;
    const filterProducts = products.filter(p => p.category === category)
    return filterProducts
}

const createQueryObject = (currentQuery,newQuery)=>{
    if(newQuery.category === "all"){
        const { category ,...rest } = currentQuery ;
        return rest ;
    }
    if(newQuery.saerch === ""){
        const { saerch ,...rest } = currentQuery ;
        return rest;
    }
    return {...currentQuery,...newQuery}
}

const getInitialQuery = saerchParams =>{
    const query = {}
    const category = saerchParams.get("category")
    const saerch = saerchParams.get("saerch")
    if(category) query.category = category;
    if(saerch) query.saerch = saerch;
    return query
}

const sumProducts = products =>{
    const itemsCounter = products.reduce((acc,cur)=> acc + cur.quantity ,0)
    const total = products.reduce((acc,cur)=> acc + cur.price * cur.quantity ,0).toFixed()
    return{ itemsCounter,total }
}

const productQuantity = (state,id)=>{
    const index = state.selectedItems.findIndex((item)=> item.id === id);
    if(index === -1){
        return 0 ;
    }else{
        return state.selectedItems[index].quantity
    }
}

export { shortenText , saerchProducts , filterProducts ,createQueryObject ,getInitialQuery ,sumProducts, productQuantity }