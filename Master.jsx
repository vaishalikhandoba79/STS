import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Laptops from "./Laptops";

import Watches from "./Watches";
import Error from "./error";
import Mobiles from "./Mobiles";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                        <Route index element={<Laptops></Laptops>}></Route>
                        <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>    
                        <Route path="dashboard/watches" element={<Watches></Watches>}></Route>
                    </Route>

                    <Route path="/error" element={<Error></Error>}></Route>
                
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;