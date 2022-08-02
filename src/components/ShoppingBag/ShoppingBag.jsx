import React, { useState } from 'react';
import FullBag from './FullBag';
import { deleteData, postData } from '../../services/getData';
import { ReactComponent as Remove } from './img/remove.svg';
import AppContext from '../../Context/Context';
import Info from '../Info/Info';
import style from './fullBag.module.scss';

function ShoppingBag({ setBagisOpen }) {
	const { bagItems, orders, setBagItems, setOrders, total, tax, setBagIsOpen } =
		React.useContext(AppContext);
	const [isOrdered, setIsOrdered] = useState(false);
	const deleteItem = (id) => {
		const newArray = bagItems.filter((item) => item.id !== id);
		setBagItems(newArray);
		deleteData(id, 'bagItems');
	};
	const fullBag = (
		<FullBag
			bagItems={bagItems}
			deleteItem={(id) => deleteItem(id)}
			total={total}
			tax={tax}
			action={async () => {
				await bagItems.forEach((el) => {
					const order = {
						name: el.name,
						cost: el.cost,
						id: el.id,
						url: el.url,
					};
					setOrders([...orders, ...bagItems]);
					postData(order, 'orders');
					deleteData(el.id, 'bagItems');
				});
				setIsOrdered(true);
				setBagItems([]);
			}}
		/>
	);
	const renderContent = () => {
		if (bagItems.length) {
			return fullBag;
		} else if (isOrdered) {
			return <Info typeInfo={'ordered'} action={() => setBagIsOpen(false)} />;
		}
		return <Info typeInfo={'empty'} action={() => setBagIsOpen(false)} />;
	};
	return (
		<div className={style.bag}>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.header}>
						<span>Корзина</span>
						<button onClick={setBagisOpen}>
							<Remove />
						</button>
					</div>
					{renderContent()}
				</div>
			</div>
		</div>
	);
}
export default ShoppingBag;
