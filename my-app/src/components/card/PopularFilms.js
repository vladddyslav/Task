import './card.scss'
import FilmService from '../../service/FilmService'
import { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'

const PopularFilms = () => {

   const [films, setFilms] = useState({ data: [], pages: 20 });

   const { getFilms, renderFilms, page, nextPage, prevPage, onSetPage } = FilmService()

   useEffect(() => {
      const fetchFilms = async () => {
         const fetchedFilms = await getFilms();
         setFilms({ data: fetchedFilms.data, pages: 20 })
      }
      fetchFilms();
   }, [page])


   const render = renderFilms(films);


   return (
      <>
         {render}
         {<Pagination
            propFuncNext={nextPage}
            propFunPrev={prevPage}
            propOnSetPage={onSetPage}
            activePage={page}
            totalPages={films.pages} />}
      </>
   )

}


export default PopularFilms;