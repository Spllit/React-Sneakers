import React, {useState, useEffect} from 'react';
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar';
import {getData, postData, updateData, deleteData} from '../services/getData'
import styles from './Catalog.module.scss'

function Catalog({title, urlAdress}){
    const [data, setData] = useState([])
    const [bagItems, setBagItems] = useState([])
    const [visibleItems, setVisibleItems] = useState(data)
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        getData(urlAdress)
        .then(res => {
            setData(res)
            setVisibleItems(res)
        })
        }, [])
    useEffect(() => {
        getData('bagItems')
        .then(res => setBagItems(res))
    }, [])
    useEffect(() => {
        getData('favorites')
        .then(res => setFavorites(res))
    }, [])
    const search = (value) => {
        if(value.length === 0){
            setVisibleItems(data)
        }
        else{
            setVisibleItems(data.filter(item => {
                return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            })) 
        }
    }
    const addCardToBag = ({name, cost, url, id, isAdded}, adress) => {
        if(bagItems.find(item => item.id === id)){
            console.log('if')
            deleteData(adress, id)
            console.log((bagItems))
            setBagItems(item => item.filter(element => element.id !== id))
        }
        else{
            console.log('else')
            console.log(id)
            setBagItems([{name, cost, url, id, isAdded}])
            postData({name, cost, url, id, isAdded}, adress)
        }
    }
    const addFavoriteCard = ({name, cost, url, id, isFavorite}, adress) => {
        if(favorites.find(item => item.id === id)){
            deleteData(adress, id)
            setFavorites(item => item.filter(element => element.id !== id))
        }
        else{
            const res = postData({name, cost, url, id, isFavorite}, adress)
            setBagItems([res])
        }
    }
    const renderCards = visibleItems.map(item => {
        return (<Card
            key ={item.id}
            addCardToBag = {(item, adress) => addCardToBag(item, adress)}
            addCardToFavorite = {(item, adress) => addFavoriteCard(item, adress)}
            {...item}/>
        )
    })
    return(
        <main className={styles.catalog}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <SearchBar
                search = {(value) => search(value)}/>
            </div>
            <div className={styles.content}>
                {renderCards}
            </div>
        </main>
    )
}
export default Catalog

// [
//     {
//         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "cost":  "12 999",
//         "url":"./img/Nike Blazer Mid Suede.jpg",
//         "id": "1",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Nike Air Max 270",
//         "cost": "12 999",
//         "url": "./img/Nike Air Max 270.jpg",
//         "id": "2",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "cost": "8 499",
//         "url": "./img/Nike Blazer Mid Suede White.jpg",
//         "id": "3",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Кроссовки Puma X Aka Boku Future Rider",
//         "cost": "8 999",
//         "url": "./img/Puma X Aka Boku Future Rider.jpg",
//         "id": "4",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Under Armour Curry 8",
//         "cost": "15 199",
//         "url": "./img/Under Armour Curry 8.jpg",
//         "id": "5",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Nike Kyrie 7",
//         "cost": "11 299",
//         "url": "./img/Nike Kyrie 7.jpg",
//         "id": "6",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Jordan Air Jordan 11",
//         "cost": "10 799",
//         "url": "./img/Jordan Air Jordan 11.jpg",
//         "id": "7",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name":" Мужские Кроссовки Nike LeBron XVIII",
//         "cost": "16 499",
//         "url": "./img/Nike LeBron XVIII.jpg",
//         "id": "8",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Nike Lebron XVIII Low",
//         "cost": "13 999",
//         "url": "./img/Nike Lebron XVIII Low.jpg",
//         "id": "9",
//         "isAdded": "false",
//         "isFavorite": "false"
//     },
//     {
//         "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//         "cost": "11 299",
//         "url": "./img/Nike Kyrie Flytrap IV.jpg",
//         "id": "10",
//         "isAdded": "false",
//         "isFavorite": "false"
//     }
//     ]