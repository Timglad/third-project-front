import { Col, Container, Row } from "react-bootstrap"
import Product from "./Product"

function Products({products}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    <Container fluid> 
    <Row>
    {products.map(product => <Col xs={12} md={6} lg={4}><Product key={product.id} product={product}/></Col>)}
    </Row>
    </Container>

    </div>
  )
}

export default Products