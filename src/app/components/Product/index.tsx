import React from 'react'; 
import './styles.product.css'

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
      <button className= 'button2' onClick={() => handleRemove(index)}>Quitar</button>
    </div>
  );
};

export default Product;


