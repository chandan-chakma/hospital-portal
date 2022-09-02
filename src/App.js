
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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import AllUser from './Pages/Dashboard/AllUser';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>

        {/* =======================dashboard=================================================== */}
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='alluser' element={<RequireAdmin>
            <AllUser></AllUser>
          </RequireAdmin>}></Route>
          <Route path='adddoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin>
            <ManageDoctor></ManageDoctor>
          </RequireAdmin>}></Route>

        </Route>


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
