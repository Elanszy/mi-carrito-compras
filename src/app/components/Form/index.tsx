import React, { useState } from 'react'; 
import './styles.form.css'

const Form = ({ handleAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name && price) {
      const newProduct = {
        name: name,
        description: description,
        price: parseFloat(price),
        count: 1
      };

      handleAddProduct(newProduct);

      // Reset form fields
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <div className="form-section">
      <h2 className="titulo">Agregar Producto</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Descripción:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <button type="submit" disabled={!name || !price}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Form;
