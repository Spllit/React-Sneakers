import React from 'react'
import Catalog from '../Catalog/Catalog'
// import {Route} from 'react-router-dom'
function Favorites(){
    return(
        <Catalog
        title={'Мои закладки'}
        urlAdress={'favorites'}/>
    )
}
export default Favorites