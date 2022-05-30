import React from 'react'
import Catalog from '../Catalog/Catalog'
// import {Route} from 'react-router-dom'
function Home(){
    return(
        <Catalog
        title={'Все кроссовки'}
        urlAdress={'items'}/>
    )
}
export default Home