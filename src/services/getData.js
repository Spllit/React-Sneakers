import axios from 'axios';
const urlStorage = {
	items: 'https://627fc595be1ccb0a4664a105.mockapi.io/items',
	bagItems: 'https://627fc595be1ccb0a4664a105.mockapi.io/items/1/bagItems',
	favorites: 'https://627fc595be1ccb0a4664a105.mockapi.io/items/1/favorites',
	orders: 'https://627fc595be1ccb0a4664a105.mockapi.io/orders',
};
function getData(adress) {
	return axios.get(urlStorage[adress]);
}
async function postData(card, adress) {
	const { data } = await axios.post(urlStorage[adress], card);
	return data;
}

async function deleteData(id, adress) {
	const { data } = await axios.delete(`${urlStorage[adress]}/${id}`);
	return data;
}

export { getData, postData, deleteData };
