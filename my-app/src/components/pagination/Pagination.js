import './pagination.scss'

const Pagination = ({ propFuncNext, propFunPrev, propOnSetPage, activePage, totalPages }) => {
   const onNextPage = () => propFuncNext()
   const onPrevPage = () => propFunPrev()
   const onSetPage = (number) => propOnSetPage(number)


   const renderAllPage = () => {
      const pagesArr = []
      for (let i = 1; i <= 6; i++) {
         pagesArr.push((<button className="btn-next-page" key={i} onClick={() => onSetPage(i)}>{i}</button>))
      }


      return pagesArr;
   }

   const renderNeedsPages = () => {
      const needPageArrr = [(<button className='btn-next-page'  onClick={() => onSetPage(1)}  >....</button>)]

      const pagesFillter = (pageNow) => {
         const newPageArr = renderAllPage;
         for (let i = (pageNow - 2); i <= totalPages && i <= pageNow + 2; i++) {
            if (pageNow < totalPages) {
               needPageArrr.push((<button className="btn-next-page" onClick={() => onSetPage(i)}>{i}</button>))
            }
         }
         return needPageArrr
      }
      let pageArr = pagesFillter(activePage);

      return (pageArr)
   }

   const renderPagination = () => {

      return (
         <>
            <div className="pagination">
               <button className="btn-next-page" onClick={() => onPrevPage()}>Prev</button>
               {activePage < 3 ? renderAllPage() : null}
               {activePage >= 3 ?
                  renderNeedsPages()
                  : null}
               
               <button className="btn-next-page" onClick={() => onNextPage()}>Next</button>
            </div>
         </>
      )
   }

   return (
      renderPagination()
   )
}

export default Pagination;