import React from 'react'
import Catalog from '../Catalog/Catalog'
import AppContext from '../Context/Context'
import Info from '../Info/Info'
import {useNavigate} from 'react-router-dom'
function Favorites(){
    const {favorites} = React.useContext(AppContext)
    const navigator = useNavigate()
    const emptyPage = 
        <Info 
        typeInfo = {'noBookmarks'}
        action = {() => navigator(-1)}
        />
    return(
        <Catalog
        title = {'Мои закладки'}
        emptyPage = {emptyPage}
        data = {favorites}/>
    )
}
export default Favorites