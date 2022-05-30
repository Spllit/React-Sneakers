import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import './_isOrdered.scss'
import Ordered from './img/Ordered.jpg'
function IsOrdered(){
    return(
        <div className='IsOrdered'>
            <div className='IsOrdered__container'>
                <div className='IsOrdered__img'>
                    <img src={Ordered} alt="Корзина пустая" />
                </div>
                <div className="IsOrdered__content">
                    <h2 className="IsOrdered__title">Заказ оформлен!</h2>
                    <p className="IsOrdered__subtitle">Ваш заказ #18 скоро будет передан курьерской доставке</p>
                </div>
                <ButtonSubmit
                content = {'Вернуться назад'}/>
            </div>
        </div>
    )
}
export default IsOrdered