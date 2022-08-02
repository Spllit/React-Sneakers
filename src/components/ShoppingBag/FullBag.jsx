import React from 'react';
import CardMinimized from '../CardMinimized/CardMinimized';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import styles from './fullBag.module.scss';

function renderCards(items, deleteItem) {
	let cards = items.map((item, index) => {
		return (
			<CardMinimized
				key={index}
				name={item.name}
				cost={item.cost}
				url={item.url}
				deleteItem={() => deleteItem(item.id)}
			/>
		);
	});
	return cards;
}
function FullBag({ bagItems, deleteItem, total, tax, action }) {
	return (
		<>
			<div className={styles.content}>{renderCards(bagItems, deleteItem)}</div>
			<div className={styles.footer}>
				<ul className={styles.cheque}>
					<li>
						<span>Итого: </span>
						<span className={styles.space}></span>
						<span className={styles.coast}>
							{total}
							<span>руб.</span>
						</span>
					</li>
					<li>
						<span>Налог 5%: </span>
						<span className={styles.space}></span>
						<span className={styles.coast}>
							{tax}
							<span>руб.</span>
						</span>
					</li>
				</ul>
				<ButtonSubmit content={'Оформить заказ'} action={action} />
			</div>
		</>
	);
}
export default FullBag;
