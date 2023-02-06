import React from 'react';
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom'
import Home from './Home/index';
import Contact from './Contact/index';
import About from './About/index';
import Product from './Product/index';
import { Result, Button } from 'antd'
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import ProductsDetail from './ProductsDetail/index';
import Cart from './Cart/index';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                    <Route path='product' element={<Product />} />
                    <Route path='product/:id' element={<ProductsDetail />} />
                    <Route path='signin' element={ <SignIn/>} />
                    <Route path='signup' element={ <SignUp/>} />
                    <Route path='cart' element={ <Cart/>} />



                </Route>
                <Route path='*' element={<Navigate to="/404" />} />
                <Route path='404' element={<Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
                />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;
