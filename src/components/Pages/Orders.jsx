import React from 'react'
import Catalog from '../Catalog/Catalog'
import AppContext from '../Context/Context'
import Info from '../Info/Info'
import {useNavigate} from 'react-router-dom'
function Orders() {
    const {orders} = React.useContext(AppContext)
    const navigator = useNavigate()
    const noOrders = <Info
    typeInfo = {'noOrders'}
    action = {() => navigator(-1)}/>
    
    return(
        <Catalog
        title = {'Мои заказы'}
        emptyPage = {noOrders}
        data = {orders}/>
    )
}
export default Orders