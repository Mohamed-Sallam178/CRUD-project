import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function AddProducts(){
    
        const [title, setTitle] = useState([]);
        const [price, setPrice] = useState(0);

        let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();

        fetch("http://localhost:9000/products", {
            method : "POST",
            body : JSON.stringify({
                title,
                price
            })
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            Swal.fire({
            title: `The ${title} is Added successfully`,
            icon: "success",
            draggable: true
            });
            navigate("/Products")
        } )
    }



    
    return(
        <>
            <h2> Add New Product </h2>
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="titleProduct" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title-product" placeholder="Product Title" onChange={(e)=> setTitle(e.target.value)}/>
                </div>  
                <div className="mb-3">
                    <label htmlFor="priceProduct" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price-product" placeholder="Product Price " onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary"  >Add Product</button>
                </form>
        </>
    )
}

export default AddProducts; 