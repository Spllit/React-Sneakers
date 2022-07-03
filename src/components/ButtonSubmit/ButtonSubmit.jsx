import React from 'react';
import style from './buttonSubmit.module.scss'
import { ShoppingBagContext } from '../Context/Context';
function ButtonSubmit({content, reversed = false, action}){
    return(
        <button className={reversed ? style.reversed : style.submitButton}
        onClick = {() => action()}>
            <span>
               {content}
            </span>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}
export default ButtonSubmit