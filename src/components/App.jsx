import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import {Header} from './Header/Header'
import {getData, postData} from './services/getData'
import ShoppingBag from './Shopping bag/ShoppingBag'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Orders from './Pages/Orders';
import AppContext from './Context/Context';
import Menu from './Menu/Menu';
import useWindowWidth from './customHooks/useWindowWidth'
import style from './App.module.scss'

function App() {
    const [bagisOpen, setBagIsOpen] = useState(false)
    const [searchBarIsVisible, setSearchBarIsVisible] = useState(false)
    const [items, setItems] = useState([])
    const [visibleItems, setVisibleItems] = useState(items)
    const [bagItems, setBagItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    useEffect(() => {
        const getAllItems = Promise.all([
            new Promise(resolve => resolve(getData('bagItems'))),
            new Promise(resolve => resolve(getData('favorites'))),
            new Promise(resolve => resolve(getData('items'))), 
            new Promise(resolve => resolve(getData('orders')))
        ])
        getAllItems.then(res => {
            setBagItems(res[0])
            setFavorites(res[1])
            setItems(res[2])
            setVisibleItems(res[2])
            setOrders(res[3])
            setIsLoading(false)
        })
    }, [])
    useEffect(() => {
        console.log(bagisOpen)
    }, [bagisOpen])
    useEffect(() => {
        let sum = 0
        if(bagItems.length !== 0 && !isLoading)
        for(let i = 0; i < bagItems.length; i++){
            sum += Number(bagItems[i].cost)
        }
        setTotal(sum)
        setTax(Number((sum/100*5).toFixed()))
    }, [bagItems, isLoading])
    
    const search = (value) => {
        if(value.length === 0){
            setVisibleItems(items)
        }
        else{
            setVisibleItems(items.filter(item => {
                return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            })) 
        }
    }
    return(
        <AppContext.Provider value ={{visibleItems, bagItems, favorites, orders, isLoading, setBagItems, setFavorites, setOrders, total, tax, postData, setSearchBarIsVisible, searchBarIsVisible, search}}>
            <div className={style.wrapper}>
            {useWindowWidth() <= 625 
                    ?   <div className={style.container}>
                            <Menu
                            setBagisOpen = {() => setBagIsOpen(!bagisOpen)}/>
                        </div>
                        
                    :   <>
                            <div className={style.container}>
                                <Routes>
                                    <Route path='*' element ={
                                        <Header
                                        setBagisOpen = {() => setBagIsOpen(!bagisOpen)}/> 
                                    }/>
                                </Routes>
                            </div>
                            <div className={style.sectionDevider}></div>
                        </>
                    }
                {bagisOpen && <ShoppingBag 
                setBagisOpen = {() => setBagIsOpen(false)}/> 
                }
                
                <div className={style.container}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/favorites' element={<Favorites/>}/>
                        <Route path='/profile' element={<Orders/>}/>
                    </Routes>
                </div>
                
            </div>
        </AppContext.Provider>

    )
}

export default App;
