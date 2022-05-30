import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import './_emptyBag.scss'
import empty from './img/empty.jpg'
function EmptyBag(){
    return(
        <div className='emptyBag'>
            <div className='emptyBag__container'>
                <div className='emptyBag__img'>
                    <img src={empty} alt="Корзина пустая" />
                </div>
                <div className="emptyBag__content">
                    <h2 className="emptyBag__title">Корзина пустая</h2>
                    <p className="emptyBag__subtitle">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                </div>
                <ButtonSubmit
                content = {'Вернуться назад'}/>
            </div>
        </div>
    )
}
export default EmptyBag