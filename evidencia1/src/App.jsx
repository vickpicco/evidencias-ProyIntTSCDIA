import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline italic text-center m-4">Evidencia I</h1>
      <h2 className="text-xl text-center">Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial</h2>
      <h3 className="text-lg text-center">Materia: Proyecto Integrador</h3>
      <h3 className="text-lg text-center">Alumno: Picco, Victoria</h3>

      <h2 className="text-2xl text-center m-4">Lista de productos</h2>

      <div className="Grid grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 m-2">
            <h3 className="font-semibold">{product.title}</h3>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;