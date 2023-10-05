import './cardList.scss'
import CardItem from '../card/cardItem';
import { useState } from 'react';
import Spinner from '../spinner/spinner';

const CardList = ({ searchValue }) => {
   const [loading, setLoading] = useState(false);

   return (
      <div className='cardlist'>
         {loading ? <Spinner/> : <CardItem searchValue={searchValue}  />}
      </div>

   )
}

export default CardList;