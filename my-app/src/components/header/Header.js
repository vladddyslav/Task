import { useState } from 'react';
import './Header.scss'

const Header = ({ searchValue, setSearchValue }) => {
   // const [searchValue,setSearchValue] = useState(null);

   const onSetSearchValue = (event) => {
      const newValue = event.target.value;
      setSearchValue(newValue);
   };

   //  console.log(searchValue);

   return (
      <div className='header'>
         <div className="top">
            <div className="logo">
               <div className="logoImg"></div>
               <div className="logoTxt"></div>
            </div>
            <div className="nav">
               <button className='navBtn'>MY LIBRARY</button>
               <button className='navBtn'>HOME</button>
            </div>
         </div>
         <div className="searchPanel">
            <div className="search">
               <input
                  id="searching"
                  className="searchInput"
                  type='search'
                  placeholder='Movie search'
                  value={searchValue} // Привязываем значение к состоянию searchValue
                  onChange={onSetSearchValue} // Вызываем функцию при изменении значения
               />

               <div className='searchBtn'></div>
            </div>
         </div>
      </div>
   )
}

export default Header;