

function CartItems({cart}) {
  return (
    <div>
        <h3>{cart.id}</h3>
        <p>{cart.product}</p>
        {/* <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/> */}
    </div>
  )
}

export default CartItems
