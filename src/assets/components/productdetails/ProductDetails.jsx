import React, { useState, useEffect } from 'react';
import useCartStore from '../../../store/cartstore'; 

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-details">
      {product && (
        <>
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>   

          <p className="product-description">{product.description}</p>
          
          <div className="product-quantity">
            <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>

          <div className="product-actions">
            <button className="product-action-button" onClick={handleAddToCart}>أضف إلى السلة</button>
            <button className="product-action-button">قارن</button>
            <button className="product-action-button">شارك</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
