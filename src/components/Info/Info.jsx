import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import ordered from './img/ordered.jpg'
import empty from './img/empty.jpg'
import noBookmarks from './img/noBookmarks.jpg'
import noOrders from './img/noOrders.jpg'
import style from './Info.module.scss'
function Info({typeInfo, action}){
    const contentMap = {
        ordered: {
            img: ordered,
            title: 'Заказ оформлен!',
            subtitle: 'Ваш заказ #18 скоро будет передан курьерской доставке'
        },
        empty: {
            img: empty,
            title: 'Корзина пустая',
            subtitle: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
        },
        noBookmarks: {
            img: noBookmarks,
            title: 'Закладок нет :(',
            subtitle: 'Вы ничего не добавили в закладки'
        },
        noOrders: {
            img: noOrders,
            title: ' У вас нет заказов',
            subtitle: 'Вы нищеброд? Оформите хотя бы один заказ.'
        }
    }
    return(
        <div className={style.info}>
            <div className={style.container}>
                <div className={style.avatar}>
                    <img src={contentMap[typeInfo].img} alt="Корзина пустая" />
                </div>
                <div className={style.content}>
                    <h2 className={style.title}>{contentMap[typeInfo].title}</h2>
                    <p className={style.subtitle}>{contentMap[typeInfo].subtitle}</p>
                </div>
                <ButtonSubmit
                content = {'Вернуться назад'}
                reversed
                action = {() => action}/>
            </div>
        </div>
    )
}
export default Info