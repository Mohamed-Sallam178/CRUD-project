import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function ProductEdit(){
    let {Productid} = useParams();
    const [Product, setProduct] = useState("")
    const [title, setTitle] = useState([]);
    const [price, setPrice] = useState(0);
    let navigate = useNavigate()
    useEffect(()=>{
            fetch(`http://localhost:9000/products/${Productid}`)
            .then((res)=> res.json())
            .then((data)=>{
                setProduct(data);
                setTitle(data.title);
                setPrice(data.price);
            })
    },[])

    const formSubmit = (e)=>{
    e.preventDefault();
        const updateProduct = {...Product, title, price};

        fetch(`http://localhost:9000/products/${Productid}`,{
            method: "PUT",
            body: JSON.stringify(updateProduct),
        })
        .then((res)=> res.json())
        .then((data)=>{
            alert("Data has been updated");
            navigate("/Products")
        })
    }


    return(
        <>
        <h2> Product Edit </h2>

                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="titleProduct" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title-product" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>  
                <div className="mb-3">
                    <label htmlFor="priceProduct" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price-product" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
        </>
    )
}
export default ProductEdit;