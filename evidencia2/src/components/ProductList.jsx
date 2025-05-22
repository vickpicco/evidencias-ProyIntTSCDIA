function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md p-4 m-2 border border-pink-300">
          <h3 className="font-semibold">{product.title}</h3>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;