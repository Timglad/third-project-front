import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    const [session, setSession] = useState(localStorage.getItem('sessionID'))

    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
          }
        // fetch("https://shopping-k6qe.onrender.com/products")
        axios.get("http://localhost:8000/products/", { headers:headers, withCredentials: true})
            .then((response) => setProducts(response.data))
                // console.log(response.headers)
            
        console.log('use effect called!')
    }, [session])

    // this function logs the user in
    function login(user, pass) {
        axios.post('http://localhost:8000/login/', {
            username: user,
            password: pass,
        })
            .then(response => {
                console.log(response.data);
                setSession(response.data.session)
                localStorage.setItem('sessionID', response.data.session)
            })
            .catch(error => {
                console.log(error);
                alert("something went wrong")
            });
    }

    return (
        <div className="App">
            <BrowserRouter>

                <h1>My Cart Application</h1>
                    {session ? <>
                    <Header />
                    <Routes>
                    <Route path="/" element={
                        <Products products={products} />} />
                    <Route path="/cart" element={<Cart />} />
                    </Routes>
                    </> :
                    <Routes>
                        <Route path="*" element={<LoginPage login={login} />} />
                    </Routes>
                    
                    }
                }


            </BrowserRouter>

        </div>
    );
}

export default App;
