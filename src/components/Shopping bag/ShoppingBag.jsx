import React, {useState, useEffect} from 'react';
import EmptyBag from './EmptyBag'
import FullBag from './FullBag';
import IsOrdered from './IsOrdered';
import {getData, deleteData} from '../services/getData'

function ShoppingBag({setBagisOpen}){
    const [bagItems, setBagItems] = useState([])
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    useEffect(() => {
        getData('bagItems')
        .then(res => {
            setBagItems(() => [...res])
        })

    }, [])
    const deleteItem = id => {
        const newArray = bagItems.filter(item => item.id !== id)
        setBagItems(newArray)
        deleteData('bagItems', id)
    }
    useEffect(() => {
        if(bagItems.length === 0){

            console.log('if')
            setTotal(0)
        }
        else{
            bagItems.reduce((prevValue, currentValue) => {
                setTotal(Number(prevValue.cost) + Number(currentValue.cost))
                return total
            })
        }
        setTax(tax/100*5)
    }, [bagItems,total, tax])

    // const calcTotal = () => {   
    //     if(bagItems.length === 0){
    //         console.log(bagItems)
    //         setTotal(0)
    //         return total
    //     }
    //     bagItems.reduce((prevValue, currentValue) => {
    //         setTotal(Number(prevValue.cost) + Number(currentValue.cost))
    //         console.log(Number(currentValue.cost))
    //         return total
    //     })
    // }
    // const calcTax = () => {
    //     setTax(tax/100*5)
    //     return tax
    // }
    return(
        <div className='bag'>
            <div className="bag__container">
                <div className="bag__wrapper">
                    <div className="bag__header">
                        <span>Корзина</span>
                        <button onClick = {setBagisOpen}>
                            <svg width="25" height="25" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"/>
                            </svg>
                        </button>
                    </div>
                    {bagItems.length === 0 && <EmptyBag/>}
                    {bagItems.length > 0 &&  <FullBag bagItems = {bagItems}
                    deleteItem = {(id) => deleteItem(id)}
                    total = {total}
                    tax = {tax}/> }
                    {/* <IsOrdered/> */}
                </div>
            </div>
        </div>
    )
}
export default ShoppingBag