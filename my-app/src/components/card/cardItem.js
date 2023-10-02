import './card.scss'
import FilmService from '../../service/FilmService'
import { useEffect, useState } from 'react'
import Pagination from '../plagination/Pagination'

const CardItem = () => {


   const [page, setPage] = useState(1);
   const [films, setFilms] = useState([]);

   const { getFilms } = FilmService()


   useEffect(() => {
      const fetchFilms = async () => {
         const fetchedFilms = await getFilms(page);
         setFilms(fetchedFilms)
      }
      fetchFilms();

   }, [page])


   const renderFilms = () => {
      console.log(films)
      if (films.length > 0) {
         return films.map(film => {
            const { date, nameOfFilm, id, ImgOfFilm } = film;
            const imgSrc = "https://image.tmdb.org/t/p/w500/" + ImgOfFilm
            return (
               <div className='card' key={id}>
                  <img className="img" src={imgSrc} />
                  <div className="film-name">{nameOfFilm}</div>
                  <div className="film-description">{date ? date : "...2023"}</div>
               </div>)
         })
      } else {
         return (<div />)
      }
   }
   const render = renderFilms();

   // функции пагинатора 
   const nextPage = () => page < 20 ? setPage(page + 1) : null
   const prevPage = () => page > 1 ? setPage(page - 1) : null
   const onSetPage = (number) => number > 1 & number < 20 ? setPage(number) : null


   return (
      <>
         <Pagination propFuncNext={nextPage} propFunPrev={prevPage} propOnSetPage={onSetPage} />
         {render}
      </>
   )

}


export default CardItem;