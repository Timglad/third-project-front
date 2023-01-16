import Product from "./Product"

function Products({products}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    {products.map(product => <Product key={product.id} product={product}/>)}


    </div>
  )
}

export default Products