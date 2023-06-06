import React from 'react'; 
import './styles.module.css'

const Product = ({ product, index, handleIncrement, handleDecrement, handleRemove }) => {
  return (
    <div className='product-card'>
      <h3 className='h3'>{product.name}</h3>
      {product.description && <p>{product.description}</p>}
      <p className='p'>Precio: ${product.price}</p>
      <div className="counter">
        <button className= 'button' onClick={() => handleDecrement(index)}>-</button>
        <span>{product.count}</span>
        <button className= 'button' onClick={() => handleIncrement(index)}>+</button>
      </div>
      <button className= 'button' onClick={() => handleRemove(index)}>Sacar del carrito</button>
    </div>
  );
};

export default Product;


