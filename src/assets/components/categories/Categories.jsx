import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Categories.css';
import useCartStore from '../../../store/cartstore';
import AdditionalSection from '../AdditionalSe/Additional';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { addToCart } = useCartStore();

  const categoryApis = {
    Jewelry: 'https://fakestoreapi.com/products/category/jewelery',
    Electronics: 'https://fakestoreapi.com/products/category/electronics',
    MenClothing: 'https://fakestoreapi.com/products/category/men\'s%20clothing',
    WomenClothing: 'https://fakestoreapi.com/products/category/women\'s%20clothing'
  };

  useEffect(() => {
    if (category && categoryApis[category]) {
      fetch(categoryApis[category])
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }
  }, [category]);

  return ( 
    <>
      <div className="banner-cont">
        <img src="/homeheader.jpg" alt="Banner" className="baner" />
        <div className="baner-text">
          <h2>Look Good With Us!</h2>
        </div>
      </div>

      <div className="category-page">
        <h2>{category ? `${category} Products` : 'Categories'}</h2>

        {!category && (
          <div className="category-links">
            <Link to="/category/Jewelry" className="category-item">
              <img src="/jew2.jpg" alt="Jewelry" />
              <p>Jewelry</p>
            </Link>
            <Link to="/category/Electronics" className="category-item">
              <img src="/elec.jpg" alt="Electronics" />
              <p>Electronics</p>
            </Link>
            <Link to="/category/MenClothing" className="category-item">
              <img src="/clothes.webp" alt="Men's Clothing" />
              <p>Men's Clothing</p>
            </Link>
            <Link to="/category/WomenClothing" className="category-item">
              <img src="/women.webp" alt="Women's Clothing" />
              <p>Women's Clothing</p>
            </Link>
          </div>
        )}

        {category && (
          <div className="products-list">
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                  <p className='cur'>Price: ${product.price}</p>

                  <button onClick={() => addToCart(product,1)}>
                    Add to cart
                  </button>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        )}

      
      </div> 
    </>
  ); 
};

export default CategoryPage;
