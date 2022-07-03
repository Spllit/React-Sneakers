import React, { useState, useEffect } from 'react';
import style from './Card.module.scss'
import {ReactComponent as Add} from './img/add.svg'
import {ReactComponent as Added} from './img/added.svg'
import {ReactComponent as Like} from './img/like.svg'
function Card({name, cost, url, id, added, favorite, addedCardHandler, favoriteCardHandler}){
    const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorite)
    useEffect(() => {
        setIsAdded(added)
        setIsFavorite(favorite)
    }, [added, favorite])
    const onAddClick = () => {
        setIsAdded(isAdded => !isAdded)
        addedCardHandler({name, cost, url, id, isAdded}, 'bagItems')
    }
    const onFavoriteClick =() => {
        setIsFavorite(isFavorite => !isFavorite)
        favoriteCardHandler({name, cost, url, id, isFavorite}, 'favorites')
    }
    const plusIcon =  <button className={style.add}
    onClick = {onAddClick}>
        <Add/>
    </button>
    
    const addedIcon = <button className={style.added}
    onClick = {onAddClick}>
        <Added/>
    </button>
    return(
        <div className={style.card}>
            <div className={style.container}>
                <div className={style.img}>
                    <img src={url} alt="Sneakers" />
                </div>
                <h2 className={style.name}>{name}</h2> 
                <div className={style.cost}>
                    <div className={style.costLeft}>
                        <span className={style.costInfo}>Цена</span>
                        <div>
                        <span className={style.costDig}>{cost}</span> <span className={style.costCurrency}>руб.</span>
                        </div>
                    </div>
                       {isAdded ? addedIcon : plusIcon}
                </div>
                <button className={isFavorite ? style.liked : style.like}
                    onClick = {onFavoriteClick}>
                    <Like/>
                </button>
            </div>
        </div>
    )
}
export default Card