import { useEffect, useState } from "react";    
import { useParams } from "react-router";

function ProductDetails(){
    let {ProductID} = useParams()
    const [Product, setProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${ProductID}`)
        .then((res)=> res.json())
        .then((data)=> {setProduct(data)})
    },[])
    return(
        <>
        <h2> ProductDetails #{ProductID}</h2>
                <>
                <div className="Product-details">
                    <img src={Product.image} alt=""></img>
                    <h2>{Product.title}</h2>
                    <h4>{Product.price}$</h4>
                    <p>{Product.description}</p>
                </div>
                </>
        </>
    )
}


export default ProductDetails;