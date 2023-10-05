import './pagination.scss'

const Pagination = ({ propFuncNext, propFunPrev, propOnSetPage, activePage, totalPages }) => {
   const onNextPage = () => propFuncNext()
   const onPrevPage = () => propFunPrev()
   const onSetPage = (number) => propOnSetPage(number)


   const renderAllPage = () => {
      const pagesArr = []
      for (let i = 1; i <= 6; i++) {
         pagesArr.push((<div className={i == activePage ? "btn-page __active" : "btn-page"} key={i} onClick={() => onSetPage(i)}>{i}</div>))
      }


      console.log(pagesArr[0])
      return pagesArr;
   }

   const renderNeedsPages = () => {
      const needPageArrr = [(<div className='btn-page'  onClick={() => onSetPage(1)}  >....</div>)]

      const pagesFillter = (pageNow) => {
         const newPageArr = renderAllPage;
         for (let i = (pageNow - 2); i <= totalPages && i <= pageNow + 2; i++) {
            if (pageNow < totalPages) {
               needPageArrr.push((<div className={i == activePage ? "btn-page __active" : "btn-page"} key={i} onClick={() => onSetPage(i)}>{i}</div>))
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
               <div className="btn-page __prev" onClick={() => onPrevPage()}></div>
               {activePage < 3 ? renderAllPage() : null}
               {activePage >= 3 ?
                  renderNeedsPages()
                  : null}
               <div className="btn-page __next" onClick={() => onNextPage()}></div>
            </div>
         </>
      )
   }

   return (
      renderPagination()
   )
}

export default Pagination;