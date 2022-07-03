import React from 'react';
import styles from './CardMinimized.module.scss'
import {ReactComponent as Remove} from './img/remove.svg'

function CardMinimized(props){
    const {name, cost, url} = props
    return(
        <div className={styles.cardMinimized}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={url} alt="Sneakers" />
                </div>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.cost}>
                    <span className={styles.costDig}>{cost}</span> <span className={styles.costCurrency}>руб.</span>
                </div>
                <button className={styles.remove}
                onClick = {() => props.deleteItem()}>
                    <Remove/>
                </button>
            </div>
            
        </div>
    )
}

export default CardMinimized