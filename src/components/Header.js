import { Link } from "react-router-dom"

function Header({logout}) {
  return (
    
    <div>
        
        <Link to="/">Products</Link>
        <br/>
        <Link to="/cart">Cart</Link>
        <br/>        
        <Link to="/" onClick={logout}>Logout</Link>
        
        
        </div>
  )
}

export default Header