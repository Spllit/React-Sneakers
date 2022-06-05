import React, {useState, useEffect} from 'react'; 
import {getData} from '../services/getData'
function CatalogLogic(){
    const [data, setData] = useState([])
    const [bagItems, setBagItems] = useState([])
    const [visibleItems, setVisibleItems] = useState(data)
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        console.log('effect')
        const getAllItems = Promise.all([
            new Promise(resolve => resolve(getData('bagItems'))),
            new Promise(resolve => resolve(getData('favorites'))),
            new Promise(resolve => resolve(getData('items'))),
        ])
        getAllItems.then(res => {
            setBagItems(res[0])
            setFavorites(res[1])
            setData(res[2])
            setVisibleItems(res[2])
        })
    }, [])
}
export default CatalogLogic