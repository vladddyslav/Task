
const FilmService = () => {


   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWFiMDBlNmUyOThiYWRhMGU2ZDU0MzdhNGQ3OGRlMCIsInN1YiI6IjY1MTViMzhmMWRiNjVkMDBlMzFjNGFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBx2s5VkHa8ORymvz88x9AMYUbyAEGXZKptjxvEKz-k'
      }
   };


   const getAllFilms = async ( page, options) => {
      return fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
         .then(response => response.json())
         .then(responseJson => responseJson.results)

   }
 
   const getFilms = async (page) => {
      const data = await getAllFilms(page, options);
      return data.map(_transformFilms)
   }

   const _transformFilms = (el) => {
      return {
         ImgOfFilm: el.backdrop_path,
         id: el.id,
         nameOfFilm: el.name ? el.name : el.title,
         date: el.release_date ? el.release_date : ''
      }
   }



   return {
      getFilms
   };
};

export default FilmService;