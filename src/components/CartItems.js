import { Col, Container, Row } from "react-bootstrap"
import Cartitem from "./Cartitem"

function Cartitems({cartitems}) {
  return (
    <div>
    <Container fluid> 
    <Row>
    {cartitems.map(cartitem => <Col xs={12} md={6} lg={4}><Cartitem key={cartitem.id} cartitem={cartitem}/></Col>)}    </Row>
    </Container>
    </div>
  )
}

export default Cartitems
