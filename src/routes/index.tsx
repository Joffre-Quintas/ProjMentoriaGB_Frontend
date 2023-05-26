import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import LegalAgeList from '../pages/LegalAgeList/LegalAgeList';
import NotLegalAgeList from '../pages/NotLegalAgeList/NotLegalAgeList';
import OrderASC from '../pages/OrderASC/OrderASC';
import OrderDESC from '../pages/OrderDESC/OrderDESC';
import RegisterSucessfull from '../pages/RegisterSucessfull/RegisterSucessfull';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-person' element={<Register/>}/>
            <Route path='/list-of-legalage' element={<LegalAgeList/>}/>
            <Route path='/list-of-not-legalage' element={<NotLegalAgeList/>}/>
            <Route path='/list-of-asc-alfabetic' element={<OrderASC/>}/>
            <Route path='/list-of-desc-alfabetic' element={<OrderDESC/>}/>
            <Route path='/registerSucessfull' element={<RegisterSucessfull/>}/>
        </Routes>
    )
}