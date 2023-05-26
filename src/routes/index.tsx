import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import LegalAgeList from '../pages/LegalAgeList/LegalAgeList';
import NotLegalAgeList from '../pages/NotLegalAgeList/NotLegalAgeList';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-person' element={<Register/>}/>
            <Route path='/list-of-legalage' element={<LegalAgeList/>}/>
            <Route path='/list-of-not-legalage' element={<NotLegalAgeList/>}/>
        </Routes>
    )
}