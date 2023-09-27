import './Header.scss'

const Header = () => {
   return (
      <div className='header'>
         <div className="top">
            <div className="logo">
               <div className="logoImg"></div>
               <div className="logoTxt"></div>
            </div>
            <div className="nav">
               <button className='navBtn'>MY LIBRARY</button>
               <button className='navBtn'>HOME</button>
            </div>
         </div>
         <div className="searchPanel">
            <input className="searchInput" type='search' placeholder='Movie search'  />
         </div>
      </div>
   )
}

export default Header;