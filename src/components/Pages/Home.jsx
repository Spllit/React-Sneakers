import React from 'react'
import Catalog from '../Catalog/Catalog'
import AppContext from '../Context/Context'
function Home(){
    const {visibleItems} = React.useContext(AppContext)
    return(
        <Catalog
        title={'Все кроссовки'}
        data = {visibleItems}/>
    )
}
export default Home