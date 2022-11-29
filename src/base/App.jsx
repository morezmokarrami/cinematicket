import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import EachPage from "../pages/Movies/eachPage";
import {Register} from "../pages/Register/Register";
import {GetCustomers} from "../pages/Register/GetCustomers";


const App = () => {

    return (
        <Routes>
            <Route element={<Home/>} path={'/cinematicket'}></Route>
            <Route element={<Register/>} path={'/cinematicket/register'}></Route>
            <Route element={<GetCustomers/>} path={'/cinematicket/setCustomer'}></Route>
            <Route element={<EachPage/>} path={'cinematicket/:product_id'}></Route>
        </Routes>
    )
}

export default App;