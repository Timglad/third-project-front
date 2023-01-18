function Product({product}) {
  return (
    <div>
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img src={'https://shopping-k6qe.onrender.com'+product.image} alt={product.name}/>
    </div>
  )
}

export default Product