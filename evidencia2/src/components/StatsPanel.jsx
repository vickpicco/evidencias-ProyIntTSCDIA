function StatsPanel({ total, maximo, minimo, productoCaro, productoBarato, precioTotal }) {
  return (
    <div className= "bg-white text-center mt-4 p-4 rounded-lg">
      <p>Total de productos: {total}</p>
      <p>Producto más caro: {productoCaro} (${maximo})</p>
      <p>Producto más barato: {productoBarato} (${minimo})</p>
      <p>Suma total de precios: ${precioTotal}</p>
    </div>
  );
}

export default StatsPanel;