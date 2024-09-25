import React, { useState, useEffect, createContext } from 'react';

export const ProductContext = createContext();

// Use default export for ProductProvider
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts(); 
  }, []); 

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
