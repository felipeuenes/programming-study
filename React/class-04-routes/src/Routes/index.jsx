import { Home } from '../pages/Home/index.jsx'
import { Galery } from '../pages/Galery/index'
import { Contact } from '../pages/Contacts/index'
import { Routes, Route} from 'react-router-dom'



export function AppRoutes() {


    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/gallery' element={<Galery/>} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        
        
        </>
    )
}