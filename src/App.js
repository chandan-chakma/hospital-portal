import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/SharedPages/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>
        <Route></Route>
      </Routes>

    </div>
  );
}

export default App;
