import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProductsStore from '../../../store/productstore'; 
import useCartStore from '../../../store/cartstore';
import './All.css';

const Products = () => {
  const { products, loading, getProducts } = useProductsStore();
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <>
      
      <div className="banner-cont">
        <img src="/header.png" alt="Banner" className="banner" />
        <div className="banner-text">
          <h2>Shop</h2>
        </div>
      </div>

      <div className='shop-container'>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2 className='title'>{product.title}</h2>
              <p className='price'>{product.price} USD</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product,1)}>
                Add to cart
              </button>
            </div>
          ))}

        </div>

      </div>
    </>
  );
};

export default Products;
