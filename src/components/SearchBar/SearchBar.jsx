import React, { useEffect, useState } from 'react';
import './_searchBar.scss';

import AppContext from '../Context/Context';
function SearchIcon({setSearchBarIsVisible}){
    // const {searchBarIsVisible, setSearchBarIsVisible} = React.useContext(AppContext)
    return(
        <button onClick = {setSearchBarIsVisible}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>
    )
}
function SearchBar(){
    const {search} = React.useContext(AppContext)
    
    const [value, setValue] = useState('')
    useEffect(() => {
        search(value)
    }, [value]) 
    return(
        <form className='search-bar'>
            <div className="search-bar__container">
                <div className="search-bar__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                    <input type="search" value = {value} placeholder='Поиск...' className='search-bar__input' onChange={e => setValue(e.target.value)}/>
            </div>
        </form>  
                 
    )
}
export{
    SearchBar,
    SearchIcon,
}