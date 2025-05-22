import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import StatsPanel from "./components/StatsPanel";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=40").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = filteredProducts.length;
  const maxProduct = Math.max(...filteredProducts.map((p) => p.price));
  const minProduct = Math.min(...filteredProducts.map((p) => p.price));
  const maxPriceProduct =
    filteredProducts.length > 0
      ? filteredProducts.find((p) => p.price === maxProduct).title
      : "";
  const minPriceProduct =
    filteredProducts.length > 0
      ? filteredProducts.find((p) => p.price === minProduct).title
      : "";
  const priceTotal = Math.round(
    filteredProducts.reduce((acumulador, p) => acumulador + p.price, 0));

  return (
    <div>
      <Header />

      <h2 className="text-2xl text-center m-4">Lista de productos</h2>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Buscar producto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded text-center"
        />
      </div>

      <ProductList products={filteredProducts} />

      {filteredProducts.length === 0 && (
        <div className="text-center m-4">No se encontraron productos</div>
      )}

      <div className="flex justify-center">
        <button
          onClick={() => setShow(!show)}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold p-3 rounded-4xl"
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {show && (
        <StatsPanel
          total={totalProducts}
          maximo={maxProduct}
          minimo={minProduct}
          productoCaro={maxPriceProduct}
          productoBarato={minPriceProduct}
          precioTotal={priceTotal}
        />
      )}
    </div>
  );
}

export default App;
