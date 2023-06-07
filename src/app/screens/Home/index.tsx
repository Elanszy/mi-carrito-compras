import React, { useState } from 'react';
import Product from './../../components/Product';
import Form from './../../components/Form';
import './styles.home.css'; 
import { FiShoppingCart } from 'react-icons/fi';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setTotalPrice(totalPrice + parseFloat(newProduct.price));
  };

  const handleIncrementCount = (index) => {
    const updatedProducts = [...products];
    const product = updatedProducts[index];

    product.count += 1;
    setProducts(updatedProducts);
    setTotalPrice(totalPrice + product.price);
  };

  const handleDecrementCount = (index) => {
    const updatedProducts = [...products];
    const product = updatedProducts[index];

    if (product.count > 0) {
      product.count -= 1;
      setProducts(updatedProducts);
      setTotalPrice(totalPrice - product.price);
    }
  };

  const handleRemoveProduct = (index) => {
    const removedProduct = products[index];
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    setProducts(updatedProducts);
    setTotalPrice(totalPrice - removedProduct.price * removedProduct.count);
  };

  return ( 
    <main>
    <header className="cabeza">
      <h1>Mi Carrito</h1>
      <div className="total-price">
        <FiShoppingCart className="cart-icon" />
        Precio total: ${totalPrice}
      </div>
    </header>
  
    <div className="container">
      <div id="carga">
        <Form handleAddProduct={handleAddProduct} />
      </div>
      <footer>Elian Simmons Web 2023</footer>
    </div>
  
    <div className="cart-section">
      <h2>Productos en el Carrito</h2>
      <div> 
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            index={index}
            handleIncrement={handleIncrementCount}
            handleDecrement={handleDecrementCount}
            handleRemove={handleRemoveProduct}
          />
      ))}
      </div>
    </div>
  </main>
  
  );
};

export default Home;
