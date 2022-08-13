
import './App.css';
import Navbar from './Pages/SharedPages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/SharedPages/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
