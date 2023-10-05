import './../card/card.scss'
import FilmService from '../../service/FilmService'
import Pagination from '../pagination/Pagination'
import { useEffect, useState } from 'react'

const Search = ({ searchValue }) => {

   const [films, setFilms] = useState({ data: [], pages: 20 });

   const { getSearch, renderFilms, page, nextPage, prevPage, onSetPage } = FilmService()

   useEffect(() => {
      const fetchFilms = async () => {
         const fetchedFilms = await getSearch(searchValue);
         setFilms({ data: fetchedFilms, pages: 20 })
      }
      fetchFilms();
   }, [page, searchValue])

   const render = renderFilms(films);

   return (
      <>
         {renderFilms(films)}
         {<Pagination
            propFuncNext={nextPage}
            propFunPrev={prevPage}
            propOnSetPage={onSetPage}
            activePage={page}
            totalPages={films.pages} />}
      </>
   )

}


export default Search;