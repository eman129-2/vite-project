import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

  const { id, image, category, title, price } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>

      <div>
        <button>
          <BsPlus /> ADD to cart
        </button>

        <Link to={`/product/${id}`}>
          <BsEyeFill /> View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
