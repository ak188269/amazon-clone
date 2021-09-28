import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    
    return (
        /*header starts from here */
        <div className="header">
                <Link to="/">
           
            <img  className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
            </Link>
                <div className='header_nav'>
                    <div onClick={handleAuthenticaton} className='header_option'
                    >
                      
                       {!user ? 'Hello' : 'Deliver in'}
                   <br/><LocationOnIcon />
                   <span className='bold'>{!user?'Select your address':'Patna,Bihar'}</span>
                   </div>
                  
                   
                   <div className='header_search'>
               
                <input className='header_searchInput'
                type='text' />
                <SearchIcon className='header_searchIcon' />
                </div>
                       <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
          
            <span className="header__optionLineOne">
              Hello {!user ? '' : user.email}</span><br/>
              {/* Hello {!user ? '' : user.email} <br/> */}
            <span className="header__optionLineTwo ">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
                    <Link to='/orders'>
                    <div className='header_option'>
                       {/* <span>Return</span>  */}
                       Return
                       <br/> <span> &#160;  &#38; Orders</span>
                    </div>
                    </Link>
                    <Link to="/checkout">
          <div className="header__optionBasket">
          <ShoppingCartIcon className='shoping_basket'/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
                  
              
            </div>
            
        </div>
        

    )
}

export default Header
