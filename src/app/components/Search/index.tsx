import { useState } from "react"; 
import Product from "../Product";


function Search() {
  const [name, setName] = useState("holaaaa");  
  const [description, setDescription] = useState("chauu");  
  const [price, setPrice] = useState("mangos");  
  const Producto = [name, description, price]

 

  return ( 
    <form> 
      <h1>Cargar Producto</h1>
      <div>
        <label htmlFor="name">Nombre del Producto</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div> 
      <div>
        <label htmlFor="description">Descripcion(opcional)</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div> 
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div> 
    </form>  
  ); 
}

export default Search;
