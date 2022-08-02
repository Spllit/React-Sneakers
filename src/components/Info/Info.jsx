import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import ordered from './img/ordered.jpg';
import empty from './img/empty.jpg';
import noBookmarks from './img/noBookmarks.jpg';
import noOrders from './img/noOrders.jpg';
import styles from './Info.module.scss';
function Info({ typeInfo, action }) {
	const contentMap = {
		ordered: {
			img: ordered,
			title: 'Заказ оформлен!',
			subtitle: 'Ваш заказ #18 скоро будет передан курьерской доставке',
		},
		empty: {
			img: empty,
			title: 'Корзина пустая',
			subtitle: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.',
		},
		noBookmarks: {
			img: noBookmarks,
			title: 'Закладок нет :(',
			subtitle: 'Вы ничего не добавили в закладки',
		},
		noOrders: {
			img: noOrders,
			title: ' У вас нет заказов',
			subtitle: 'Вы нищеброд? Оформите хотя бы один заказ.',
		},
		nothingHasFound: {
			img: noOrders,
			subtitle: 'К сожалению по вашему запросу ничего не найдено',
		},
	};
	return (
		<div className={styles.info}>
			<div className={styles.container}>
				<div className={styles.avatar}>
					<img src={contentMap[typeInfo].img} alt="Корзина пустая" />
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>{contentMap[typeInfo].title}</h2>
					<p className={styles.subtitle}>{contentMap[typeInfo].subtitle}</p>
				</div>
				<ButtonSubmit content={'Вернуться назад'} reversed action={action} />
			</div>
		</div>
	);
}
export default Info;
