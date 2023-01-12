import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from './component/About/About';
import ForgetPassword from './component/Auth/ForgetPassword';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ResetPassword from './component/Auth/ResetPassword';
import Contact from './component/Contact/Contact';
import Courses from './component/Courses/Courses';
import Home from './component/Home/Home';
import Footer from './component/Layout/Footer/Footer';
import Header from './component/Layout/Header/Header';
import Request from './component/Request/Request';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/courses' element={<Courses></Courses>} />
    <Route path='/login' element={<Login></Login>} />
    <Route path='/register' element={<Register></Register>} />
    <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>} />
    <Route path='/resetpassword/:token' element={<ResetPassword></ResetPassword>} />
    <Route path='/contact' element={<Contact></Contact>} />
    <Route path='/request' element={<Request></Request>} />
    <Route path='/about' element={<About></About>} />
    </Routes>

    <Footer></Footer>
    </Router>
   
  );
}

export default App;
