import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileBtn, FavoritesBtn, BagBtn, Home } from '../Header/Header';
import { SearchIcon, SearchBar } from '../SearchBar/SearchBar';
import styles from './Menu.module.scss';

function Menu({ setBagisOpen }) {
	const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
	// const searchBarAnimation = {
	// 	hidden: {
	// 		position: 'absolute',
	// 		bottom: '-100%',
	// 	},
	// 	visible: {
	// 		position: 'absolute',
	// 		bottom: '200px',
	// 	},
	// };
	return (
		<div className={styles.menu}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Home />
					</li>
					<li className={styles.item}>
						<BagBtn setBagisOpen={setBagisOpen} />
					</li>
					<li className={styles.item}>
						<SearchIcon setSearchBarIsVisible={() => setSearchBarIsVisible(!searchBarIsVisible)} />
					</li>
					<li className={styles.item}>
						<FavoritesBtn />
					</li>
					<li className={styles.item}>
						<ProfileBtn />
					</li>
				</ul>
			</div>
			<AnimatePresence>
				{searchBarIsVisible && (
					<motion.div
						className={styles.searchContainer}
						intial={{
							position: 'absolute',
							y: '100%',
							visbility: 'hidden',
						}}
						animate={{
							position: 'fixed',
							bottom: '100px',
							visibility: ' visible',
						}}
						exit={{
							position: 'absolute',
							y: '100%',
							visbility: 'hidden',
						}}
						transition={{ duration: 0.2 }}>
						<SearchBar />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
export default Menu;
