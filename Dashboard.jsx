// import { Link, Outlet } from "react-router-dom";
// const Dashboard = ()=>{
//     return(
//         <>
//             <Link to="/dashboard" style={{marginRight:200}}> Laptops </Link>
//             <Link to="dashboard/mobiles" style={{marginRight:200}}> Mobiles </Link>
//             <Link to="dashboard/watches" style={{marginRight:200}}> Watches </Link>

//             <br></br><br></br>

//             <Outlet></Outlet>
//         </>
//     )    
// }
// export default Dashboard;
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <Link to="">Laptops</Link>
                <Link to="mobiles">Mobiles</Link>
                <Link to="watches">Watches</Link>
            </nav>
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;