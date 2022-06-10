import React from 'react';
import CardMinimized from '../CardMinimized/CardMinimized';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import'./_fullBag.scss'

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

function FullBag({bagItems, deleteItem}){
    return(
        <React.Fragment>
            <div className="bag__content">
                {renderCards(bagItems, deleteItem)}
            </div>
            <div className="bag__footer footer">
                <ul className='footer__total cheque'>
                    <li>
                        <span>Итого: </span>
                        <span className='cheque__space'></span>
                        <span className='cheque__coast'>21 498 <span>руб.</span></span>
                    </li>
                    <li>
                    <span>Налог 5%: </span>
                        <span className='cheque__space'></span>
                        <span className='cheque__coast'>1074<span>руб.</span></span>
                    </li>
                </ul>
                <ButtonSubmit
                content = {'Оформить заказ'}/>
            </div>
        </React.Fragment>
    )
}
export default FullBag