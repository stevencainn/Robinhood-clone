import React from 'react'
import Logo from './robinhood.svg';

function Header() {
    return (
        <div className="header__wrapper">
            {/*logo*/}
         <div className="header__logo">
             <img src={Logo} width={25}></img>
         </div>   

         {/*search*/}
         <div className="header__search">
             <div className="header__seachContainer">
                 
             </div>
         </div>
           
            
        </div>
    )
}

export default Header
