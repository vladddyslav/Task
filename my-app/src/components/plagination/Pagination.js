import './pagination.scss'
import CardItem from '../card/cardItem';

const Pagination = ({ propFuncNext, propFunPrev, propOnSetPage }) => {

   const onNextPage = () =>  propFuncNext()
   const onPrevPage = () =>  propFunPrev()
   const onSetPage = (number) => propOnSetPage(number)

   
   return (
      <div className='pagination'>
         <button className="btn-next-page" onClick={() => onPrevPage()}>Prev</button>
         <button className="btn-next-page" id={1} onClick={() => onSetPage(21)}>1</button>
         <button className="btn-next-page" id={2} onClick={() => onSetPage(2)}>2</button>
         <button className="btn-next-page" id={3} onClick={() => onSetPage(3)}>3</button>
         <button className="btn-next-page" id={4} onClick={() => onSetPage(4)}>4</button>
         <button className="btn-next-page" id={5} onClick={() => onSetPage(5)}>5</button>
         <button className="btn-next-page" id={6} onClick={() => onSetPage(6)}>6</button>
         <button className="btn-next-page" onClick={() => onNextPage()}>Next</button>
      </div>

   )
}

export default Pagination;