import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Cartitems from "./components/Cartitems"
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    const [cartitems, setCartitems] = useState([])
    const [session, setSession] = useState(localStorage.getItem('session'))

    axios.defaults.withCredentials = true;


    useEffect(() => {
        // fetch("https://shopping-k6qe.onrender.com/products")
        axios.get("http://localhost:8000/cart/")
            .then((response) => setCartitems(response.data))
    }, [])

    useEffect(() => {
        // fetch("https://shopping-k6qe.onrender.com/products")
        axios.get("http://localhost:8000/products/")
            .then((response) => setProducts(response.data))
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
                setSession(response.data.user)
                localStorage.setItem('session', response.data.user)

            })
            .catch(error => {
                console.log(error);
                let status = error.message
                switch (error.code) {
                    case "ERR_BAD_REQUEST":
                        status = "username or password not correct"
                        break
                    case "ERR_NETWORK":
                        status = "could not reach the server. perhaps it is down?"
                        break
                    case "ERR_BAD_RESPONSE":
                        status = "server is up. but had an error. you can try again in a fews seconds"
                        break
                    default:
                        break
                }
                alert("something went wrong: " + status)
            });
    }
    function logout() {

        // fetch("https://shopping-k6qe.onrender.com/products")
        axios.get("http://localhost:8000/logout/")
        setSession(null)
        localStorage.removeItem('session')
    }

    return (
        <div className="App">
            <BrowserRouter>

                <h1>My Cart Application</h1>
                {session? <h2>Hello {session}</h2> : 'please login'}
                    <Header logout={logout} />
                    <Routes>
                        <Route path="/" element={<Products products={products} />} />
                        <Route path="/cart"  element={<Cartitems cartitems={cartitems} />} />
                        <Route path="/logout" element={<Cartitems />} />
                        <Route path="/login" element={<LoginPage login={login} />} />
                    </Routes>


            </BrowserRouter>

        </div>
    );
}

export default App;
