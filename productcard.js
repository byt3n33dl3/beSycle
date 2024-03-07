import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
        </div>
    );
};

export default ProductCard;
