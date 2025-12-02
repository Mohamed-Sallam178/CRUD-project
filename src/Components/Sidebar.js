import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
        <div>
            <ul>
                <li>
                    <Link to="/Products">GetAllProducts</Link>
                </li>
                <li>
                    <Link to="/">GetAllCategories</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;