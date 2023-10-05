
import { useState } from "react";

const FilmService = () => {

   const [page, setPage] = useState(1);


   const popularOptions = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWFiMDBlNmUyOThiYWRhMGU2ZDU0MzdhNGQ3OGRlMCIsInN1YiI6IjY1MTViMzhmMWRiNjVkMDBlMzFjNGFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBx2s5VkHa8ORymvz88x9AMYUbyAEGXZKptjxvEKz-k'
      }
   };

   const searchOption = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWFiMDBlNmUyOThiYWRhMGU2ZDU0MzdhNGQ3OGRlMCIsInN1YiI6IjY1MTViMzhmMWRiNjVkMDBlMzFjNGFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBx2s5VkHa8ORymvz88x9AMYUbyAEGXZKptjxvEKz-k'
      }
   }

    const errImage = "https://img.freepik.com/free-vector/curious-concept-illustration_114360-2185.jpg?w=740&t=st=1696471465~exp=1696472065~hmac=8215a74681ac5b131c8b356af07c27b0e6da151adc5bc63177b263e43014e1d4"
   
   // общие функции 

   const _transformFilms = (el) => {
      return {
         ImgOfFilm: el.backdrop_path,
         id: el.id,
         nameOfFilm: el.name ? el.name : el.title,
         date: el.release_date ? el.release_date : ''
      }
   }

   const renderFilms = (films) => {

      if (films.data.length > 0) {
         return films.data.map(film => {
            const { date, nameOfFilm, id, ImgOfFilm } = film;
            const imgSrc = ImgOfFilm? "https://image.tmdb.org/t/p/w500/" + ImgOfFilm : errImage
            return (
               <div className='card' key={id}>
                  <img className="img" src={imgSrc} alt="Film" />
                  <div className="film-name">{nameOfFilm}</div>
                  <div className="film-description">{date ? date : "...2023"}</div>
               </div>)
         })
      } else {
         return (<div/>)
      }
   }

   // 
   // {films: [], totalPages: 1000}

   // функции популярных фильмов
   const getPopularFilms = async (page) => {
      return fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, popularOptions)
         .then(response => response.json())
         .then(responseJson => {
            console.log(responseJson)
            return { results: responseJson.results, totalPages: responseJson.total_pages }
         })
      // .then(responseJson => ({results: responseJson.results, totalPages: responseJson.total_pages}))
   }

   const getFilms = async () => {
      const films = await getPopularFilms(page);
      console.log(films)
      return { data: films.results.map(_transformFilms), totalPages: films.totalPages }
   }

   // поисковые функции

   const getSearchedFilms = async (search) => {
      return fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`, searchOption)
         // return fetch('https://api.themoviedb.org/3/search/movie?query=black    &include_adult=false&language=en-US&page=1', searchOption)
         .then(response => response.json())
         .then(responseJson => responseJson.results)

   }

   const getSearch = async (search) => {
      const data = await getSearchedFilms(search);
      return data.map(_transformFilms)
   }
   // функции пагинатора 
   const nextPage = () => page < 20 ? setPage(page + 1) : null
   const prevPage = () => page > 1 ? setPage(page - 1) : null
   const onSetPage = (number) => number >= 1 & number < 20 ? setPage(number) : null


   return {
      getFilms,
      getSearch,
      getSearchedFilms,
      renderFilms,
      page,
      nextPage,
      prevPage,
      onSetPage,
      errImage
   };
};

export default FilmService;