import axios from 'axios'
const urlStorage = {
    'items': 'https://627fc595be1ccb0a4664a105.mockapi.io/items',
    'bagItems': 'https://627fc595be1ccb0a4664a105.mockapi.io/items/1/bagItems',
    'favorites': 'https://627fc595be1ccb0a4664a105.mockapi.io/items/1/favorites',
    'orders': 'https://627fc595be1ccb0a4664a105.mockapi.io/orders'
}
async function getData(adress){
    const {data} = await axios.get(urlStorage[adress])
    return data
}
async function postData(card, adress){
    const {data} = await axios.post(urlStorage[adress], card)
    return(data)
}

async function deleteData(adress, id){
    const {data} = await axios.delete(`${urlStorage[adress]}/${id}`)
    return (data)
}
async function updateData(adress, id){
    await fetch(`${urlStorage[adress]}${id}`, {
        method: 'PUT',
    })
}
async function createOrder(data, adress){
    await data.forEach(el => {
        postData({
            name: el.name,
            cost: el.cost, 
            url: el.url,
            id: el.id,
            isAdded: el.isAdded
        }, adress)
    })
}
export {
    getData,
    postData,
    deleteData,
    updateData,
    createOrder,
}
