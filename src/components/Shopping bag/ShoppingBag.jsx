import React, {useState, useEffect} from 'react';
import FullBag from './FullBag';
import {createOrder, deleteData, postData} from '../services/getData'
import {ReactComponent as Remove} from './img/remove.svg'
import AppContext from '../Context/Context';
import Info from '../Info/Info';
import {useNavigate} from 'react-router-dom'
import style from './fullBag.module.scss'

function ShoppingBag({setBagisOpen}){
    const {bagItems, orders, setBagItems, setOrders, total, tax} = React.useContext(AppContext)
    const [isOrdered, setIsOrdered] = useState(false)
    const navigator = useNavigate()
    const deleteItem = id => {
        const newArray = bagItems.filter(item => item.id !== id)
        setBagItems(newArray)
        deleteData('bagItems', id)
    }
    const renderContent = () => {
        if(bagItems.length !== 0) {
            return (<FullBag 
                bagItems = {bagItems}
                deleteItem = {(id) => deleteItem(id)}
                total = {total}
                tax = {tax}
                action = {async () => {
                    await bagItems.forEach(el => {
                        let order = {
                            name: el.name,
                            cost: el.cost,
                            id: el.id,
                            url: el.url
                        }
                        setOrders([...orders,  ...bagItems])
                        postData(order, 'orders')
                        deleteData('bagItems', el.id)
                    })
                    setIsOrdered(true)
                    setBagItems([])
                }}/>)
        }
        else if(isOrdered){
            return (
                <Info typeInfo = {'ordered'}
                action ={() => navigator(-1)}/>
            )
        }
        return(
            <Info typeInfo = {'empty'}
            action ={() => navigator(-1)}/>
        )
    }
    return(
        <div className={style.bag}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.header}>
                        <span>Корзина</span>
                        <button onClick = {setBagisOpen}>
                            <Remove/>
                        </button>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </div>
        
    )
}
export default ShoppingBag