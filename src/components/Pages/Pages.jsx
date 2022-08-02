import React from 'react';
import Catalog from '../Catalog/Catalog';
import AppContext from '../../Context/Context';
import Info from '../Info/Info';
import { useNavigate } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

function Home() {
	const { items } = React.useContext(AppContext);
	return (
		<ErrorBoundry>
			<Catalog title={'Все кроссовки'} data={items} />
		</ErrorBoundry>
	);
}
function Favorites() {
	const { favorites } = React.useContext(AppContext);
	const navigator = useNavigate();
	return (
		<ErrorBoundry>
			<Catalog
				title={'Мои закладки'}
				emptyPage={<EmptyPage typeInfo={'noBookmarks'} action={() => navigator(-1)} />}
				data={favorites}
			/>
		</ErrorBoundry>
	);
}
function Orders() {
	const { orders } = React.useContext(AppContext);
	const navigator = useNavigate();
	return (
		<ErrorBoundry>
			<Catalog
				title={'Мои заказы'}
				emptyPage={<EmptyPage typeInfo={'noOrders'} action={() => navigator(-1)} />}
				data={orders}
			/>
		</ErrorBoundry>
	);
}
function EmptyPage({ typeInfo, action }) {
	return <Info typeInfo={typeInfo} action={action} />;
}
export { Home, Favorites, Orders };
