import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    const [session, setSession] = useState('')

    useEffect(() => {
        // fetch("https://shopping-k6qe.onrender.com/products/")
        fetch("http://localhost:8000/products/")
        .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
        console.log('use effect called!')
    }, [])

// this function logs the user in
    function login(user, pass) {
        axios.post('http://localhost:8000/login/', {
            username: user,
            password: pass,
        })
            .then(response => {
                console.log(response.data);
                setSession(response.data.session)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="App">
            <BrowserRouter>

                <h1>My Cart Front end</h1>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Products products={products} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginPage login={login}/>} />
                </Routes>


            </BrowserRouter>

        </div>
    );
}

export default App;
