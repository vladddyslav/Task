import './cardList.scss'
// import { useEffect, useState } from 'react';
// import Spinner from '../spinner/spinner';
import Search from '../Searching/Searching';
import PopularFilms from '../card/PopularFilms';
// import Pagination from '../pagination/Pagination';
// import FilmService from '../../service/FilmService';
const CardList = ({ searchValue }) => {
   return (
      <div className='cardlist'>
         {searchValue.length > 2 ?
            <Search searchValue={searchValue} /> :
            <PopularFilms />}
      </div>
   )
}

export default CardList;