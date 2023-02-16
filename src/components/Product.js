import { Alert } from "react-bootstrap"

function Product({product}) {
  return (
    <div>
        <h3>{product.name}</h3>
        <h3>{product.id}</h3>
        <p>{product.description}</p>
        <Alert key="info">{product.price}</Alert>
        {/* <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/> */}
        <img src={'http://localhost:8000/static'+product.image} alt={product.name}/>
    </div>
  )
}

export default Product