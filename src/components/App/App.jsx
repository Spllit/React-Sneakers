import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { getData, postData } from '../../services/getData';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import { Home, Favorites, Orders } from '../Pages/Pages';
import AppContext from '../../Context/Context';
import style from './App.module.scss';

function App() {
	const [bagisOpen, setBagIsOpen] = useState(false);
	const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
	const [items, setItems] = useState([]);
	const [bagItems, setBagItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [tax, setTax] = useState(0);
	useEffect(() => {
		const getAllItems = Promise.all([
			getData('bagItems'),
			getData('favorites'),
			getData('items'),
			getData('orders'),
		]);
		getAllItems.then((res) => {
			setBagItems(res[0].data);
			setFavorites(res[1].data);
			setItems(res[2].data);
			setOrders(res[3].data);
			setIsLoading(false);
		});
		getAllItems.catch(() => {
			console.log('smth went wrong');
		});
	}, []);
	useEffect(() => {
		let sum = 0;
		if (bagItems.length && !isLoading)
			for (let i = 0; i < bagItems.length; i++) {
				sum += Number(bagItems[i].cost);
			}
		setTotal(sum);
		setTax(Number(((sum / 100) * 5).toFixed()));
	}, [bagItems, isLoading]);
	const openBag = () => {
		const body = document.querySelector('body');
		if (bagisOpen) {
			body.style.overflow = 'auto';
			setBagIsOpen(false);
		} else {
			body.style.overflow = 'hidden';
			setBagIsOpen(true);
			setSearchBarIsVisible(false);
		}
	};
	return (
		<AppContext.Provider
			value={{
				items,
				bagItems,
				favorites,
				orders,
				isLoading,
				setBagItems,
				setFavorites,
				setOrders,
				total,
				tax,
				postData,
				setSearchBarIsVisible,
				searchBarIsVisible,
				setBagIsOpen,
			}}>
			<div className={style.wrapper}>
				<div className={style.container}>
					<Routes>
						<Route path="*" element={<Header setBagIsOpen={openBag} />} />
					</Routes>
				</div>
				{bagisOpen && <ShoppingBag setBagisOpen={openBag} />}

				<div className={style.container}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/profile" element={<Orders />} />
					</Routes>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
