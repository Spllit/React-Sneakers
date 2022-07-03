import React from 'react';
import CardMinimized from '../CardMinimized/CardMinimized';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import style from './fullBag.module.scss'

function renderCards(items, deleteItem){
    let cards = items.map((item, index) => {
        return (
            <CardMinimized
            key = {index}
            name = {item.name}
            cost = {item.cost}
            url = {item.url}
            deleteItem = {() => deleteItem(item.id)}/>
        )
    })
    return cards
}
function FullBag({bagItems, deleteItem, total, tax, action}){
    return(
        <>
            <div className={style.content}>
                {renderCards(bagItems, deleteItem)}
            </div>
            <div className={style.footer}>
                <ul className={style.cheque}>
                    <li>
                        <span>Итого: </span>
                        <span className= {style.space}></span>
                        <span className={style.coast}>{total}<span>руб.</span></span>
                    </li>
                    <li>
                    <span>Налог 5%: </span>
                        <span className={style.space}></span>
                        <span className={style.coast}>{tax}<span>руб.</span></span>
                    </li>
                </ul>
                <ButtonSubmit
                content = {'Оформить заказ'}
                action = {() => action()}/>
            </div>
        </>
    )
}
export default FullBag