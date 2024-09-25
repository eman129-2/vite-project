import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './assets/components/Navbar/Navbar';
import CategoryPage from './assets/components/categories/Categories';
import Products from './assets/components/allproducts/All'; 
import Contact from './assets/components/ContactPage/contact';
import Product from './assets/components/product';
import CartPage from './pages/CartPage';
import CartProvider from './assets/components/Cart/CartContext';
import ProductDetails from './assets/components/productdetails/ProductDetails';
import ProductList from './assets/components/ProductList/ProductList';
import ProductProvider from './assets/components/ProductList/ProductList';
import AdditionalSection from './assets/components/AdditionalSe/Additional';
import './App.css';

function App() {
  const allProductsApi = 'https://fakestoreapi.com/products';
  return (
    <CartProvider>
      <ProductProvider>
  
          <Router>
            <div>
              <NavBar />
              <Routes>
                <Route path="/shop" element={<Products apiUrl={allProductsApi} />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/" element={<CategoryPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users" element={<Product />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/list" element={<ProductList />} />
              </Routes>
              <AdditionalSection />
            </div>
          </Router>
        
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
