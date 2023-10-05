import './card.scss'
import FilmService from '../../service/FilmService'
import { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'

const CardItem = ({ searchValue }) => {

   // CardList <Search, Pagination, Card>
   // getFilms = film, totalFilms

   const [page, setPage] = useState(1);
   const [films, setFilms] = useState({data: [], pages: 20});
   const [searching, setSearching] = useState(false)
   
   const { getFilms, getSearch, errImage } = FilmService()

   useEffect(() => {
      const fetchFilms = async () => {
         console.log(films.length)

         // гетФілмс викликаєтся тіки якщо немає фільмів або ми стерли серч
         // серч викликаєтся на зміні і тіки коли є певна кількість символів
         // useMemo

         if (searchValue.length < 2) {
            const fetchedFilms = await getFilms(page);
            // setState({films: fetchedFilms.films, pages: fetchedFilms.pages})
            setFilms({data: fetchedFilms.data, pages: 20})
            setSearching(false)
         } else if (searchValue.length > 2) {
            const fetchedFilms = await getSearch(searchValue);
            setFilms({data: fetchedFilms, pages: 20})
            setSearching(true)
         }
      }
      fetchFilms();
   }, [page, searchValue])

   const renderFilms = () => {

      if (films.data.length > 0) {
         return films.data.map(film => {
            const { date, nameOfFilm, id, ImgOfFilm } = film;
            const imgSrc = ImgOfFilm? "https://image.tmdb.org/t/p/w500/" + ImgOfFilm : errImage
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
   const onSetPage = (number) => number >= 1 & number < 20 ? setPage(number) : null


   return (
      <>
         {render}
         {!searching && (<Pagination 
         propFuncNext={nextPage} 
         propFunPrev={prevPage} 
         propOnSetPage={onSetPage}
         activePage={page}
         totalPages={films.pages}/>)}
      </>
   )

}


export default CardItem;