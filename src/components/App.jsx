import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './Header/Header'
import Catalog from './Catalog/Catalog'
import ShoppingBag from './Shopping bag/ShoppingBag'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
function App() {
    const [bagisOpen, setBagIsOpen] = useState(false)
    return(
        <div className='wrapper'>
            <div className='container'>
                <Header
                setBagisOpen = {() => setBagIsOpen(true)}/>   
            </div>
            {bagisOpen && <ShoppingBag 
            setBagisOpen = {() => setBagIsOpen(false)}/> 
            }
            <div className="section-devider">
            </div>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}>
                    </Route> 
                    <Route path='/favorites' element={<Favorites/>}>
                    </Route> 
                </Routes>
            </div>
        </div>

    )
}

export default App;
