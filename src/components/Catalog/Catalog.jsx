import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { SearchBar } from '../SearchBar/SearchBar';
import { postData, deleteData } from '../../services/getData';
import styles from './Catalog.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../Context/Context';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Info from '../Info/Info';

function Catalog({ title, data, emptyPage }) {
	const { favorites, bagItems, setBagItems, setFavorites, isLoading, searchBarIsVisible } =
		React.useContext(AppContext);
	let key = 0;

	const [visibleData, setVisibleData] = useState(data);

	useEffect(() => {
		setVisibleData(data);
	}, [data]);
	const addedCardHandler = async ({ name, cost, url, id, isAdded }, adress) => {
		if (bagItems.find((item) => item.name === name)) {
			await deleteData(bagItems.find((item) => item.name === name).id, adress);
			setBagItems((item) => item.filter((element) => element.name !== name));
		} else {
			const res = await postData({ name, cost, url, id, isAdded }, adress);
			setBagItems([...bagItems, res]);
		}
	};
	const favoriteCardHandler = async ({ name, cost, url, id, isFavorite }, adress) => {
		if (favorites.find((item) => item.name === name)) {
			await deleteData(favorites.find((item) => item.name === name).id, adress);
			setFavorites((item) => item.filter((element) => element.name !== name));
		} else {
			const res = await postData({ name, cost, url, id, isFavorite }, adress);
			setFavorites([...favorites, res]);
		}
	};
	const search = (value) => {
		if (!value.length) {
			setVisibleData(data);
		} else {
			setVisibleData(
				data.filter((item) => {
					return item.name.toLowerCase().includes(value.toLowerCase());
				}),
			);
		}
	};
	const contentLoader = () => {
		return [...Array(10)].map(() => {
			return (
				<ContentLoader
					key={(key += 1)}
					speed={2}
					width={250}
					height={340}
					viewBox="0 0 250 340"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="30" y="30" rx="10" ry="10" width="190" height="160" />
					<rect x="30" y="210" rx="10" ry="10" width="190" height="15" />
					<rect x="30" y="230" rx="10" ry="10" width="140" height="15" />
					<rect x="30" y="278" rx="10" ry="10" width="110" height="15" />
					<rect x="218" y="278" rx="10" ry="10" width="32" height="32" />
				</ContentLoader>
			);
		});
	};
	const cardsLoader = () => {
		return visibleData.map((item) => {
			return (
				<ErrorBoundry key={(key += 1)}>
					<Card
						addedCardHandler={(item, adress) => addedCardHandler(item, adress)}
						favoriteCardHandler={(item, adress) => {
							favoriteCardHandler(item, adress);
						}}
						favorite={favorites.some((favoritedItem) => favoritedItem.name === item.name)}
						added={bagItems.some((addedItem) => addedItem.name === item.name)}
						{...item}
					/>
				</ErrorBoundry>
			);
		});
	};
	const renderContent = () => {
		if (isLoading) {
			return <div className={styles.content}>{contentLoader()}</div>;
		} else if (!isLoading && !data.length) {
			return emptyPage;
		} else if (!visibleData.length) {
			return <Info typeInfo={'nothingHasFound'} action={() => search('')} />;
		}
		return <div className={styles.content}>{cardsLoader()}</div>;
	};
	return (
		<main className={styles.catalog}>
			<div className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<div className={searchBarIsVisible ? styles.searchContainerActive : styles.searchContainer}>
					<SearchBar search={(value) => search(value)} />
				</div>
			</div>
			{renderContent()}
		</main>
	);
}
export default Catalog;
