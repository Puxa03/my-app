import './App.css';
import Register from './Components/Register';
import RegisterAsBarber from './Components/RegisterAsBarber';
import Login from './Components/Login';
import Home from './Components/Home'
import Navbar from './Components/Navbar/NavBar'
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { useState } from 'react';
import { Guard } from './Components/Guards';



function App() {
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")));
  
    

  return(
    <div>
          <Navbar logged={loggedUser} setLoggedUser={setLoggedUser}/>                  

      <Routes>
            <Route path='*' element={<Navigate to="/home"/>} />
            <Route path="register" element={
              <Guard user={loggedUser}>
                <Register />
              </Guard>
            } />



            <Route path="login" element={
              <Guard user={loggedUser}>
                <Login setLoggedUser={setLoggedUser}/>
              </Guard>
            } />
            
            <Route path="home" element={<Home user={loggedUser}/>} />
            <Route path="registerasbarber" element={
              <Guard user={loggedUser}>
                <RegisterAsBarber />
              </Guard>
            } />
      </Routes>

    </div>
     
  )
}

export default App;
