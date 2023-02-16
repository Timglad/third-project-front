import { Col} from "react-bootstrap"
import Product from "./Product"

function Cart({cart}) {
  return (
    <div> Cart Items:
    {cart.map(product => <Col xs={12} md={6} lg={4}><Product key={product.id} product={product}/></Col>)}
    </div>
  )
            }
export default Cart