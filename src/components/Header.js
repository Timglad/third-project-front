import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header({ logout }) {
  return (

    

      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
        <Nav.Link as={Link} to="/">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
        <Nav.Link as={Link} onClick={logout} to="/">Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    
  )
}

export default Header