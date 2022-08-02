import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import { ReactComponent as Add } from './img/add.svg';
import { ReactComponent as Added } from './img/added.svg';
import { ReactComponent as Like } from './img/like.svg';
function Card({ name, cost, url, id, added, favorite, addedCardHandler, favoriteCardHandler }) {
	const [isAdded, setIsAdded] = useState(added);
	const [isFavorite, setIsFavorite] = useState(favorite);
	useEffect(() => {
		setIsAdded(added);
		setIsFavorite(favorite);
	}, [added, favorite]);
	const onAddClick = () => {
		setIsAdded((isAdded) => !isAdded);
		addedCardHandler({ name, cost, url, id, isAdded }, 'bagItems');
	};
	const onFavoriteClick = () => {
		setIsFavorite((isFavorite) => !isFavorite);
		favoriteCardHandler({ name, cost, url, id, isFavorite }, 'favorites');
	};
	const plusIcon = (
		<button className={styles.add} onClick={onAddClick}>
			<Add />
		</button>
	);

	const addedIcon = (
		<button className={styles.added} onClick={onAddClick}>
			<Added />
		</button>
	);
	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<div className={styles.img}>
					<img src={url} alt="Sneakers" />
				</div>
				<h2 className={styles.name}>{name}</h2>
				<div className={styles.cost}>
					<div className={styles.costLeft}>
						<span className={styles.costInfo}>Цена</span>
						<div>
							<span className={styles.costDig}>{cost}</span>{' '}
							<span className={styles.costCurrency}>руб.</span>
						</div>
					</div>
					{isAdded ? addedIcon : plusIcon}
				</div>
				<button className={isFavorite ? styles.liked : styles.like} onClick={onFavoriteClick}>
					<Like />
				</button>
			</div>
		</div>
	);
}
export default Card;
