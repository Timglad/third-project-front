import { Alert } from "react-bootstrap"

function Product({product}) {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Alert key="info">{product.price}</Alert>
        <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/>
    </div>
  )
}

export default Product