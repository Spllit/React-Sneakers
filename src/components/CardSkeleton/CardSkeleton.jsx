import React from 'react';
import style from './CardSkeleton.module.scss'
function CardSkeleton(){
    const card =
    <div className={style.cardSkeleton}>
        <div className={style.container}>
            <div className={style.img}></div>
            <div className={style.name}>
                <div className={style.name1}></div>
                <div className={style.name2}></div>
            </div>
            <div className={style.cost}></div>
            <div className={style.plus}></div>
        </div>
    </div>
    return(
        [card,card,card,card,card,card,card,card,card,card,card,card,card,card,card,]
    )
}
export default CardSkeleton