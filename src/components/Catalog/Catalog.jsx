import React from 'react';
import Card from '../Card/Card'
import {SearchBar} from '../SearchBar/SearchBar';
import {postData, deleteData} from '../services/getData'
import style from './Catalog.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../Context/Context'

function Catalog({title, data, emptyPage}){
    const {favorites, bagItems,setBagItems, setFavorites, isLoading} = React.useContext(AppContext)
    let key = 0

    const addedCardHandler = async ({name, cost, url, id, isAdded}, adress) => {
        if(bagItems.find(item => item.name === name)){
            await deleteData(adress, (bagItems.find(item => item.name === name)).id)
            setBagItems(item => item.filter(element => element.name !== name))
        }
        else{
            const res = await postData({name, cost, url, id, isAdded}, adress)
            setBagItems([...bagItems, res])
            
        }
    }
    const favoriteCardHandler = async ({name, cost, url, id, isFavorite}, adress) => {
        if(favorites.find(item => item.name === name)){
            await deleteData(adress, (favorites.find(item => item.name === name)).id)
            setFavorites(item => item.filter(element => element.name !== name))
        }
        else{
            const res = await postData({name, cost, url, id, isFavorite}, adress)
            setFavorites([...favorites, res])
        }
    }
    const renderContent = () => {
        if(isLoading){

            return(
                <div className = {style.content}>
                    {
                        [...Array(10)].map((item, index) => {
                            return(
                                    <ContentLoader 
                                        key = {index}
                                        speed={2}
                                        width={250}
                                        height={340}
                                        viewBox="0 0 250 340"
                                        backgroundColor="#f3f3f3"
                                        foregroundColor="#ecebeb">
                                        <rect x="30" y="30" rx="10" ry="10" width="190" height="160" /> 
                                        <rect x="30" y="210" rx="10" ry="10" width="190" height="15" /> 
                                        <rect x="30" y="230" rx="10" ry="10" width="140" height="15" /> 
                                        <rect x="30" y="278" rx="10" ry="10" width="110" height="15" />
                                        <rect x="218" y="278" rx="10" ry="10" width="32" height="32" />
                                    </ContentLoader>
                            )
                        })
                    }
                </div>
            )
        }
        else if(!isLoading && data.length === 0){
            return emptyPage
        }
        return(
            <div className = {style.content}>
                {
                    data.map(item => {
                        return (
                            <Card
                            key ={key += 1}
                            addedCardHandler = {(item, adress) => addedCardHandler(item, adress)}
                            favoriteCardHandler = {(item, adress) => {
                                favoriteCardHandler(item, adress)
                            }}
                            favorite = {favorites.some(favoritedItem => favoritedItem.name === item.name)}
                            added = {bagItems.some(addedItem => addedItem.name === item.name)}
                            {...item}/>
                        )
                    })
                }
            </div>
            
        )
    }
    return(
        <main className={style.catalog}>
            <div className={style.header}>
                <h1 className={style.title}>{title}</h1>
                <div className={style.searchContainer}>
                    <SearchBar/>
                </div>
            </div>
                { renderContent() }
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