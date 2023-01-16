import { useEffect, useState } from "react";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/products/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
        console.log('use effect called!')
    }, [])

  return (
    <div className="App">
        <h1>My Cart Front end</h1>
        <Products products={products}/>


    </div>
  );
}

export default App;
