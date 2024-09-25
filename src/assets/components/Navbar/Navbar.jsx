import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import CartIcon from '../../../../public/bag.png';
import useCartStore from '../../../store/cartstore';
import CartPage from '../../../pages/CartPage';

const NavBar = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems(); 
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); 

  const openCartSidebar = () => {
    setIsCartOpen(true);
  };

  const closeCartSidebar = () => {
    setIsCartOpen(false);
  };

  const goToCartPage = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src="/navlogo.png" alt="Furniro Logo" className="logo" />
          <span className="site-name">Furniro</span>
        </div>

        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shop">Shop</Link></li>

          <li onClick={openCartSidebar} className="cart-button">
            <div className="cart-container">
              <img src={CartIcon} alt="Cart" className="cart-icon" />
              <span className="cart-text"></span> 
              {totalItems > 0 && ( 
                <span className="cart-count">{totalItems}</span>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <CartPage onClose={closeCartSidebar} />
        <button onClick={goToCartPage} className='cart-page'>let's go Cart</button> 
      </div>
    </>
  );
};

export default NavBar;
