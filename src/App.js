import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://shopping-k6qe.onrender.com/products/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
        console.log('use effect called!')
    }, [])

    return (
        <div className="App">
            <BrowserRouter>

                <h1>My Cart Front end</h1>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Products products={products} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>

                
            </BrowserRouter>

        </div>
    );
}

export default App;
