import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from './component/About/About';
import Admincourses from './component/Admin/Admincourses/Admincourses';
import CreateCourse from './component/Admin/CreateCourse/CreateCourse';
import Dashboard from './component/Admin/Dashboard/Dashboard';
import Users from './component/Admin/Users/Users';
import ForgetPassword from './component/Auth/ForgetPassword';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ResetPassword from './component/Auth/ResetPassword';
import Contact from './component/Contact/Contact';
import CoursePage from './component/CoursePage/CoursePage';
import Courses from './component/Courses/Courses';
import Home from './component/Home/Home';
import Footer from './component/Layout/Footer/Footer';
import Header from './component/Layout/Header/Header';
import NotFound from './component/Layout/NotFound/NotFound';
import PaymentFailed from './component/Payments/PaymentFailed';
import PaymentSuceeess from './component/Payments/PaymentSuceeess';
import Subscribe from './component/Payments/Subscribe';
import ChangePassword from './component/Profile/ChangePassword';
import Profile from './component/Profile/Profile';
import UpdateProfile from './component/Profile/UpdateProfile';
import Request from './component/Request/Request';
import Paymenttest from '../src/paymenttest'
//payment 
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from "react-hot-toast"
import { useEffect } from 'react';
import { loaduser } from './redux/actions/user';
import {ProtectedRoute} from "protected-route-react"

function App() {
  // window.addEventListener('contextmenu',e=>{
  //   e.preventDefault()
  // })
  //payment
  const stripePromise = loadStripe("pk_test_51MaBGjCfCnJCyV0J3b7Wh9YHPGx011J4vOjU04Ee8oZsbK20aGp9LEJbcODzWoUdQsEQORVybib397SKjPsTVh6F00K9F4J82m")
  const {isAuthenticated,user,message,error}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }

    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})
    }


  },[dispatch,error,message])
  useEffect(() => {
    dispatch(loaduser())
  }, [dispatch])
  
  return (
    <Router>
    <Header isAuthenticated={isAuthenticated} user={user} />
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/courses' element={<Courses></Courses>} />
    <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login></Login></ProtectedRoute>} />
    <Route path='/register' element={<Register></Register>} />
    <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>} />
    <Route path='/resetpassword/:token' element={<ResetPassword></ResetPassword>} />
    <Route path='/contact' element={<Contact></Contact>} />
    <Route path='/request' element={<Request></Request>} />
    <Route path='/about' element={<About></About>} />
    <Route path='/subscribe' element={<Subscribe></Subscribe>} />
    <Route path='*' element={<NotFound></NotFound>} />
    <Route path='/paymentsuccess' element={<PaymentSuceeess></PaymentSuceeess>} />
    <Route path='/paymentfailed' element={<PaymentFailed></PaymentFailed>} />
    <Route path='/course/:id' element={<CoursePage></CoursePage>} />
    <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile></Profile></ProtectedRoute>} />
    <Route path='/changepassword' element={<ChangePassword></ChangePassword>} />
    <Route path='/updateprofile' element={<UpdateProfile></UpdateProfile>} />
    {/* Admin path routes */}
    <Route path='/admin/dashboard' element={<Dashboard></Dashboard>} />
    <Route path='/admin/createcourse' element={<CreateCourse></CreateCourse>} />
    <Route path='/admin/courses' element={<Admincourses></Admincourses>} />
    <Route path='/admin/users' element={<Users></Users>} />
    
    <Route path='/paymenttest' element={<Paymenttest></Paymenttest>} />

    </Routes>

    <Elements stripe={stripePromise}>
        <Paymenttest />
      </Elements>

    <Footer></Footer>
    <Toaster />
    </Router>
   
  );
}

export default App;
