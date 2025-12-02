import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2'


function Products(){

    const [Products, setProducts] = useState([])

    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts = ()=>{
        fetch("http://localhost:9000/products")
        .then((res)=> res.json())
        .then((data)=>{
            setProducts(data);
            
        })
    }
    
    const deletProduct = (product)=>{
        Swal.fire({
        title: "Are you sure?",
        text: `You want to delet "${product.title}" `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if(result.isConfirmed){
            fetch(`http://localhost:9000/products/${product.id}`, {
                method : "DELETE"
            })
            .then((res)=> res.json())
            .then((data)=> getAllProducts())

            Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success"
            });
            
        }
        });
        }


    return(
        <>
        <h2>Products Page</h2>
        <Link to={'/Products/add'} className="btn btn-success mt-4"> Add New Product </Link>
        <table className="table table-success table-striped mt-5">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {Products.map((product)=>{
                    return(
                        <>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>    
                            <button className="btn btn-danger" onClick={()=> deletProduct(product)}>Delet</button>
                            <Link to={`/Products/${product.id}`} className="btn btn-info">View</Link>
                            <Link to={`/Products/edit/${product.id}`} className="btn btn-primary">Edit</Link>
                        </td>
                    </tr>
                        </>
                    )
                })}
            </tbody>

        </table>
        <Outlet/>
        </>
    )
}
export default Products ;